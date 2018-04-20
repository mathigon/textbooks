// =============================================================================
// Mathigon Textbook Server Configuration
// (c) Mathigon
// =============================================================================


const fs = require('fs');
const path = require('path');
const express = require('express');

function loadJSON(path) {
  try {
    return fs.readFileSync(path);
  } catch(e) {
    return '{}';
  }
}

const coursePath = path.join(__dirname, 'assets/resources/');
const courseNames = fs.readdirSync(coursePath)
  .filter(f => fs.statSync(coursePath + '/' + f).isDirectory())
  .filter(f => f !== 'shared');

const app = express();
app.set('port', 5000);
app.set('env', 'development');
app.set('views', path.join(__dirname, 'assets'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'assets')));
app.use('/resources', express.static(path.join(__dirname, '../content')));
app.use('/images/emoji', express.static(path.join(__dirname, '../node_modules/emojione-assets/png/64')));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/course/:id', function(req, res, next) {
  let id = req.params.id;
  if (!courseNames.includes(id)) return next();
  let data = require(path.join(coursePath, id, 'data.json'));

  res.render('course', {
    id,
    title: data.title,
    description: data.description,
    glossary: loadJSON(path.join(coursePath, id, 'glossary.json')),
    hints: loadJSON(path.join(coursePath, id, 'hints.json')),
    bios: loadJSON(path.join(coursePath, id, 'bios.json')),
    html: fs.readFileSync(path.join(coursePath, id, 'content.html'))
  });
});

app.listen(5000, function() {
  console.log('Server listening on port 5000');
});
