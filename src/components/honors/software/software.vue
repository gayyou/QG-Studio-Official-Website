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
.page-container {
  margin-top: 0.3rem;
  text-align: center;
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
      v-for="(item, index) in dispalyList"
      :key="index + 1"
      :index="index + 1"
      :item="item"
    ></list>
    <el-pagination
      class="page-container"
      background
      layout="prev, pager, next"
      :total="totalPage"
      :current-page="currentPage"
      @current-change="changePage"
    >
    </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import list from './list/list.vue'
import layer from './layer/layer.vue'
import { Watch } from 'vue-property-decorator';

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
    },
    {
      id: '2011R11L029047',
      name: '建筑楼宇声光质量检测模拟系统',
      time: '2017年03月16日'
    },
    {
      id: '2011SR071360',
      name: '企业缴费一卡通综合管理平台软件',
      time: '2017年03月16日'
    },
    {
      id: '2010SR000003',
      name: '质量计量信息一体化管理平台软件',
      time: '2017年03月16日'
    },
    {
      id: '2009SR061272',
      name: '3D虚拟场景编辑系统',
      time: '2017年03月16日'
    },
    {
      id: '2009SR061274',
      name: '数字化虚拟场景实时漫游系统',
      time: '2017年03月16日'
    }
  ];

  dispalyList: Array<any> = [];

  bashIndex: Number = 0;

  currentPage: Number = 0;

  totalPage: Number = 0;

  mounted() {
    this.currentPage = 1;
    this.totalPage = Math.ceil(this.softwareList.length);
  }

  changePage(newVal) {
    this.currentPage = newVal;
  }

  @Watch('currentPage')
  changeCurrentPage(newVal) {
    this.dispalyList = [];

    for (let i = (newVal - 1) * 10; i < (newVal) * 10 && i < this.softwareList.length; i++) {
      this.dispalyList.push(this.softwareList[i]);
    }

  }
}
</script>
