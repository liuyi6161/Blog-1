<template>
  <div class="reco-bgm-box">
    <audio :src="curBgm.url" ref="bgm" @canplay="playReady" muted></audio>
    <div class="reco-bgm-cover" @click="handleCoverClick" :style="`background-image:url(${curBgm.cover})`">
      <!-- <div v-if="isMini" class="mini-operation">
        <i v-if="this.curPlayStatus === 'playing' && isMini" class="reco-bgm reco-bgm-pause"></i>
        <i v-if="this.curPlayStatus === 'paused' && isMini" class="reco-bgm reco-bgm-play"></i>  
      </div> -->
    </div>
    <div v-if="!isMini" class="reco-bgm-info">
      <div class="info-box"><i class="reco-bgm reco-bgm-music music"></i>{{ curBgm.name }}</div>
      <div class="info-box"><i class="reco-bgm reco-bgm-artist"></i>{{ curBgm.artist }}</div>
      <div class="reco-bgm-progress">
        <div class="progress-bar">
          <div class="bar"></div>
        </div>
      </div>
      <div class="reco-bgm-operation">
        <i class="reco-bgm reco-bgm-last last"></i>
        <i v-if="this.curPlayStatus === 'playing'" @click="pauseBgm" class="reco-bgm reco-bgm-pause pause"></i>
        <i v-if="this.curPlayStatus === 'paused'" @click="playBgm" class="reco-bgm reco-bgm-play play"></i>
        <i class="reco-bgm reco-bgm-next next"></i>
        <i class="reco-bgm reco-bgm-volume volume"></i>
      </div>
    </div>
    <div v-if="!isMini" class="reco-bgm-left-box">
      <i class="reco-bgm reco-bgm-left" @click="hideBgmInfo"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curBgm: AUDIOS[0],
      curPlayStatus: 'paused',
      audio: AUDIOS,
      autoplay: AUTOPLAY,
      isMini: false 
    }
  },
  methods: {
    hideBgmInfo () {
      this.isMini = true
    },
    handleCoverClick () {
      this.isMini = !this.isMini
    },
    playReady () {
      if (this.autoplay) {
        this.$refs.bgm.play()
        this.curPlayStatus = 'playing'
      }
    },
    pauseBgm () {
      this.$refs.bgm.pause()
      this.curPlayStatus = 'paused'
    },
    playBgm () {
      this.$refs.bgm.play()
      this.curPlayStatus = 'playing'
    }
  }
}
</script>

<style lang="stylus" scoped>
@require './assets/iconfont/iconfont.css'
.reco-bgm-box
  height 80px
  background-color rgba(255, 255, 255, 0.7)
  position fixed
  left 10px
  bottom 10px
  border-radius 50px
  z-index 999999
  padding 10px
  box-shadow 0 1px 6px 0 rgba(0,0,0,0.2)
  .reco-bgm-cover
    background-size cover
    float left
    height 80px
    width 80px
    border-radius 40px
    cursor pointer
    box-shadow 0 0 10px 1px #616161
    // .mini-operation
    //   height 80px
    //   border-radius 40px
    //   width 80px
    //   display flex
    //   background-color rgba(158, 158, 158, 0.7)
    //   justify-content center
    //   align-items center
    //   i
    //     color $accentColor
    //     cursor pointer
    //     font-size 30px
  .reco-bgm-info
    float left
    height 80px
    padding 0 10px
    display flex
    flex-direction column
    justify-content center
    .info-box
      height 21px
      display flex
      align-items center
      i
        color $accentColor
        cursor pointer
        font-size 21px
      .music
        font-size 18px
    .reco-bgm-progress
      height 14px
      width 150px
      display flex
      align-items center
      .progress-bar
        height 4px
        width 150px
        background #757575
        border-radius 5px
        position relative
        .bar
          position absolute
          left 0
          top 0
          height 4px
          width 10px
          background-color $accentColor
          border-radius 5px
    .reco-bgm-operation
      display flex
      justify-content flex-start
      align-items center
      height 24px
      i
        margin-right 5px
        color $accentColor
        cursor pointer
      .last
        font-size 17px
      .next
        font-size 17px
      .pause
        font-size 20px
      .play
        font-size 20px
      .volume
        font-size 24px
  .reco-bgm-left-box
    float left
    height 80px
    font-size 22px
    display flex
    flex-direction column
    justify-content center
    cursor pointer
    i
      color $accentColor
</style>