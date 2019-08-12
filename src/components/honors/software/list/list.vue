<style lang="scss" scoped>
%clear-both::after {
  content: "";
  display: block;
  clear: both;
}

.award-list {
  @extend %clear-both;

  position: relative;
  width: 95%;
  margin: 0 auto;
  text-align: start;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 2px 1px rgba($color: #000000, $alpha: .3);
  min-height: 1rem;
  align-items: center;
  text-align: center;

  span {
    // display: flex;
    align-items: center;
    padding: .2rem;
    padding-left: 0;
    text-align: start;
    word-wrap:break-word;
  }
}
.isDouble {
  background-color: #e8d6ff;
}
</style>

<template>
  <div class="award-list" :class="index % 2 == 0 ? 'isDouble' : ''">
    <span style="width: 1.8rem">{{ index }}</span>
    <span style="width: 4.3rem">{{ item.name }}</span>
    <span style="width: 4.3rem">{{ item.id }}</span>
    <span style="width: 4.3rem">{{ item.name }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({
  props: {
    item: Object,
    index: Number
  }
})
export default class List extends Vue {

}
</script>
