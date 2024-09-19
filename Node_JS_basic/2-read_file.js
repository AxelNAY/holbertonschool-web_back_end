// Using the database database.csv (provided in project description),
// Create a function countStudents in the file 2-read_file.js
// Create a function named countStudents. It should accept a path in argument
// The script should attempt to read the database file synchronously
// If the database is not available,
// It should throw an error with the text Cannot load the database
// If the database is available, it should log the following message to
// The console Number of students: NUMBER_OF_STUDENTS
// It should log the number of students in each field, and the list with the
// Following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
// CSV file can contain empty lines and they are not a valid student!

const fs = require('fs');

function countStudents (path) {
    try {
        const datas = fs
          .readFileSync(path, { encoding: 'utf8' })
          .trim()
          .split('\n')
          .filter((line) => line.length > 0);
        datas.shift();
        if (datas.length === 0) {
          console.log('Number of students: 0');
          return;
        }
        const studentFields = {};
    
        datas.forEach((data) => {
          const [firstname, , , field] = data.split(',');
          if (!studentFields[field]) {
            studentFields[field] = [];
          }
          studentFields[field].push(firstname);
        });
        console.log(`Number of students: ${datas.length}`);
        for (const field in studentFields) {
          if (field) {
            const list = studentFields[field].join(', ');
            console.log(
                `Number of students in ${field}: ${studentFields[field].length}. List: ${list}`
            );
          }
        }
      } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;