import fs from 'fs';
import { PDFParse } from 'pdf-parse';

const path = process.argv[2];
const buffer = fs.readFileSync(path);
const parser = new PDFParse({ data: buffer });
const result = await parser.getText();
console.log(result.text);
await parser.destroy();