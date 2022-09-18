const fs = require('file-system');

fs.writeFile('сurrentDate/date.txt', new Date().toDateString());
