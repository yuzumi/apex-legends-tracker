module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Apex Legends Tracker';
        return args;
      });
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000'
      }
    }
  }
};
