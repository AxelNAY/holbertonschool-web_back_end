// Using the database database.csv (provided in project description),
// Create a function countStudents in the file 3-read_file_async.js
// Create a function named countStudents.
// It should accept a path in argument (same as in 2-read_file.js)
// The script should attempt to read the database file asynchronously
// The function should return a Promise
// If the database is not available,
// It should throw an error with the text Cannot load the database
// If the database is available, it should log the following message
// To the console Number of students: NUMBER_OF_STUDENTS
// It should log the number of students in each field,
// And the list with the following format:
// Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
// CSV file can contain empty lines and they are not a valid student!

const fs = require('fs').promises;

async function countStudents (path) {
    try {
        const data = await fs.readFile(path, { encoding: 'utf8' });
        const lines = data.trim().split('\n').filter((line) => line.length > 0);
        lines.shift();
        if (lines.lenght === 0) {
          console.log('Number of students: 0');
          return;
        }
        const studentFields = {};
        lines.forEach((line) => {
          const [firstname, , , field] = line.split(',');
          if (!studentFields[field]) {
            studentFields[field] = [];
          }
          studentFields[field].push(firstname);
        });
        console.log(`Number of students: ${lines.length}`);
        for (const field in studentFields) {
          if (field) {
            const list = studentFields[field].join(', ');
            console.log(`Number of students in ${field}: ${studentFields[field].length}. List: ${list}`);
          }
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
