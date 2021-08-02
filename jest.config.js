const path = require('path');
const { lstatSync, readdirSync } = require('fs');

const PACKAGE_NAME_SPACE = '@namespace';
const ROOT_REPO = path.resolve(__dirname);
const ROOT_JEST_CONFIG_FOLDER = `${ROOT_REPO}/config/jest`;

// get listing of packages in the mono repo
const PACKAGE_FOLDER = `${ROOT_REPO}/packages`;
const packages = readdirSync(PACKAGE_FOLDER).filter((name) => {
  const packageFolders = path.join(PACKAGE_FOLDER, name);

  return lstatSync(packageFolders).isDirectory();
});

const moduleNameMapper = {
  ...packages.reduce(
    (acc, name) => ({
      ...acc,
      [`${PACKAGE_NAME_SPACE}/${name}(.*)$`]: `${PACKAGE_FOLDER}/./${name}/src/$1`,
    }),
    {},
  ),
};

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': `${ROOT_JEST_CONFIG_FOLDER}/fileTransform.js`,
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': `${ROOT_JEST_CONFIG_FOLDER}/babelTransform.js`,
    '^.+\\.css$': `${ROOT_JEST_CONFIG_FOLDER}/cssTransform.js`,
  },
  // testRegex: '(/test/.*.(test|spec)).(jsx?|tsx?)$',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['(test/.*.mock).(jsx?|tsx?)$'],
  verbose: true,
  projects: ['<rootDir>'],
  coverageDirectory: '<rootDir>/coverage/',

  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  moduleFileExtensions: ['web.js', 'js', 'web.ts', 'ts', 'web.tsx', 'tsx', 'json', 'web.jsx', 'jsx', 'node'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    ...moduleNameMapper,
  },
  modulePaths: [],
  resetMocks: true,
  roots: ['<rootDir>/src'],
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: [`${ROOT_JEST_CONFIG_FOLDER}/setupTests.ts`],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testRunner: `${ROOT_REPO}/node_modules/jest-circus/runner.js`,
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
