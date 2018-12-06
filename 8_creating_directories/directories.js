const fs = require('fs');

if (!fs.existsSync('./8_creating_directories/views')) {
  fs.mkdir('./8_creating_directories/views', 777, (err) => {
    if (err) {
      return err;
    }

    fs.writeFile('./8_creating_directories/views/new.html', 'This was created in the new directory', (err) => {
      if (err) {
        return err;
      }

      console.log('New directory and file created.');
    });
  });
}
