const poppler = require('pdf-poppler');

async function pdfToJpg(inputPath, outputDir) {
  const opts = {
    format: 'jpeg',
    out_dir: outputDir,
    out_prefix: 'page',
    page: null
  };
  await poppler.convert(inputPath, opts);
  console.log('PDF to JPG conversion successful!');
}

pdfToJpg('./samples/sample.pdf', './output/');

