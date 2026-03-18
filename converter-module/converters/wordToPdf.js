const libre = require('libreoffice-convert');
const fs = require('fs');

function wordToPdf(inputPath, outputPath) {
  const docxBuf = fs.readFileSync(inputPath);
  libre.convert(docxBuf, '.pdf', undefined, (err, done) => {
    if (err) throw err;
    fs.writeFileSync(outputPath, done);
    console.log('Word to PDF conversion successful!');
  });
}

wordToPdf('./samples/sample.docx', './output/output.pdf');

