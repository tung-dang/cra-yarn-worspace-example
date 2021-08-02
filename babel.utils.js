const es5Browsers = [
  'last 1 chrome versions',
  'last 1 firefox versions',
  'last 1 safari versions',
  'last 1 and_chr versions',
  'last 1 ios_saf versions',
];

const es2019Browsers = [
  'last 1 chrome versions',
  'last 1 firefox versions',
  'last 1 safari versions',
  'last 1 and_chr versions',
  'last 1 ios_saf versions',
];

const ignoreCommonGlobs = [
  'node_modules',
  'dist',
  '**/__mocks__',
  '**/__tests__',
  '**/__fixtures__',
  '**/__stories__',
  '**/stories',
  '**/*.d.ts',
];

module.exports = {
  es5Browsers,
  es2019Browsers,
  ignoreCommonGlobs,
};
