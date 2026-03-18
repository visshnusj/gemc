const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const sharp = require('sharp');

async function jpgToPdf(inputPath, outputPath) {
  const pdfDoc = await PDFDocument.create();
  const jpgBuf = await sharp(inputPath).jpeg().toBuffer();
  const jpgImage = await pdfDoc.embedJpg(jpgBuf);
  const page = pdfDoc.addPage([jpgImage.width, jpgImage.height]);
  page.drawImage(jpgImage, { x: 0, y: 0, width: jpgImage.width, height: jpgImage.height });
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('JPG to PDF conversion successful!');
}

jpgToPdf('./samples/sample.jpg', './output/output.pdf');