<style lang="scss" scoped>
%clear-both::after {
  content: "";
  display: block;
  clear: both;
}

.award-container {
  @extend %clear-both;

  position: relative;
  width: 100%;
  margin-bottom: .5rem;
  overflow: hidden;
  text-align: start;
  padding-bottom: 0.4rem;

  .title {
    display: block;
    margin-top: 0.4rem;
    font-size: 0.36rem;
    color: #2a2a2a;
    text-align: center;
  }

  .header {
    width: 100%;
    height: 1.28rem;
    display: flex;
    justify-content: center;

    span {
      display: block;
      font-size: .24rem;
      height: 1.28rem;
      line-height: 1.28rem;
      color: #707070;
    }
    .award-main {
      @extend %clear-both;

      position: relative;
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="award-container">
    <span class="title">软件著作权</span>
    <div class="header">
      <span
        v-for="(item) in headerList"
        :key="item.value"
        :style="'width: ' + item.width + 'rem;'"
      >{{ item.value }}</span>
    </div>
    <div class="award-main">
    <list
      v-for="(item, index) in softwareList"
      :key="index + 1"
      :index="index + 1"
      :item="item"
    ></list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import list from './list/list.vue'
import layer from './layer/layer.vue'

@Component({
  components: {
    list,
    layer
  }
})
export default class Software extends Vue {
  headerList: Array<any> = [
    {
      width: 2,
      value: '序号'
    },
    {
      width: 4.5,
      value: '软件名称'
    },
    {
      width: 4.5,
      value: '登记号'
    },
    {
      width: 4.5,
      value: '发表时间'
    },
  ];

  softwareList: any = [
    {
      id: '2017SR267145',
      name: '订单集群打印系统V1.0',
      time: '2017年03月26日'
    },
    {
      id: '2017SR385752',
      name: '康复训练及评估系统V1.0',
      time: '2017年04月01日'
    },
    {
      id: '2017SR385305',
      name: '康复训练及评估系统移动管理系统',
      time: '2017年04月01日'
    },
    {
      id: '2017SR274774',
      name: '微型打印控制系统V1.0',
      time: '2016年12月31日'
    },
    {
      id: '2017SR274760',
      name: '移动订单管理及打印系统V1.0',
      time: '2017年03月16日'
    },
    {
      id: '2017SR288722',
      name: '智能急救头盔APP软件V1.0',
      time: '2017年03月16日'
    },
    {
      id: '2017SR287905',
      name: '智能急救头盔系统V1.0',
      time: '2017年03月16日'
    }
  ]
}
</script>
