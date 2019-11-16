const { resolve } = require('path')

module.exports = (options, context) => ({
  define () {
    const { audios, autoplay } = options
    return {
      AUDIOS: audios || [
        {
          name: '장가갈 수 있을까',
          artist: '咖啡少年',
          url: 'https://assets.smallsunnyfox.com/music/1.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/1.jpg?param=300y300',
        }
      ],
      AUTOPLAY: autoplay || true // 是否开启自动播放
    }
  },
  name: '@vuepress-reco/vuepress-plugin-bgm',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'BgMusic'
})