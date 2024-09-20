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
