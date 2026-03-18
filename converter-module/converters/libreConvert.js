const libre = require('libreoffice-convert');
const fs = require('fs');

function convertFile(inputPath, outputExt, outputPath) {
  const inputBuf = fs.readFileSync(inputPath);
  libre.convert(inputBuf, outputExt, undefined, (err, done) => {
    if (err) throw err;
    fs.writeFileSync(outputPath, done);
    console.log(`Conversion to ${outputExt} successful!`);
  });
}

// PPT to PDF
convertFile('./samples/sample.pptx', '.pdf', './output/ppt_output.pdf');

// Excel to PDF
convertFile('./samples/sample.xlsx', '.pdf', './output/excel_output.pdf');