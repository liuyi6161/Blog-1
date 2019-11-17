const { resolve } = require('path')

module.exports = (options, context) => ({
  define () {
    const { position, audios, autoplay, mini } = options
    return {
      POSITION: position || {
        left: '10px',
        bottom: '10px'
      },
      MINI: mini || false,
      AUDIOS: audios || [
        {
          name: '장가갈 수 있을까',
          artist: '咖啡少年',
          url: 'https://assets.smallsunnyfox.com/music/1.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/1.jpg'
        },
        {
          name: '강남역 4번 출구',
          artist: 'Plastic / Fallin` Dild',
          url: 'https://assets.smallsunnyfox.com/music/2.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
        },
        {
          name: '用胳膊当枕头',
          artist: '최낙타',
          url: 'https://assets.smallsunnyfox.com/music/3.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        }
      ],
      AUTOPLAY: autoplay || true // 是否开启自动播放
    }
  },
  name: '@vuepress-reco/vuepress-plugin-bgm',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'BgMusic'
})