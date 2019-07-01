<style lang="scss" scoped>
.list-container {
  margin-top: 0.36rem;
  margin-left: 0.64rem;
  position: relative;
  width: 4rem;
  height: 3.6rem;
  box-shadow: 0 2px 2px 2px rgba($color: #000000, $alpha: .1);
  overflow: hidden;

  .head-container {
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    overflow: hidden;
    margin: 0.32rem auto;
    border: 0.5px solid rgba($color: #000000, $alpha: .16);

    img {
      width: 100%;
    }
  }

  .name {
    color: #2a2a2a;
    font-size: 0.4rem;
  }

  .info {
    font-size: 0.24rem;
    color: #707070;
    display: flex;
    justify-content: center;
    margin-top: 0.1rem;

    span {
      display: block;
    }

    .group {
      margin-left: 0.1rem;
    }
  }
}
</style>

<template>
  <div class="list-container">
    <div class="head-container"><img :src="url" alt=""></div>
    <span class="name">{{ name }}</span>
    <div class="info">
      <span class="years">{{ year }}</span>
      <span class="group">{{ group }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({
  props: {
    url: String,
    name: String,
    year: String,
    group: String
  }
})
export default class List extends Vue {
  
}
</script>
