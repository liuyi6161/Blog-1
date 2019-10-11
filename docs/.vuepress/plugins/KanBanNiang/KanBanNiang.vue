
<template>
  <div>
    <div class="banniang-container" v-show="isLoaded">
      <transition name="fade">
        <div class="messageBox" v-show="isShowMessageBox" @click="isShowMessageBox=false">
          {{ message }}
        </div>
      </transition>
      <div class="operation">
        <img class="message" src="./images/message.png" @mouseover="isShowMessageBox=true" @mouseleave="isShowMessageBox=false">
        <img class="skin" src="./images/theme.png" @click="changeTheme" @mouseover="hoverChangeTheme" @mouseleave="leaveChangeTheme">
        <img class="close" src="./images/close.png" @click="closeBanNiang" @mouseover="hoverCloseBanNiang" @mouseleave="leaveCloseBanNiang">
      </div>
      <canvas
        id="banniang"
        :style="position"
        :width="style.width"
        :height="style.height"
        class="live2d"
      ></canvas>
    </div>
    <div class="showBanNiang" v-show="displayBanNiang" @click="showBanNiang">
      看板娘
    </div>
  </div>
</template>

<script>
  import live2dJSString from "./live2d";

  export default {
    name: "cat",
    data() {
      return {
        isLoaded: true,
        displayBanNiang: false,
        isShowMessageBox: false,
        message: MESSAGE,
        defaultMessage: MESSAGE,
        currentTheme: THEME,
        themeName: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko'],
        model: {
          blackCat:
            "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-hijiki/assets/hijiki.model.json",
          whiteCat:
            "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/tororo.model.json",
          haru1:
            "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-haru/01/assets/haru01.model.json",
          haru2:
            "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-haru/02/assets/haru02.model.json",
          haruto:
            "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-haruto/assets/haruto.model.json",
          koharu:
            "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-koharu/assets/koharu.model.json",
          izumi:
            "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-izumi/assets/izumi.model.json",
          shizuku:
            "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-shizuku/assets/shizuku.model.json",
          wanko:
            "https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-wanko/assets/wanko.model.json"
        },
        style: {
          width: WIDTH,
          height: HEIGHT
        },
        position: POSITION_STYLE
      };
    },
    mounted() {
      this.initBanNiang();
      this.$router.afterEach((to, from) => {
        if (to.path !== from.path) {
          this.initBanNiang()
        }
      })
    },
    methods: {
      changeTheme () {
        let themes = []
        for (var i = 0; i < this.themeName.length; i++) {
          if (this.themeName[i] != this.currentTheme) {
            themes.push(this.themeName[i])
          }
        }
        const randomNum = Math.floor(Math.random()*8)
        this.currentTheme = themes[randomNum]
        this.initBanNiang()
      },
      hoverChangeTheme () {
        this.message = '好吧，希望你能喜欢我的其他伙伴'
        this.isShowMessageBox = true
      },
      leaveChangeTheme () {
        this.message = this.defaultMessage
        this.isShowMessageBox = false
      },
      closeBanNiang () {
        this.isLoaded = false
        this.displayBanNiang = true
      },
      hoverCloseBanNiang () {
        this.message = '你知道我喜欢吃什么吗？痴痴地望着你'
        this.isShowMessageBox = true
      },
      leaveCloseBanNiang () {
        this.message = this.defaultMessage
        this.isShowMessageBox = false
      },
      showBanNiang () {
        this.isLoaded = true
        this.displayBanNiang = false
      },
      initBanNiang() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
          ? true
          : false
        if (isMobile) {
          this.isLoaded = false
          return console.log("mobile do not load model")
        }

        if (!window.loadlive2d) {
          const script = document.createElement("script")
          script.innerHTML = live2dJSString
          document.body.appendChild(script)
        }

        // this.style = {
          // width: (150 / 1424) * document.body.clientWidth,
          // height: ((150 / 1424) * document.body.clientWidth) / 0.8
        // };
        setTimeout(() => {
          window.loadlive2d(
            "banniang",
            this.model[this.currentTheme]
          )
        })
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .showBanNiang
    position fixed
    right 60px
    bottom 6.4rem
    background-color lighten($accentColor, 50%)
    color $textColor
    width 48px
    padding 10px
    opacity 0.5
    cursor pointer
  .banniang-container
    position fixed
    right 50px
    bottom 100px
    color #00adb5
    .messageBox
      right 80px
      bottom 195px
      position fixed
      padding 10px
      height 60px
      width 160px
      border-radius 8px
      background-color lighten($accentColor, 50%)
      color $textColor
      opacity 0.7
      transition display .5s
    .operation
      img 
        cursor pointer
        width 20px
        height 20px
      .message
        position fixed
        right 80px
        bottom 140px
      .skin
        position fixed
        right 80px
        bottom 115px
      .close
        position fixed
        right 80px
        bottom 90px

    #banniang
      opacity 0.9
      z-index 99999
      pointer-events none
  .fade-enter,.fade-leave-to
    opacity: 0;
  .fade-enter-to,.fade-leave
    opacity: 0.7;
  .fade-enter-active,.fade-leave-active
    transition: all .5s linear;
</style>
