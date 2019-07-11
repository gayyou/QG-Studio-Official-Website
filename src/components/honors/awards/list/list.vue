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
    text-align: center;
    word-wrap:break-word;
  }
}
.isDouble {
  background-color: #e8d6ff;
}
</style>

<template>
  <div class="award-list" :class="index % 2 == 0 ? 'isDouble' : ''">
    <span style="width: 0.6rem">{{ index }}</span>
    <span style="width: 1.6rem">{{ item.project }}</span>
    <span style="width: 2.1rem">{{ item.competition }}</span>
    <span style="width: 1.1rem">{{ item.time }}</span>
    <span style="width: 1.6rem">{{ item.level }}</span>
    <span style="width: 1.1rem">{{ item.award }}</span>
    <span style="width: 2.1rem">{{ item.department }}</span>
    <span style="width: 2.1rem">{{ item.student }}</span>
    <span style="width: 2.1rem">{{ item.teacher }}</span>
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
