// =============================================================================
// Generate Audio Narrations
// (c) Mathigon
// =============================================================================


const fs = require('fs');
const path = require('path');

const ffmpeg = require('fluent-ffmpeg');
const JSDom = require('jsdom').JSDOM;
const {parseFull, extractText, getAudioTimings, writeAudioTimings, textHash} = require('@mathigon/parser');
const textToSpeech = require('@google-cloud/text-to-speech');

const KEY = `../../mathigon.org/data/service-account.json`;
const CONTENT = path.join(__dirname, '../content');
const TMP = path.join(__dirname, '.tmp');

const CLIENT = new textToSpeech.TextToSpeechClient(
    {keyFilename: path.join(__dirname, KEY)});


// -----------------------------------------------------------------------------
// MP3 Utilities

async function mp3Clip(inputFile, outputFile, timings) {
  return new Promise((resolve, reject) => {
    ffmpeg(inputFile)
        .setStartTime(timings.start / 1000)
        .setDuration((timings.end - timings.start) / 1000)
        .on('error', (err) => reject(err))
        .on('end', () => resolve())
        .saveToFile(outputFile);
  });
}

async function mp3Merge(output, files) {
  let command = ffmpeg();
  for (const f of files) command = command.input(f);
  return new Promise((resolve, reject) => {
    command.on('error', (err) => reject(err))
        .on('end', () => resolve())
        .mergeToFile(output, TMP);
  });
}

async function mp3Duration(file) {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(file, (err, metadata) => {
      if (err) return reject(err);
      resolve(metadata.format.duration);
    });
  });
}


// -----------------------------------------------------------------------------
// Workflow

async function generateAudio(id, locale='en') {
  const markdown = fs.readFileSync(`${CONTENT}/${id}/content.md`, 'utf8');
  const data = (await parseFull(id, markdown, `${CONTENT}/${id}`, locale)).data;

  const html = data.sections.map(section => {
    if (section.status === 'dev') return '';
    return section.steps.map(s => data.steps.find(t => t.id === s).html).join('');
  }).join('');
  const doc = (new JSDom(html)).window.document;

  const oldTimings = getAudioTimings(id, locale);
  const newTimings = {};
  const newFiles = [];
  let currentTime = 0;

  for (const sentence of doc.querySelectorAll('.sentence')) {
    const text = extractText(sentence).trim();
    if (!text) continue;

    const hash = textHash(text);
    const file = `${TMP}/${hash}.mp3`;
    newFiles.push(file);

    if (oldTimings[hash]) {
      await mp3Clip(`${output}/narration_en.mp3`, file, oldTimings[hash]);
    } else {
      const response = await CLIENT.synthesizeSpeech({
        input: {ssml: `<text>${text}</text>`},
        voice: {languageCode: 'en-GB', name: 'en-GB-Wavenet-A'},
        audioConfig: {audioEncoding: 'MP3'},
      });
      fs.writeFileSync(file, response[0].audioContent, 'binary');
      // ffmpeg(input).audioFilters('silenceremove=1:0:-50dB:1:0:-50dB')
    }

    const duration = 1000 * (await mp3Duration(file));
    newTimings[hash] = {start: currentTime, end: currentTime + duration};
    currentTime += duration;
  }

  if (newFiles.length) {
    writeAudioTimings(newTimings, `${CONTENT}/${id}`, locale);
    await mp3Merge(`${CONTENT}/${id}/audio/narration_en.mp3`, newFiles);
  }
}

async function run() {
  if (!fs.existsSync(TMP)) fs.mkdirSync(TMP);

  const courses = fs.readdirSync(CONTENT).filter(t => t[0] !== '.' & t !== 'shared');  // ['fractals']
  for (const course of courses) {
    console.log('Generating audio for', course);
    await generateAudio(course);
  }

  fs.rmdirSync(TMP, {recursive: true});
  console.log('DONE!');
}

run();
