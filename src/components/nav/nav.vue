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
  border-bottom: #ccc solid 1px;

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
      color: #b0b0b0;
    }
    li:nth-child(1) {
      margin-left: 3.7rem;
    }
  }
}
.nav-second-container {
  @extend %clear-both;
  position: relative;
  width: 100%;
  display: flex;
  border-bottom: #ccc solid 1px;

  .nav-list-container {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    li {
      display: block;
      cursor: pointer;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.24rem;
      margin-left: 0.32rem;
      margin-right: 0.32rem;
      color: #b0b0b0;
    }
  }
}
.nav-list-active {
  color: #2a2a2a!important;
}
</style>

<template>
  <div class="nav-container">
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
    <div class="nav-second-container" @click="switchSecNav" 
      v-if="secondNavList.length"
    >
      <nav class="nav-list-container">
        <li
          v-if="secondNavList.length"
          v-for="(item, index) in secondNavList"
          :key="item.value"
          :data-index="index"
          :class="item.isActive ? 'nav-list-active' : ''"
        >{{ item.value }}</li>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Provide } from 'vue-property-decorator'
import { NavList } from '../../utils/models/interface'
// import {} from 'element-ui'

@Component({
  
})
export default class Nav extends Vue {
  index: Number = 0;
  firstNavList: Array<NavList> = [
    {
      value: '关于QG',
      label: 'about',
      children: [],
      isActive: true
    },
    {
      value: '我们',
      label: 'we',
      children: [
        {
          value: '指导老师',
          label: 'advisor',
          children: [],
          isActive: false
        },
        {
          value: '研究方向',
          label: 'direction',
          children: [],
          isActive: false
        },
        {
          value: '最近的荣誉',
          label: 'honors',
          children: [],
          isActive: false
        }
      ],
      isActive: false
    },
    {
      value: '成员',
      label: 'members',
      children: [],
      isActive: false
    },
    {
      value: '项目',
      label: 'projects',
      children: [],
      isActive: false
    },
    {
      value: '荣誉',
      label: 'honors',
      children: [
        {
          value: '专利',
          label: 'copyright',
          children: [],
          isActive: false
        },
        {
          value: '软件著作权',
          label: 'software',
          children: [],
          isActive: false
        }
      ],
      isActive: false
    },
    {
      value: '专栏',
      label: 'column',
      children: [
        {
          value: 'QG特色',
          label: 'characteristic',
          children: [],
          isActive: false
        },
        {
          value: 'QG大事记',
          label: 'importantEvent',
          children: [],
          isActive: false
        }
      ],
      isActive: false
    },
  ];
  secondNavList: Array<NavList> = [];

  firstIndex = 0;

  secondIndex = 0;

  mounted() {
    let path = window.location.pathname.slice(1);
    for (let i = 0; i < this.$data.firstNavList.length; i++) {
      if (this.$data.firstNavList[i].label == path) {
        let childList = this.$data.firstNavList[i].children;

        for(let j = 0; j < childList.length; j++) {
          this.$data.secondNavList.push(childList[j]);
        }
      }
    }
  }

  switchFirstNav(event: any) {
    let target: any = event.target,
        index = target.getAttribute('data-index');
    if (!index) {
      // 点击到父容器
      return ;
    }
    for (let i = 0; i < this.$data.firstNavList.length; i++) {
      this.$data.firstNavList[i].isActive = false;
    }
    
    this.$data.firstNavList[index].isActive = true;
    this.$data.secondNavList = [];

    let childList = this.$data.firstNavList[index].children;

    for(let i = 0; i < childList.length; i++) {
      this.$data.secondNavList.push(childList[i]);
    }

    if (childList.length) {
      for (let i = 0; i< this.$data.secondNavList; i++) {
        this.$data.secondNavList[i].isActive = false;
      }
      this.$data.secondNavList[0].isActive = true;

      // 进行页面跳转
      this.$router.replace({
        path: this.$data.firstNavList[index].label + '?' + this.$data.secondNavList[0].label,
        // name: this.$data.firstNavList[index].label
      });
    } else {
      this.$router.replace({
        path: this.$data.firstNavList[index].label
        // name: this.$data.firstNavList[index].label
      });
    }
  }

  switchSecNav(event: any) {
    let index = event.target.getAttribute('data-index');
    
    if (!index) {
      return ;
    }

    for (let i = 0; i < this.$data.secondNavList.length; i++) {
      this.$data.secondNavList[i].isActive = false;
    }

    this.$data.secondNavList[index].isActive = true;
    let t = $('#' + this.$data.secondNavList[index].label).offset() || { top: 0 };
    const ref = <any>this.$root.$children[0].$refs['scrollbar']  // 强制类型转换
    ref.wrap.scrollTop = t.top;
    // console.log(this.$root.$children[0].$refs['scrollbar'])
  }
}
</script>
