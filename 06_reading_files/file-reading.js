const fs = require('fs');

fs.readdir('.', (err, content) => {
  if (err) {
    return err;
  }

  console.log(content);
  return content;
});

fs.readFile('example.html', 'UTF-8', (err, content) => {
  if (err) {
    return err;
  }

  console.log(content);
  return content;
});
