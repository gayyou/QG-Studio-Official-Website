<style lang="scss" scoped>
.layer-container {
  position: fixed;
  top: 0.8rem;
  left: 50%;
  width: 80%;
  height: 80vh;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid rgba($color: #000000, $alpha: 0.3);

  .layer-image {
    position: relative;
    width: 60%;
    margin: 0.5rem auto;

    img {
      display: block;
      width: 100%;
    }
  }
  .layer-image::after {
    content: "";
    display: block;
    clear: both;
  }

  .name {
    font-size: 0.24rem;
    color: #2a2a2a;
  }
};
</style>

<template>
  <div class="layer-container">
    <div class="layer-image">
      <img :src="url" alt="">
    </div>
    <span class="name">{{ name }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({
  props: {
    name: String,
    url: String
  }
})
export default class Layer extends Vue {
  
}
</script>
