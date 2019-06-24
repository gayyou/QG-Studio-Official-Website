<style lang="scss" scoped>
%clear-both::after {
  content: "";
  display: block;
  clear: both;
}
%flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-first-header {
  @extend %clear-both;
  position: relative;
  width: 100%;
  display: flex;

  .nav-logo-container {
    width: 2rem;
    height: 0.96rem;
    padding: 0 0.32rem;

    img {

    }
  }

  .nav-list-container {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;

    li {
      display: block;
      cursor: pointer;
      font-size: 0.24rem;
      margin-left: 0.32rem;
      margin-right: 0.32rem;
      color: #707070;
    }
    li:nth-child(1) {
      margin-left: 3.1rem;
    }
  }
}
.nav-list-active {
  color: #1f1f1f;
}
</style>

<template>
  <div class="nav-first-header">
    <div class="nav-logo-container">
      <img src=""/>
    </div>
    <nav class="nav-list-container" @click="switchFirstNav">
      <li
        v-for="(item, index) in firstNavList"
        :key="item.value"
        :data-index="index"
        :class="item.isActive ? 'nav-list-active' : ''"
      >{{ item.value }}</li>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Provide } from 'vue-property-decorator'
import { NavList } from '../../utils/models/interface'

@Component({
  
})
export default class Nav extends Vue {
  index: Number = 0;
  firstNavList: Array<NavList> = [
    {
      value: '关于QG',
      label: '',
      children: [],
      isAcitve: true
    },
    {
      value: '我们',
      label: '',
      children: [],
      isAcitve: false
    },
    {
      value: '成员',
      label: '',
      children: [],
      isAcitve: false
    },
    {
      value: '项目',
      label: '',
      children: [],
      isAcitve: false
    },
    {
      value: '荣誉',
      label: '',
      children: [],
      isAcitve: false
    },
    {
      value: '专栏',
      label: '',
      children: [],
      isAcitve: false
    },
  ];

  switchFirstNav(event: any) {
    let target: any = event.target,
        index = target.getAttribute('data-index');
    if (!index) {
      // 点击到父容器
      return ;
    }
    for (let i = 0; i < this.$data.firstNavList.length; i++) {
      this.$data.firstNavList[i].isAcitve = false;
    }
    this.$data.firstNavList[index].isAcitve = true;

    this.$data.firstNavList.push(this.$data.firstNavList.pop());
  }
}
</script>
