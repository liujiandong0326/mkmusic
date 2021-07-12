module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin，需要把 sass-loader@10.1.0 node-sass@5.0.0 的版本
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },
}
