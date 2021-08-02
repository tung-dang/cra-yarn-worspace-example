const { ignoreCommonGlobs, es5Browsers } = require('./babel.utils');

const ignoreGlobsForTest = [
  'dist',
];

// This config is used by standalone app.
module.exports = api => {
  const isTest = api.env('test');

  return {
    extends: './babel.config.base',
    ignore: isTest ? ignoreGlobsForTest : ignoreCommonGlobs,

    plugins: [
      // This plugin transforms ECMAScript modules to CommonJS
      // some scripts in "./bin" folder need this.
      '@babel/plugin-transform-modules-commonjs',
      ['react-intl', { messagesDir: './build-output/messages' }],
      '@babel/plugin-proposal-class-properties'
    ],

    presets: [
      [
        '@babel/preset-env',
         isTest
           ? undefined
           : { bugfixes: true, modules: false, targets: es5Browsers },
      ],
      '@babel/react',
      '@babel/preset-typescript',
    ]
  };
};
