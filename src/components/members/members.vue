<style lang="scss" scoped>
.members-container {
  position: relative;
  width: 100%;
}
</style>

<template>
  <div class="members-container">
    <navs></navs>
    <mains></mains>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import navs from './nav/nav.vue'
import mains from './main/main.vue'

@Component({
  components: {
    navs,
    mains
  }
})
export default class Members extends Vue {
  
}
</script>
