module.exports = {
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: [
    'vuetify',
  ],
  outputDir: 'docs',
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/DMZ', GIT
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/DMZ',
}
