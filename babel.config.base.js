// A base Babel configs are shared between
// - Babel configs for standalone apps, Jest testing, bin scripts,
// - Babel configs for building NPM packages.
module.exports = {
  plugins: [
    // A plugin that enables the re-use of Babel's injected helper code to save on codesize.
    '@babel/transform-runtime',
    //  Make Babel to understand `import()` with Webpack relies on Promise internally
    '@babel/syntax-dynamic-import',
  ],

  // a common presets and it is used by all values of "env"
  presets: [
    '@babel/react',
    '@babel/preset-typescript',
  ],
};
