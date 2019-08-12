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
    <span class="title">新闻链接</span>
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
export default class News extends Vue {
  headerList: any = [
    {
      width: 2,
      value: '序号'
    },
    {
      width: 6,
      value: '新闻名称'
    },
    {
      width: 8,
      value: '链接'
    }
  ];

  newsList: any = [
    {
      name: '第二十一届“广东青年五四奖章” 候选人选公示公告',
      link: 'http://www.gdcyl.org/bz/ShowArticle.asp?ArticleID=236876'
    },
    {
      name: '广工校园创新人物方锦基：行至半山不停步，中流击水再出发',
      link: 'https://mp.weixin.qq.com/s/pPQvkhImUUu9FJR82QtHIg'
    },
    {
      name: '2019广工招生计划出炉！优秀新生有重奖！最高10万！',
      link: 'https://mp.weixin.qq.com/s/VK74vo-Skqy_EB1RArpWBQ'
    },
    {
      name: '南方卫视采访QG工作室',
      link: 'https://v.qq.com/x/cover/aon28ztgjgljgk4/j00305qzj1g.html'
    },
    {
      name: '计算机学院QG团队入选“小平科技创新团队”',
      link: 'http://gdutnews.gdut.edu.cn/neirongye.jsp?urltype=news.NewsContentUrl&wbtreeid=1013&wbnewsid=7192'
    },
    {
      name: '我校“QG工作室”获 大学生“小平科技创新团队”称号',
      link: 'http://gdutnews.gdut.edu.cn/neirongye.jsp?urltype=news.NewsContentUrl&wbtreeid=1013&wbnewsid=7925'
    },
    {
      name: '我校“QG工作室”获 大学生“小平科技创新团队”称号',
      link: 'http://news.gdut.edu.cn/viewarticle.aspx?articleid=132732'
    },

    {
      name: '热烈祝贺我院QG团队喜获“小平科技创新团队”荣誉称号',
      link: 'http://jsjxy.gdut.edu.cn/info/1018/2137.htm'
    },
    {
      name: '陈江耀教授获第二十一届“广东青年五四奖章”：攻克重大大气治理科学难题 QG团队获提名奖',
      link: 'http://gdutnews.gdut.edu.cn/neirongye.jsp?urltype=news.NewsContentUrl&wbtreeid=1013&wbnewsid=8616'
    },
    {
      name: '新浪新闻报道团队智能急救头盔项目',
      link: 'http://news.sina.com.cn/s/2017-06-20/doc-ifyhfpat5417136.shtml'
    },
    {
      name: '网易新闻报道团队智能急救头盔项目',
      link: 'http://news.163.com/17/0620/04/CNBKBSEJ00018AOP.html'
    },
    {
      name: '新快报报道团队智能急救头盔项目',
      link: 'http://news.163.com/17/0623/00/CNIUV1QS00018AOP.html'
    },
    {
      name: '广州日报报道团队智能急救头盔项目',
      link: 'http://news.dayoo.com/guangzhou/201706/20/150079_51379923.htm'
    },
    {
      name: '微信推文: 五四青年奖章',
      link: 'https://mp.weixin.qq.com/s/alUUuQ2jT8MzVw9gFkKF3Q'
    },
    {
      name: '我院学子荣获泛珠三角大学生计算机作品赛“一等奖”两项',
      link: 'http://news.gdut.edu.cn/viewarticle.aspx?articleid=131594'
    },
    {
      name: '我院学子在2016年泛珠三角大学生计算机作品赛中获得佳绩',
      link: 'http://news.gdut.edu.cn/viewarticle.aspx?articleid=115547'
    },
    {
      name: '我院学子荣获泛珠三角大学生计算机作品赛“一等奖”',
      link: 'http://news.gdut.edu.cn/viewarticle.aspx?articleid=114436'
    },
    {
      name: '我院学子在泛珠三角大学生计算机作品赛总决赛中喜获金奖',
      link: 'http://news.gdut.edu.cn/viewarticle.aspx?articleid=132436'
    },
    {
      name: '去广州七十五中展示',
      link: 'http://news.gdut.edu.cn/viewarticle.aspx?articleid=139440'
    },
    {
      name: '广东卫视高校创新项目专访、广东新闻联播头条播出',
      link: 'http://news.wesend.tv/wd/?sd=178169&from=groupmessage&isappinstalled=1'
    },
  ];

  dispalyList: Array<any> = [];

  bashIndex: Number = 0;

  currentPage: Number = 0;

  totalPage: Number = 0;

  mounted() {
    this.currentPage = 1;
    this.totalPage = Math.ceil(this.newsList.length);
  }

  changePage(newVal) {
    this.currentPage = newVal;
  }

  @Watch('currentPage')
  changeCurrentPage(newVal) {
    this.dispalyList = [];

    for (let i = (newVal - 1) * 10; i < (newVal) * 10 && i < this.newsList.length; i++) {
      this.dispalyList.push(this.newsList[i]);
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
    <span class="title">新闻链接</span>
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
export default class News extends Vue {
  headerList: any = [
    {
      width: 2,
      value: '序号'
    },
    {
      width: 6,
      value: '新闻名称'
    },
    {
      width: 8,
      value: '链接'
    }
  ];

  newsList: any = [
    {
      name: '第二十一届“广东青年五四奖章” 候选人选公示公告',
      link: 'http://www.gdcyl.org/bz/ShowArticle.asp?ArticleID=236876'
    },
    {
      name: '广工校园创新人物方锦基：行至半山不停步，中流击水再出发',
      link: 'https://mp.weixin.qq.com/s/pPQvkhImUUu9FJR82QtHIg'
    },
    {
      name: '2019广工招生计划出炉！优秀新生有重奖！最高10万！',
      link: 'https://mp.weixin.qq.com/s/VK74vo-Skqy_EB1RArpWBQ'
    },
    {
      name: '南方卫视采访QG工作室',
      link: 'https://v.qq.com/x/cover/aon28ztgjgljgk4/j00305qzj1g.html'
    },
    {
      name: '计算机学院QG团队入选“小平科技创新团队”',
      link: 'http://gdutnews.gdut.edu.cn/neirongye.jsp?urltype=news.NewsContentUrl&wbtreeid=1013&wbnewsid=7192'
    },
    {
      name: '我校“QG工作室”获 大学生“小平科技创新团队”称号',
      link: 'http://gdutnews.gdut.edu.cn/neirongye.jsp?urltype=news.NewsContentUrl&wbtreeid=1013&wbnewsid=7925'
    },
    {
      name: '我校“QG工作室”获 大学生“小平科技创新团队”称号',
      link: 'http://news.gdut.edu.cn/viewarticle.aspx?articleid=132732'
    },

    {
      name: '热烈祝贺我院QG团队喜获“小平科技创新团队”荣誉称号',
      link: 'http://jsjxy.gdut.edu.cn/info/1018/2137.htm'
    },
    {
      name: '陈江耀教授获第二十一届“广东青年五四奖章”：攻克重大大气治理科学难题 QG团队获提名奖',
      link: 'http://gdutnews.gdut.edu.cn/neirongye.jsp?urltype=news.NewsContentUrl&wbtreeid=1013&wbnewsid=8616'
    },
    {
      name: '新浪新闻报道团队智能急救头盔项目',
      link: 'http://news.sina.com.cn/s/2017-06-20/doc-ifyhfpat5417136.shtml'
    },
    {
      name: '网易新闻报道团队智能急救头盔项目',
      link: 'http://news.163.com/17/0620/04/CNBKBSEJ00018AOP.html'
    },
    {
      name: '新快报报道团队智能急救头盔项目',
      link: 'http://news.163.com/17/0623/00/CNIUV1QS00018AOP.html'
    },
    {
      name: '广州日报报道团队智能急救头盔项目',
      link: 'http://news.dayoo.com/guangzhou/201706/20/150079_51379923.htm'
    },
    {
      name: '微信推文: 五四青年奖章',
      link: 'https://mp.weixin.qq.com/s/alUUuQ2jT8MzVw9gFkKF3Q'
    },
    {
      name: '我院学子荣获泛珠三角大学生计算机作品赛“一等奖”两项',
      link: 'http://news.gdut.edu.cn/viewarticle.aspx?articleid=131594'
    },
    {
      name: '我院学子在2016年泛珠三角大学生计算机作品赛中获得佳绩',
      link: 'http://news.gdut.edu.cn/viewarticle.aspx?articleid=115547'
    },
    {
      name: '我院学子荣获泛珠三角大学生计算机作品赛“一等奖”',
      link: 'http://news.gdut.edu.cn/viewarticle.aspx?articleid=114436'
    },
    {
      name: '我院学子在泛珠三角大学生计算机作品赛总决赛中喜获金奖',
      link: 'http://news.gdut.edu.cn/viewarticle.aspx?articleid=132436'
    },
    {
      name: '去广州七十五中展示',
      link: 'http://news.gdut.edu.cn/viewarticle.aspx?articleid=139440'
    },
    {
      name: '广东卫视高校创新项目专访、广东新闻联播头条播出',
      link: 'http://news.wesend.tv/wd/?sd=178169&from=groupmessage&isappinstalled=1'
    },
  ];

  dispalyList: Array<any> = [];

  bashIndex: Number = 0;

  currentPage: Number = 0;

  totalPage: Number = 0;

  mounted() {
    this.currentPage = 1;
    this.totalPage = Math.ceil(this.newsList.length);
  }

  changePage(newVal) {
    this.currentPage = newVal;
  }

  @Watch('currentPage')
  changeCurrentPage(newVal) {
    this.dispalyList = [];

    for (let i = (newVal - 1) * 10; i < (newVal) * 10 && i < this.newsList.length; i++) {
      this.dispalyList.push(this.newsList[i]);
    }

  }
}
</script>
>>>>>>> ccb3fdb5f928aef2f3724779c1b7534d8828d9d1
