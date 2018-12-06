const fs = require('fs');

fs.writeFile('./7_writing_files/data.html', 'Hey. Good job.\n', 'utf8', (err) => {
  if (err) {
    return err;
  }

  console.log('File created successfully');
});

fs.appendFile('./7_writing_files/data.html', 'Just added some data.', 'utf8', (err) => {
  if (err) {
    return err;
  }

  console.log('File edited successfully');
});
