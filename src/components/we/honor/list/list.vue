<style lang="scss" scoped>
.list-container {
  position: relative;
  width: 4.4rem;
  height: 6.6rem;
  overflow: hidden;
  margin-top: .6rem;
  border: 0.5px solid rgba($color: #000000, $alpha: .3);
  box-shadow: 0 0 2px 1px rgba($color: #000000, $alpha: .3);
  margin-left: .3rem;
  margin-right: .3rem;

  .image-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 4.4rem;

    img {
      height: 4.4rem;
    }
  }

  .intro-container {
    position: relative;
    width: 90%;
    height: 2.6rem;
    margin: .3rem auto;
    text-align: start;

    .intro-title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 1.3rem;
    }

    span {
      font-size: .24rem;
      color: #2a2a2a;
    }
  }
  .intro-time {
    font-size: .24rem;
    color: #707070;
  }
}
</style>

<template>
  <div class="list-container">
    <div class="image-container">
      <img :src="url" alt="">
    </div>
    <div class="intro-container">
      <div class="intro-title">
        <span>{{ title }}</span>
      </div>
      <div class="intro-time">
        <span>{{ time }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class List extends Vue {
  @Prop(String)
  url!: string

  @Prop(String)
  title: string

  @Prop(String)
  time: string
}
</script>
