const { randomTeaCup } = require('@hot-tea-labs/cup-of-tea');
const fs = require('fs');

/**
 * Generates a SVG image of a tea cup and save to file.
 * @param {string} outputFileName - Name of the output PNG file.
 */
function saveRandomTeaCupSVG(outputFileName) {
   const svgCode = randomTeaCup();
   fs.writeFile(outputFileName, svgCode, (err) => {
    if (err) {
      console.error('Error writing SVG to file:', err);
    } else {
      console.log('SVG content has been written to', filePath);
    }
  });
}

// Export the function for use as an npm package
module.exports = { saveRandomTeaCupSVG };