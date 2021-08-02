const base = require('../../jest.config');
const packageJson = require('./package');

module.exports = {
  ...base,
  name: packageJson.name,
  displayName: packageJson.name,
};
