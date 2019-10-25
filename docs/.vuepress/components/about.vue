<template>
  <div class="about">
    <ul class="aboutNav">
      <li
        v-for="item in nav"
        @click="showNav(item.code)"
        :style="cur === item.code ? 'background:#FF66CC;color:#fff;' : ''"
        class="aboutNavItem">
        {{item.title}}
      </li>
    </ul>
    <div class="aboutContent">
      <div v-show="cur === 'me'">
        me
      </div>
      <div v-show="cur === 'tech'">
        tech
      </div>
      <div v-show="cur === 'work'">
        work
      </div>
      <div v-show="cur === 'orange'">
        orange
      </div>
      <div v-show="cur === 'book'">
        我在看的
        <ul>
          <li><img src="../public/star.png"> 我亦飘零久  --- 独木舟</li>
        </ul>
      </div>
      <div v-show="cur === 'tv'">
        tv
      </div>
      <div v-show="cur === 'movie'">
        movie
      </div>
      <div v-show="cur === 'game'">
        game
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nav: [
          { title: '关于我', code: 'me' },
          { title: '技能', code: 'tech' },
          { title: '工作', code: 'work' },
          { title: '橘子', code: 'orange' },
          { title: '书', code: 'book' },
          { title: '剧', code: 'tv' },
          { title: '电影', code: 'movie' },
          { title: '游戏', code: 'game' }
        ],
        cur: 'me'
      }
    },
    methods: {
      showNav(code) {
        this.cur = code
      } 
    }
  }
</script>
