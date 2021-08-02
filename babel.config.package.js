const { es5Browsers, es2019Browsers, ignoreCommonGlobs } = require('./babel.utils');

/** IMPORTANT
 *  The typescript preset must be executed _before_ babel/env so that TS Class parameter property assignments are compiled correctly.
 *  We do this by placing the typescript preset after babel/env for each environment (presets are executed in reverse order). We cannot use the top-level presets field as they are executed _after_
 *  each env.
 *  https://github.com/babel/babel/issues/9105
 */
const classPropertiesPreset = {
  plugins: ['@babel/plugin-proposal-class-properties'],
};

module.exports = {
  extends: './babel.config.base',

  ignore: ignoreCommonGlobs,

  env: {
    'production:es2019': {
      plugins: [
        /* Transpile away these features that wouldn't otherwise with the specified browser targets below.
         * These features break webpack 4 and the workaround of resolving its transitive acorn dep causes issues
         * with async imports not being transpiled
         */
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
      ],
      presets: [
        [
          '@babel/preset-env',
          {
            bugfixes: true,
            modules: false,
            targets: es2019Browsers,
          },
        ],
        classPropertiesPreset,
        '@babel/preset-typescript',
      ],
    },
  },
};
