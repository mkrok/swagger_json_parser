module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.30',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
