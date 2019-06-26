<style lang="scss" scoped>
.about-list-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  overflow: hidden;

  .image-layer {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: .3);
  }

  .about-list-text {
    position: relative;
    width: 100%;
    margin: 3rem auto;
    color: #fff;

    .about-list-title {
      display: block;
      font-size: 0.96rem;
    }

    .about-list-message {
      display: block;
      font-size: 0.36rem;
      line-height: 0.72rem;
    }
  }
  .about-list-text::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>

<template>
  <div class="about-list-container" :style="'background-image: url(' + url + ')' ">
    <div class="image-layer">
      <div class="about-list-text">
        <span class="about-list-title">{{ title }}</span>
        <span class="about-list-message"
          v-for="item in message"
          :key="item"
        >{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Provide } from 'vue-property-decorator'

@Component({
  props: {
    title: String,
    message: Array,
    url: String
  }
})
export default class List extends Vue {

}
</script>
