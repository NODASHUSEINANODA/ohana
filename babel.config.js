module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        'development': process.env.BABEL_ENV === 'development',
        'runtime': 'automatic'
      },
    ],
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
      },
    ],
  ],
  ignore: [
    'node_modules',
  ],
};
