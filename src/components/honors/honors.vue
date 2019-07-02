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
    <copyright id="copyright"></copyright>
    <software id="software"></software>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import copyright from './copyright/copyright.vue';
import software from './software/software.vue';

@Component({
  components: {
    copyright,
    software
  }
})
export default class Honors extends Vue{
  
}
</script>
