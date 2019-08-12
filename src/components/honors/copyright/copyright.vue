<<<<<<< HEAD
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
    <span class="title">专利</span>
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
import { Watch } from 'vue-property-decorator';

@Component({
  components: {
    list
  }
})
export default class copyright extends Vue {
    headerList: any = [
    {
      width: 2,
      value: '序号'
    },
    {
      width: 3.5,
      value: '类型'
    },
    {
      width: 3.5,
      value: '名称'
    },
    {
      width: 3.5,
      value: '专利号'
    },
    {
      width: 3.5,
      value: '发明人'
    }
  ];

  copyRightList: any = [
    {
      type: '外观发明专利',
      name: '头盔内部硬件构造',
      id: 'ZL 2017 3 0252884.4',
      owner: '谢光强、许艺茂、张国洪'
    },
    {
      type: '外观发明专利',
      name: '打印机',
      id: 'ZL 2017 3 0291755.6',
      owner: '谢光强、许艺茂、李杨、曾俊华'
    },
    {
      type: '实用新型专利',
      name: '一种车祸检测系统',
      id: 'ZL 2017 2 0632265.2',
      owner: '谢光强、李培锋、邓苏城、李杨、梁盛兑、方锦基'
    },
    {
      type: '实用新型专利',
      name: '一种基于控制器的并行打印系统',
      id: 'ZL 2017 2 0511717.1',
      owner: '谢光强、徐峰、李杨、黄冠宇、黄向龙、李培锋、邓苏城'
    },
    {
      type: '实用新型专利',
      name: '一种可穿戴设备电源管理装置',
      id: 'ZL 2017 2 0632371.0',
      owner: '方锦基、谢光强、陈济斌、李杨、张盛强、黄冠恒、梁智豪、陈文戈'
    },
    {
      type: '实用新型专利',
      name: '一种智能急救头盔',
      id: 'ZL 2017 2 0626760.2',
      owner: '邓苏城、谢光强、李培锋、李杨、方锦基、黄冠恒、陈济斌、梁智豪、庄锦坤、梁盛兑、张盛强、张晓荣'
    },
    {
      type: '实用新型专利',
      name: '多功能便携式数据拷贝装置',
      id: '201110180046.8',
      owner: '谢光强'
    },
    {
      type: '实用新型专利',
      name: '一种电子药盒',
      id: '200920291910.4',
      owner: '谢光强'
    },
    {
      type: '实用新型专利',
      name: '一种交互式投影的检测系统',
      id: '200920194269.2',
      owner: '谢光强'
    },
    {
      type: '发明专利',
      name: '一种电子药盒及其管理系统',
      id: '200910258397.3',
      owner: '谢光强'
    },
    {
      type: '发明专利',
      name: '一种无线智能家电语音控制系统',
      id: '200910213857.0',
      owner: '谢光强'
    },
    {
      type: '发明专利',
      name: '一种交互式投影的检测系统及检测方法',
      id: '200910192141.7',
      owner: '谢光强'
    },
  ];

  dispalyList: Array<any> = [];

  bashIndex: Number = 0;

  currentPage: Number = 0;

  totalPage: Number = 0;

  mounted() {
    this.currentPage = 1;
    this.totalPage = Math.ceil(this.copyRightList.length);
  }

  changePage(newVal) {
    this.currentPage = newVal;
  }

  @Watch('currentPage')
  changeCurrentPage(newVal) {
    this.dispalyList = [];

    for (let i = (newVal - 1) * 10; i < (newVal) * 10 && i < this.copyRightList.length; i++) {
      this.dispalyList.push(this.copyRightList[i]);
    }

  }
}
</script>
=======
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
    <span class="title">专利</span>
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
import { Watch } from 'vue-property-decorator';

@Component({
  components: {
    list
  }
})
export default class copyright extends Vue {
    headerList: any = [
    {
      width: 2,
      value: '序号'
    },
    {
      width: 3.5,
      value: '类型'
    },
    {
      width: 3.5,
      value: '名称'
    },
    {
      width: 3.5,
      value: '专利号'
    },
    {
      width: 3.5,
      value: '发明人'
    }
  ];

  copyRightList: any = [
    {
      type: '外观发明专利',
      name: '头盔内部硬件构造',
      id: 'ZL 2017 3 0252884.4',
      owner: '谢光强、许艺茂、张国洪'
    },
    {
      type: '外观发明专利',
      name: '打印机',
      id: 'ZL 2017 3 0291755.6',
      owner: '谢光强、许艺茂、李杨、曾俊华'
    },
    {
      type: '实用新型专利',
      name: '一种车祸检测系统',
      id: 'ZL 2017 2 0632265.2',
      owner: '谢光强、李培锋、邓苏城、李杨、梁盛兑、方锦基'
    },
    {
      type: '实用新型专利',
      name: '一种基于控制器的并行打印系统',
      id: 'ZL 2017 2 0511717.1',
      owner: '谢光强、徐峰、李杨、黄冠宇、黄向龙、李培锋、邓苏城'
    },
    {
      type: '实用新型专利',
      name: '一种可穿戴设备电源管理装置',
      id: 'ZL 2017 2 0632371.0',
      owner: '方锦基、谢光强、陈济斌、李杨、张盛强、黄冠恒、梁智豪、陈文戈'
    },
    {
      type: '实用新型专利',
      name: '一种智能急救头盔',
      id: 'ZL 2017 2 0626760.2',
      owner: '邓苏城、谢光强、李培锋、李杨、方锦基、黄冠恒、陈济斌、梁智豪、庄锦坤、梁盛兑、张盛强、张晓荣'
    },
    {
      type: '实用新型专利',
      name: '多功能便携式数据拷贝装置',
      id: '201110180046.8',
      owner: '谢光强'
    },
    {
      type: '实用新型专利',
      name: '一种电子药盒',
      id: '200920291910.4',
      owner: '谢光强'
    },
    {
      type: '实用新型专利',
      name: '一种交互式投影的检测系统',
      id: '200920194269.2',
      owner: '谢光强'
    },
    {
      type: '发明专利',
      name: '一种电子药盒及其管理系统',
      id: '200910258397.3',
      owner: '谢光强'
    },
    {
      type: '发明专利',
      name: '一种无线智能家电语音控制系统',
      id: '200910213857.0',
      owner: '谢光强'
    },
    {
      type: '发明专利',
      name: '一种交互式投影的检测系统及检测方法',
      id: '200910192141.7',
      owner: '谢光强'
    },
  ];

  dispalyList: Array<any> = [];

  bashIndex: Number = 0;

  currentPage: Number = 0;

  totalPage: Number = 0;

  mounted() {
    this.currentPage = 1;
    this.totalPage = Math.ceil(this.copyRightList.length);
  }

  changePage(newVal) {
    this.currentPage = newVal;
  }

  @Watch('currentPage')
  changeCurrentPage(newVal) {
    this.dispalyList = [];

    for (let i = (newVal - 1) * 10; i < (newVal) * 10 && i < this.copyRightList.length; i++) {
      this.dispalyList.push(this.copyRightList[i]);
    }

  }
}
</script>
>>>>>>> ccb3fdb5f928aef2f3724779c1b7534d8828d9d1
