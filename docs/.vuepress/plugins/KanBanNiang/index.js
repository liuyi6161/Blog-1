const { resolve } = require("path");

module.exports = (options, context) => ({
  define () {
    const { message, theme, positionStyle, width, height } = options
    return {
      THEME: theme || 'blackCat',
      MESSAGE: message || '喵呜!',
      POSITION_STYLE: positionStyle || {
        position: 'fixed',
        right: '90px',
        bottom: '-20px'
      },
      WIDTH: width || 150,
      HEIGHT: height || 220
    }
  },
  name: '@vuepress-reco/vuepress-plugin-kan-ban-niang',
  enhanceAppFiles: resolve(__dirname, "enhanceAppFile.js"),
  globalUIComponents: "KanBanNiang"
})
