// =============================================================================
// Mathigon Textbook Server Configuration
// (c) Mathigon
// =============================================================================


const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const express = require('express');


// -----------------------------------------------------------------------------
// Course Class

const COURSE_PATH = path.join(__dirname, 'assets/resources/');
const CURRICULUM = yaml.load(fs.readFileSync(path.join(__dirname, `../curriculum.yaml`), 'utf8'));

class Course {

  constructor(id, data, locale) {
    this.id = id;
    this.sections = data.sections;
    this.steps = data.steps;
    this.title = data.title;
    this.locale = locale;
    this.color = '#' + (CURRICULUM[id] || {}).color;
  }

  readFile(name) {
    try {
      return fs.readFileSync(path.join(COURSE_PATH, this.id, name));
    } catch (e) {
      return undefined;
    }
  }

  getNextLink(sectionId) {
    const sectionIndex = this.sections.findIndex(s => s.id === sectionId);
    return this.sections[sectionIndex + 1];
  }

  getJSON(type) { return this.readFile(type + `_${this.locale}.json`); }
  getSection(section) { return this.sections.find(s => s.id === section); }
  getStep(step) { return this.steps.find(s => s.id === step); }

  getSectionHTML(sectionId) {
    const steps = this.getSection(sectionId).steps;
    return steps.map(s => this.getStep(s)).map(s => s.html).join('');
  }
}

function getCourse(courseId, locale='en') {
  const file = path.join(COURSE_PATH, courseId, `data_${locale}.json`);
  if (!fs.existsSync(file)) return;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  return new Course(courseId, data, locale);
}


// -----------------------------------------------------------------------------
// Web Server

const port = process.env.PORT || 5000
const app = express();
app.set('port', port);
app.set('env', 'development');
app.set('views', path.join(__dirname, 'assets'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'assets')));
app.use('/resources', express.static(path.join(__dirname, '../content')));
app.use('/images/emoji', express.static(path.join(
    __dirname, '../node_modules/emojione-assets/png/64')));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/course/:course', function(req, res, next) {
  const course = getCourse(req.params.course);
  if (!course) return next();
  res.redirect(`/course/${course.id}/${course.sections[0].id}`);
});

app.get('/course/:course/:section', function(req, res, next) {
  const lang = req.query.hl || 'en';
  const dir = ['ar', 'fa', 'iw'].includes(lang) ? 'rtl' : 'ltr';

  const course = getCourse(req.params.course, lang);
  if (!course) return next();

  const section = course.getSection(req.params.section);
  if (!section) return next();

  res.render('course', {course, section, lang, dir});
});

app.post('/course/:course/ask', function(req, res) {
  res.type('txt').send(JSON.stringify([{content: '[NOT IMPLEMENTED]'}]));
});

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
