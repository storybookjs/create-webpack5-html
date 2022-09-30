const { sep } = require('path');

module.exports = {
  getName: (outputDir) => {
    return outputDir.split(sep).slice(-1)[0];
  }
}