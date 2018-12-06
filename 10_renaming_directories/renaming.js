const fs = require('fs');

fs.mkdirSync('./10_renaming_directories/newDir1');

fs.renameSync('./10_renaming_directories/newDir1', './10_renaming_directories/newDir2');

fs.writeFileSync('./10_renaming_directories/newFile1.js');

fs.renameSync('./10_renaming_directories/newFile1.js', './10_renaming_directories/newFile2.js');
