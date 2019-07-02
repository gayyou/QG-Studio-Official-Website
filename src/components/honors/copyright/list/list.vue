<style lang="scss" scoped>
.copyright-list {
  cursor: pointer;
  position: relative;
  display: block;
  width: 3.6rem;
  height: 5rem;
  overflow: hidden;
  margin-left: 0.36rem;
  box-shadow: 0 0px 4px rgba($color: #000000, $alpha: 0.16);
  margin-top: 0.36rem;

  .copyright-image {
    width: 80%;
    height: 4rem;
    margin: 0.3rem auto;

    img {
      width: 100%;
    }
  }

  .copyright-name {
    font-size: 0.20rem;
    color: #2a2a2a;
    display: block;
  }
}
</style>

<template>
  <div class="copyright-list">
    <div class="copyright-image">
      <img :src="url" alt="">
    </div>
    <span class="copyright-name">{{ name }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({
  props: {
    url: String,
    name: String
  }
})
export default class List extends Vue {
  
}
</script>
