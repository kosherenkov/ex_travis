module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/style.scss";'
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/ex_travis/" : "/"
};
