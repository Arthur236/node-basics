const fs = require('fs');

fs.mkdirSync('./9_removing_files_and_directories/newDir', 777);

fs.rmdirSync('./9_removing_files_and_directories/newDir');

fs.writeFileSync('./9_removing_files_and_directories/newFile.js');

fs.unlinkSync('./9_removing_files_and_directories/newFile.js');
