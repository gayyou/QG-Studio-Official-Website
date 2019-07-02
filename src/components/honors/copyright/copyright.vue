<style lang="scss" scoped>
.copyright-container {
  position: relative;
  width: 100%;
  margin-top: 0.4rem;
  padding-bottom: 0.6rem;

  .title {
    font-size: 0.36rem;
    color: #2a2a2a;
  }

  .copyright-list-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }
}

.copyright-container::after {
  content: "";
  display: block;
  clear: both;
}
</style>

<template>
  <div class="copyright-container">
    <span class="title">专利</span>
    <div class="copyright-list-container">
      <list
        v-for="(item, index) in list"
        :key="index + 1"
        :data-index="index"
        :url="item.url"
        :name="item.name"
      ></list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import list from './list/list.vue'

@Component({
  components: {
    list
  }
})
export default class copyright extends Vue {
  list: Array<any> = [
    {
      url: require('@/assets/images/honors/copyright/1.png'),
      name: '头盔内部硬件构造'
    },
    {
      url: require('@/assets/images/honors/copyright/2.png'),
      name: '一款打印机外观专利'
    },
    {
      url: require('@/assets/images/honors/copyright/3.png'),
      name: '一种车祸检测方法及装置'
    },
    {
      url: require('@/assets/images/honors/copyright/4.png'),
      name: '一种车祸监测系统'
    },
    {
      url: require('@/assets/images/honors/copyright/5.jpg'),
      name: '一种基于Kinect及移动互联网的康复训练及评估系统'
    },
    {
      url: require('@/assets/images/honors/copyright/6.png'),
      name: '一种基于控制器的并行打印系统'
    },
    // {
    //   url: require('@/assets/images/honors/copyright/7.png'),
    //   name: '一种基于控制器的并行打印系统-实用新型'
    // },
    {
      url: require('@/assets/images/honors/copyright/7.png'),
      name: '一种可穿戴设备电源管理装置'
    },
    {
      url: require('@/assets/images/honors/copyright/8.png'),
      name: '一种嵌入式系统及单色位图压缩主机'
    },
    {
      url: require('@/assets/images/honors/copyright/9.png'),
      name: '一种智能急救头盔'
    }
  ]
}
</script>
