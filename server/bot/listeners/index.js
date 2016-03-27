// This file pulls each .js file from this directory (`listeners/`), then creates
// and exports a single object containing the modules that the files exported

import glob from 'glob';

export default glob.sync('*.js', { ignore: 'index.js', cwd: __dirname })
  .reduce((obj, file) => {
    file = file.replace('.js', '');
    obj[file] = require(`./${file}`).default;
    return obj;
  }, {});
