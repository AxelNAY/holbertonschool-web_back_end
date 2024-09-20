// Recreate the small HTTP server using Express:
// It should be assigned to the variable app and this one must be exported
// HTTP server should listen on port 1245
// It should return plain text
// When the URL path is /, display Hello Holberton School! in the page body
// When the URL path is /students, display This is the list of our students
// Followed by the same content as the file 3-read_file_async.js
// CSV file can contain empty lines and they are not a valid student!

const express = require('express');
const countStudents = require('./3-read_file_async');
const app = express();
const dbfile = process.argv[2];

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const originalLog = console.log;
    console.log = () => {};
    let logs = '';

    console.log = (msg) => {
      logs += `${msg}\n`;
    };

    await countStudents(dbfile);
    console.log = originalLog;
    res.write(logs);
  } catch (error) {
    res.write(error.message);
  } finally {
    res.end();
  }
});
app.listen(1245, () => {
    console.log('Server listening on port 1245');
});

module.exports = app;
