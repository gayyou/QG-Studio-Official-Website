<style lang="scss" scoped>
.members-container {
  position: relative;
  width: 100%;
}
</style>

<template>
  <div class="members-container">
    <navs @year="watchYear" :year="year"></navs>
    <mains :year="year"></mains>
    <toTop></toTop>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Component from 'vue-class-component';
import navs from './nav/nav.vue'
import mains from './main/main.vue'
import { Watch } from 'vue-property-decorator';
import toTop from '../nav/backToTopButton.vue'

@Component({
  components: {
    navs,
    mains,
    toTop
  }
})
export default class Members extends Vue {
  year: String = ''

  mounted() {
    this.$data.year = '全部'
  }

  watchYear(newVal: String) {
    this.$data.year = newVal
  }
}
</script>
