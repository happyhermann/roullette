const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/_variabled.scss";
        @import "@/scss/_reset.scss";`,
      },
    },
  },
});
