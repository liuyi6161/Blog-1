const { resolve } = require('path')

module.exports = (options, context) => ({
  define () {
    const { audio, mini, autoplay, volume, listFolded, listMaxHeight, lrcType} = options
    return {
      AUDIO: audio || [
        {
          name: '东西（Cover：林俊呈）',
          artist: '纳豆',
          url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
          cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
          lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc'
        },
        {
          name: '响喜乱舞（Cover：MARiA）',
          artist: '泠鸢yousa',
          url: 'https://cdn.moefe.org/music/mp3/kyoukiranbu.mp3',
          cover: 'https://p1.music.126.net/AUGVPQ_rVrngDH9ocQrn3Q==/109951163613037822.jpg?param=300y300', // prettier-ignore
          lrc: 'https://cdn.moefe.org/music/lrc/kyoukiranbu.lrc'
        },
        {
          name: '啵唧',
          artist: 'Hanser',
          url: 'https://cdn.moefe.org/music/mp3/kiss.mp3',
          cover: 'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300', // prettier-ignore
          lrc: 'https://cdn.moefe.org/music/lrc/kiss.lrc'
        },
      ],
      MINI: mini || true, // 控制播放器展开或收起
      AUTOPLAY: autoplay || true, // 是否开启自动播放
      VOLUME: volume || 0.7, // 设置播放器的音量
      LIST_FOLDED: listFolded || true, // 是否折叠播放列表
      LIST_MAX_HEIGHT: listMaxHeight || 250,
      LRC_TYPE: lrcType || 3
    }
  },
  name: '@vuepress-reco/vuepress-plugin-aplayer',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'APlayer'
})