module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: [
    'vuetify',
  ],
  outputDir: 'docs',

  publicPath: process.env.NODE_ENV === 'production' ? 'https://andreamazza84.github.io/DMZ/' : '/'
}
