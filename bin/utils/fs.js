const fs = require('fs');
const { dirname } = require('path');
const { promisify } = require('util')

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);

module.exports = {
  create: async (location, contents) => {
    const dir = dirname(location);
    const exists = fs.existsSync(dir);

    if (!exists) {
      await mkdir(dir, { recursive: true });
    }

    await writeFile(location, contents, { encoding: 'utf8' });
  },
  createDir: mkdir,
  read: readFile,
}