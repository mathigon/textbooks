// =============================================================================
// Mathigon Textbook Server Configuration
// (c) Mathigon
// =============================================================================


const fs = require('fs');
const path = require('path');
const yaml = require('yamljs');
const express = require('express');


// -----------------------------------------------------------------------------
// Course Class

const COURSE_PATH = path.join(__dirname, 'assets/resources/');
const CURRICULUM = yaml.load(path.join(__dirname, `../curriculum.yaml`));

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
      return fs.readFileSync(path.join(COURSE_PATH, this.id, this.locale, name));
    } catch (e) {
      return null;
    }
  }

  getNextLink(sectionId) {
    const sectionIndex = this.sections.findIndex(s => s.id === sectionId);
    return this.sections[sectionIndex + 1];
  }

  getJSON(type) { return this.readFile(type + '.json'); }
  getSection(section) { return this.sections.find(s => s.id === section); }
  getStep(step) { return this.steps.find(s => s.id === step); }

  getSectionHTML(sectionId) {
    const steps = this.getSection(sectionId).steps;
    return steps.map(s => this.getStep(s)).map(s => s.html).join('');
  }
}

function getCourse(courseId, locale='en') {
  const file = path.join(COURSE_PATH, courseId, locale, 'data.json');
  if (!fs.existsSync(file)) return;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  return new Course(courseId, data, locale);
}


// -----------------------------------------------------------------------------
// Web Server

const app = express();
app.set('port', 5000);
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
  const course = getCourse(req.params.course, req.query.hl || 'en');
  if (!course) return next();

  const section = course.getSection(req.params.section);
  if (!section) return next();

  res.render('course', {course, section});
});

app.post('/course/:course/ask', function(req, res) {
  res.type('txt').send(JSON.stringify([{content: '[NOT IMPLEMENTED]'}]));
});

app.listen(5000, function() {
  console.log('Server listening on port 5000');
});
