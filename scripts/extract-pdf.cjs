const fs = require('fs');
const pdf = require('pdf-parse');

const path = process.argv[2];
const buffer = fs.readFileSync(path);

pdf(buffer).then((data) => {
  console.log(data.text);
});