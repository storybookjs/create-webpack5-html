const defaultVersions = {
  'babel-loader': 'latest',
  '@babel/core': 'latest',
  '@babel/preset-env': 'latest',
  'css-loader': 'latest',
  "webpack-cli": 'latest',
  "webpack-dev-server": 'latest',
  webpack: '^5',
};

module.exports = {
  getDependencies: (args) => {
    let missingVersion = false;
    let n;

    const versions = args.reduce((acc, arg) => {
      if (missingVersion && arg.startsWith('--version')) {
        throw new Error('parsing error');
      }

      if (arg.startsWith('--version')) {
        const [k, v] = arg.split('=');
        n = k.replace('--version-', '');
        acc[n] = v || null;

        if (!v) {
          missingVersion = true;
        }
      } else if (missingVersion) {
        acc[n] = arg;
        missingVersion = false;
      }

      return acc;
    }, defaultVersions);
    return versions;
  }
}
