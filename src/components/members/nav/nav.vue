<style lang="scss" scoped>
.members-nav-container {
  width: 100%;
  height: 1.2rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    cursor: pointer;
    font-size: 0.24rem;
    color: #707070;
    margin-left: 0.36rem;
  }
}

.active {
  color: #1a1a1a!important;
}
</style>

<template>
  <div class="members-nav-container">
    <li
      @click="choiceYear"
      v-for="(item, index) in years"
      :key="index + 1"
      :data-index="index"
      :class="currentIndex == index ? 'active' : ''"
    >{{ item }}</li>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({
  props: {
    year: String
  }
})
export default class Nav extends Vue{
  years: Array<any> = [
    '全部',
    // '2004',
    // '2005',
    // '2006',
    // '2007',
    // '2008',
    // '2009',
    // '2010',
    // '2011',
    // '2012',
    // '2013',
    // '2014',
    // '2015',
    '2016',
    '2017',
    '2018',
  ];

  currentIndex: Number = 0;

  choiceYear(event: any) {
    
    let index = event.target.getAttribute('data-index');
    if (!index) {
      return ;
    }
    this.$data.currentIndex = index;
    this.$emit('year', this.$data.years[index]);
  }
}
</script>
