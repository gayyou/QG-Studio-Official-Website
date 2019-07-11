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
    <awards id="awards"></awards>
    <news id="news"></news>
    <copyright id="copyright"></copyright>
    <software id="software"></software>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import copyright from './copyright/copyright.vue';
import software from './software/software.vue';
import awards from './awards/awards.vue';
import news from './news/news.vue'

@Component({
  components: {
    copyright,
    software,
    awards,
    news
  }
})
export default class Honors extends Vue{
  
}
</script>
