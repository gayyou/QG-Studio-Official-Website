<style lang="scss" scoped>
.honors-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.honors-container::after {
  content: "";
  display: block;
  clear: both;
}
</style>

<template>
  <div class="honors-container">
    <awards id="awards" v-if="$store.state.mode == 1"></awards>
    <news id="news" v-if="$store.state.mode == 2"></news>
    <copyright id="copyright" v-if="$store.state.mode == 3"></copyright>
    <software id="software" v-if="$store.state.mode == 4"></software>
    <toTop></toTop>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import copyright from './copyright/copyright.vue';
import software from './software/software.vue';
import awards from './awards/awards.vue';
import news from './news/news.vue'
import toTop from '../nav/backToTopButton.vue'

@Component({
  components: {
    copyright,
    software,
    awards,
    news,
    toTop
  }
})
export default class Honors extends Vue{
  
}
</script>
