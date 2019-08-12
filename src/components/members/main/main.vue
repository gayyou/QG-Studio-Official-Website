<<<<<<< HEAD
<style lang="scss" scoped>
.members-main {
  margin-top: 0.2rem;
  width: 100%;
  position: relative;
  display: flex;
  padding-bottom: 30px;
  overflow: hidden;

  .left-section {
    position: relative;
    width: 3rem;
    height: 100%;
    // display: flex;
    // justify-content: center;

    li {
      cursor: pointer;
      padding: 0.05rem;
      border-radius: 12px;
      margin: 0.1rem auto;
      width: 1rem;
      // height: 0.5re1m;
    }
  }

  .right-section {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    // justify-content: center;
  }
}
.active {
  background-color: #a0a0a0;
}
</style>

<template>
  <div class="members-main">
    <div class="left-section">
      <li
        @click="changeGroup"
        v-for="(item, index) in groupList"
        :key="index + 1"
        :data-index="index"
        :class="index == groupIndex ? 'active' : ''"
      >{{ item }}</li>
    </div>
    <div class="right-section">
      <list
        v-for="(item, index) in displayList"
        :key="index + 1"
        :year="item.year + '级'"
        :group="item.group"
        :name="item.name"
        :url="item.url"
      ></list>
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
    list,
  },
  props: {
    year: String
  }
})
export default class Main extends Vue {
  groupList: Array<any> = [
    '全部',
    '前端组',
    '后台组',
    '嵌入式组',
    '数据挖掘组',
    '移动组',
    '图形渲染组',
    '设计师组'
  ];

  groupIndex = 0;
  
  memList: Array<any> = [
    {
      year: '2017',
      name: '郑伟滨',
      group: '前端组',
      url: require('@/assets/images/members/zwb.png')
    },
    {
      year: '2017',
      name: '张栩铭',
      group: '图形渲染组',
      url: require('@/assets/images/members/zxm.jpg')
    },
    {
      year: '2017',
      name: '张润鹏',
      group: '数据挖掘组',
      url: require('@/assets/images/members/zrp.png')
    },
    {
      year: '2017',
      name: '林旭',
      group: '后台组',
      url: require('@/assets/images/members/lx.png')
    },
    {
      year: '2017',
      name: '曾华琛',
      group: '后台组',
      url: require('@/assets/images/members/zhc.jpg')
    },
    {
      year: '2017',
      name: '陈子锋',
      group: '前端组',
      url: require('@/assets/images/members/czf.jpg')
    },
    {
      year: '2017',
      name: '许锦彬',
      group: '移动组',
      url: require('@/assets/images/members/xjb.png')
    },
    {
      year: '2017',
      name: '江一舟',
      group: '数据挖掘组',
      url: require('@/assets/images/members/jyz.jpg')
    },
    {
      year: '2017',
      name: '李国延',
      group: '嵌入式组',
      url: require('@/assets/images/members/lgy.png')
    },
    {
      year: '2017',
      name: '刘基正',
      group: '嵌入式组',
      url: require('@/assets/images/members/ljz.jpg')
    },
    {
      year: '2017',
      name: '潘蓓文',
      group: '设计师组',
      url: require('@/assets/images/members/pbw.jpg')
    },
    {
      year: '2017',
      name: '章世楠',
      group: '嵌入式组',
      url: require('@/assets/images/members/zsn.jpg')
    },
    {
      year: '2017',
      name: '陈浚丰',
      group: '图形渲染组',
      url: require('@/assets/images/members/cjf.png')
    },
    {
      year: '2017',
      name: '杨浩',
      group: '数据挖掘组',
      url: require('@/assets/images/members/yh.png')
    },
    {
      year: '2017',
      name: '钟希宇',
      group: '设计师组',
      url: require('@/assets/images/members/zxy.jpg')
    },
    {
      year: '2016',
      name: '胡哲维',
      group: '数据挖掘组',
      url: require('@/assets/images/members/hzw.jpg')
    },
    {
      year: '2018',
      name: '黄正婷',
      group: '数据挖掘组',
      url: require('@/assets/images/members/hzt.jpg')
    },
    {
      year: '2018',
      name: '林炯城',
      group: '数据挖掘组',
      url: require('@/assets/images/members/ljc.jpg')
    },
    {
      year: '2016',
      name: '梁嘉豪',
      group: '数据挖掘组',
      url: require('@/assets/images/members/ljh.jpg')
    },
    {
      year: '2016',
      name: '郑振练',
      group: '数据挖掘组',
      url: require('@/assets/images/members/zzl.jpg')
    },
    {
      year:'2018',
      name:'彭文胜',
      group:'后台组',
      url: require('@/assets/images/members/pws.jpg')
    },
    {
      year:'2018',
      name:'黄煜淇',
      group:'后台组',
      url: require('@/assets/images/members/hyq.jpg')
    },
    {
      year:'2018',
      name:'郭沛',
      group:'后台组',
      url: require('@/assets/images/members/gp.jpg')
    },
    {
      year:'2018',
      name:'黄钰朝',
      group:'后台组',
      url:require('@/assets/images/members/hyc.jpg')
    },
    {
      year:'2016',
      name:'林楷',
      group:'后台组',
      url:require('@/assets/images/members/lk.png')
    },
    {
      year:'2016',
      name:'郑俊铭',
      group:'后台组',
      url:require('@/assets/images/members/zjm.png')
    },
    {
      year:'2016',
      name:'高键城',
      group:'后台组',
      url:require('@/assets/images/members/gjc.png')
    },
    {
      year:'2016',
      name:'伍俊贤',
      group:'前端组',
      url:require('@/assets/images/members/wjx.jpg')
    },
    {
      year:'2016',
      name:'阿力木',
      group:'前端组',
      url:require('@/assets/images/members/alm.jpg')
    },
    {
      year:'2016',
      name:'沈培森',
      group:'设计师组',
      url:require('@/assets/images/members/sps.jpg')
    },
    {
      year:'2016',
      name:'梁永康',
      group:'设计师组',
      url:require('@/assets/images/members/lyk.png')
    },
    {
      year:'2016',
      name:'徐轶',
      group:'设计师组',
      url:require('@/assets/images/members/xy.jpg')
    },
    {
      year:'2016',
      name:'吉臻伟',
      group:'移动组',
      url:require('@/assets/images/members/jzw.jpg')
    },
    {
      year: '2016',
      name: '禤骏',
      group: '图形渲染组',
      url: require('@/assets/images/members/xj.png')
    },
    {
      year: '2016',
      name: '梁仕翘',
      group: '图形渲染组',
      url: require('@/assets/images/members/lsq.png')
    },
    {
      year: '2016',
      name: '卢俊廷',
      group: '图形渲染组',
      url: require('@/assets/images/members/ljt.png')
    },
    {
      year: '2016',
      name: '周欣晖',
      group: '图形渲染组',
      url: require('@/assets/images/members/zxh.png')
    },
    {
      year: '2016',
      name: '黄伟烽',
      group: '移动组',
      url: require('@/assets/images/members/hwf.png')
    },
    {
      year: '2016',
      name: '林宗展',
      group: '移动组',
      url: require('@/assets/images/members/lzz.png')
    },
    {
      year: '2018',
      name: '王煜墉',
      group: '移动组',
      url: require('@/assets/images/members/wyy.jpg')
    },
    {
      year: '2018',
      name: '区德明',
      group: '移动组',
      url: require('@/assets/images/members/oudm.jpg')
    },
    {
      year: '2018',
      name: '魏晓',
      group: '移动组',
      url: require('@/assets/images/members/wx.jpg')
    },
    {
      year: '2018',
      name: '吴永力',
      group: '图形渲染组',
      url: require('@/assets/images/members/wyl.jpg')
    },
    {
      year: '2018',
      name: '何家浩',
      group: '图形渲染组',
      url: require('@/assets/images/members/hjh.jpg')
    },
    {
      year: '2018',
      name: '林黛玲',
      group: '设计师组',
      url: require('@/assets/images/members/ldl.jpg')
    },
    {
      year: '2018',
      name: '郭润东',
      group: '设计师组',
      url: require('@/assets/images/members/grd.jpg')
    },
    {
      year: '2018',
      name: '李慧婷',
      group: '设计师组',
      url: require('@/assets/images/members/lht.jpg')
    },
    {
      year: '2018',
      name: '王树干',
      group: '前端组',
      url: require('@/assets/images/members/wsg.jpg')
    },
    {
      year: '2018',
      name: '余圣源',
      group: '前端组',
      url: require('@/assets/images/members/ysy.jpg')
    },
    {
      year: '2018',
      name: '魏桂佳',
      group: '前端组',
      url: require('@/assets/images/members/wgj.png')
    },
    {
      year: '2016',
      name: '伍欣怡',
      group: '前端组',
      url: require('@/assets/images/members/wxy.jpg')
    },
    {
      year: '2018',
      name: '李炜乐',
      group: '数据挖掘组',
      url: require('@/assets/images/members/lwl.jpg')
    },
    {
      year: '2018',
      name: '辜仰淦',
      group: '数据挖掘组',
      url: require('@/assets/images/members/gyg.jpg')
    },
    {
      year: '2016',
      name: '郑臣河',
      group: '嵌入式组',
      url: require('@/assets/images/members/zch.jpg')
    },
    {
      year: '2016',
      name: '叶志活',
      group: '嵌入式组',
      url: require('@/assets/images/members/yzh.png')
    },
    {
      year: '2017',
      name: '张艺隽',
      group: '移动组',
      url: require('@/assets/images/members/zyj.png')
    }
  ];

  displayList: Array<any> = [];

  changeGroup(event: any) {
    let index = event.target.getAttribute('data-index');
    if (!index) {
      return ;
    }
    this.$data.groupIndex = index;
  }

  mounted() {
    this.memList = this.memList.sort((a: any, b: any): number => {
      return a.name < b.name ? -1 : 1;
    })
    this.memList = this.memList.sort((a: any, b: any): number => {
      return a.year < b.year ? -1 : 1;
    })
    this.memList = this.memList.sort((a: any, b: any): number => {
      return a.group < b.group ? -1 : 1;
    })
  }

  @Watch('year')
  watchYear(newVal: String) {
    this.$data.displayList = [];
    let groupList = this.$data.groupList,
        index = this.$data.groupIndex;

    for (let i = 0; i < this.$data.memList.length; i++) {
      if (groupList[index] == '全部' || groupList[index] == this.$data.memList[i].group) {
        if (newVal == '全部' || newVal == this.$data.memList[i].year) {
          this.$data.displayList.push(this.$data.memList[i]);
        }
      }
    }
  }

  @Watch('groupIndex')
  watchGroupIndex(newVal: any) {
    this.$data.displayList = [];
    let groupList = this.$data.groupList;

    for (let i = 0; i < this.$data.memList.length; i++) {
      if (groupList[newVal] == '全部' || groupList[newVal] == this.$data.memList[i].group) {
        // console.log(this.$data.memList[i].group)
        
        if (this.$props.year == '全部' || this.$props.year == this.$data.memList[i].year) {
          this.$data.displayList.push(this.$data.memList[i]);
        }
      }
    }
  }
}
</script>
=======
<style lang="scss" scoped>
.members-main {
  margin-top: 0.2rem;
  width: 100%;
  position: relative;
  display: flex;
  padding-bottom: 30px;
  overflow: hidden;

  .left-section {
    position: relative;
    width: 3rem;
    height: 100%;
    // display: flex;
    // justify-content: center;

    li {
      cursor: pointer;
      padding: 0.05rem;
      border-radius: 12px;
      margin: 0.1rem auto;
      width: 1rem;
      // height: 0.5re1m;
    }
  }

  .right-section {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    // justify-content: center;
  }
}
.active {
  background-color: #a0a0a0;
}
</style>

<template>
  <div class="members-main">
    <div class="left-section">
      <li
        @click="changeGroup"
        v-for="(item, index) in groupList"
        :key="index + 1"
        :data-index="index"
        :class="index == groupIndex ? 'active' : ''"
      >{{ item }}</li>
    </div>
    <div class="right-section">
      <list
        v-for="(item, index) in displayList"
        :key="index + 1"
        :year="item.year + '级'"
        :group="item.group"
        :name="item.name"
        :url="item.url"
      ></list>
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
    list,
  },
  props: {
    year: String
  }
})
export default class Main extends Vue {
  groupList: Array<any> = [
    '全部',
    '前端组',
    '后台组',
    '嵌入式组',
    '数据挖掘组',
    '移动组',
    '图形渲染组',
    '设计师组'
  ];

  groupIndex = 0;
  
  memList: Array<any> = [
    {
      year: '2017',
      name: '郑伟滨',
      group: '前端组',
      url: require('@/assets/images/members/zwb.png')
    },
    {
      year: '2017',
      name: '张栩铭',
      group: '图形渲染组',
      url: require('@/assets/images/members/zxm.jpg')
    },
    {
      year: '2017',
      name: '张润鹏',
      group: '数据挖掘组',
      url: require('@/assets/images/members/zrp.png')
    },
    {
      year: '2017',
      name: '林旭',
      group: '后台组',
      url: require('@/assets/images/members/lx.png')
    },
    {
      year: '2017',
      name: '曾华琛',
      group: '后台组',
      url: require('@/assets/images/members/zhc.jpg')
    },
    {
      year: '2017',
      name: '陈子锋',
      group: '前端组',
      url: require('@/assets/images/members/czf.jpg')
    },
    {
      year: '2017',
      name: '许锦彬',
      group: '移动组',
      url: require('@/assets/images/members/xjb.png')
    },
    {
      year: '2017',
      name: '江一舟',
      group: '数据挖掘组',
      url: require('@/assets/images/members/jyz.jpg')
    },
    {
      year: '2017',
      name: '李国延',
      group: '嵌入式组',
      url: require('@/assets/images/members/lgy.png')
    },
    {
      year: '2017',
      name: '刘基正',
      group: '嵌入式组',
      url: require('@/assets/images/members/ljz.jpg')
    },
    {
      year: '2017',
      name: '潘蓓文',
      group: '设计师组',
      url: require('@/assets/images/members/pbw.jpg')
    },
    {
      year: '2017',
      name: '章世楠',
      group: '嵌入式组',
      url: require('@/assets/images/members/zsn.jpg')
    },
    {
      year: '2017',
      name: '陈浚丰',
      group: '图形渲染组',
      url: require('@/assets/images/members/cjf.png')
    },
    {
      year: '2017',
      name: '杨浩',
      group: '数据挖掘组',
      url: require('@/assets/images/members/yh.png')
    },
    {
      year: '2017',
      name: '钟希宇',
      group: '设计师组',
      url: require('@/assets/images/members/zxy.jpg')
    },
    {
      year: '2016',
      name: '胡哲维',
      group: '数据挖掘组',
      url: require('@/assets/images/members/hzw.jpg')
    },
    {
      year: '2018',
      name: '黄正婷',
      group: '数据挖掘组',
      url: require('@/assets/images/members/hzt.jpg')
    },
    {
      year: '2018',
      name: '林炯城',
      group: '数据挖掘组',
      url: require('@/assets/images/members/ljc.jpg')
    },
    {
      year: '2016',
      name: '梁嘉豪',
      group: '数据挖掘组',
      url: require('@/assets/images/members/ljh.jpg')
    },
    {
      year: '2016',
      name: '郑振练',
      group: '数据挖掘组',
      url: require('@/assets/images/members/zzl.jpg')
    },
    {
      year:'2018',
      name:'彭文胜',
      group:'后台组',
      url: require('@/assets/images/members/pws.jpg')
    },
    {
      year:'2018',
      name:'黄煜淇',
      group:'后台组',
      url: require('@/assets/images/members/hyq.jpg')
    },
    {
      year:'2018',
      name:'郭沛',
      group:'后台组',
      url: require('@/assets/images/members/gp.jpg')
    },
    {
      year:'2018',
      name:'黄钰朝',
      group:'后台组',
      url:require('@/assets/images/members/hyc.jpg')
    },
    {
      year:'2016',
      name:'林楷',
      group:'后台组',
      url:require('@/assets/images/members/lk.png')
    },
    {
      year:'2016',
      name:'郑俊铭',
      group:'后台组',
      url:require('@/assets/images/members/zjm.png')
    },
    {
      year:'2016',
      name:'高键城',
      group:'后台组',
      url:require('@/assets/images/members/gjc.png')
    },
    {
      year:'2016',
      name:'伍俊贤',
      group:'前端组',
      url:require('@/assets/images/members/wjx.jpg')
    },
    {
      year:'2016',
      name:'阿力木',
      group:'前端组',
      url:require('@/assets/images/members/alm.jpg')
    },
    {
      year:'2016',
      name:'沈培森',
      group:'设计师组',
      url:require('@/assets/images/members/sps.jpg')
    },
    {
      year:'2016',
      name:'梁永康',
      group:'设计师组',
      url:require('@/assets/images/members/lyk.png')
    },
    {
      year:'2016',
      name:'徐轶',
      group:'设计师组',
      url:require('@/assets/images/members/xy.jpg')
    },
    {
      year:'2016',
      name:'吉臻伟',
      group:'移动组',
      url:require('@/assets/images/members/jzw.jpg')
    },
    {
      year: '2016',
      name: '禤骏',
      group: '图形渲染组',
      url: require('@/assets/images/members/xj.png')
    },
    {
      year: '2016',
      name: '梁仕翘',
      group: '图形渲染组',
      url: require('@/assets/images/members/lsq.png')
    },
    {
      year: '2016',
      name: '卢俊廷',
      group: '图形渲染组',
      url: require('@/assets/images/members/ljt.png')
    },
    {
      year: '2016',
      name: '周欣晖',
      group: '图形渲染组',
      url: require('@/assets/images/members/zxh.png')
    },
    {
      year: '2016',
      name: '黄伟烽',
      group: '移动组',
      url: require('@/assets/images/members/hwf.png')
    },
    {
      year: '2016',
      name: '林宗展',
      group: '移动组',
      url: require('@/assets/images/members/lzz.png')
    },
    {
      year: '2018',
      name: '王煜墉',
      group: '移动组',
      url: require('@/assets/images/members/wyy.jpg')
    },
    {
      year: '2018',
      name: '区德明',
      group: '移动组',
      url: require('@/assets/images/members/oudm.jpg')
    },
    {
      year: '2018',
      name: '魏晓',
      group: '移动组',
      url: require('@/assets/images/members/wx.jpg')
    },
    {
      year: '2018',
      name: '吴永力',
      group: '图形渲染组',
      url: require('@/assets/images/members/wyl.jpg')
    },
    {
      year: '2018',
      name: '何家浩',
      group: '图形渲染组',
      url: require('@/assets/images/members/hjh.jpg')
    },
    {
      year: '2018',
      name: '林黛玲',
      group: '设计师组',
      url: require('@/assets/images/members/ldl.jpg')
    },
    {
      year: '2018',
      name: '郭润东',
      group: '设计师组',
      url: require('@/assets/images/members/grd.jpg')
    },
    {
      year: '2018',
      name: '李慧婷',
      group: '设计师组',
      url: require('@/assets/images/members/lht.jpg')
    },
    {
      year: '2018',
      name: '王树干',
      group: '前端组',
      url: require('@/assets/images/members/wsg.jpg')
    },
    {
      year: '2018',
      name: '余圣源',
      group: '前端组',
      url: require('@/assets/images/members/ysy.jpg')
    },
    {
      year: '2018',
      name: '魏桂佳',
      group: '前端组',
      url: require('@/assets/images/members/wgj.png')
    },
    {
      year: '2016',
      name: '伍欣怡',
      group: '前端组',
      url: require('@/assets/images/members/wxy.jpg')
    },
    {
      year: '2018',
      name: '李炜乐',
      group: '数据挖掘组',
      url: require('@/assets/images/members/lwl.jpg')
    },
    {
      year: '2018',
      name: '辜仰淦',
      group: '数据挖掘组',
      url: require('@/assets/images/members/gyg.jpg')
    },
    {
      year: '2016',
      name: '郑臣河',
      group: '嵌入式组',
      url: require('@/assets/images/members/zch.jpg')
    },
    {
      year: '2016',
      name: '叶志活',
      group: '嵌入式组',
      url: require('@/assets/images/members/yzh.png')
    },
    {
      year: '2017',
      name: '张艺隽',
      group: '移动组',
      url: require('@/assets/images/members/zyj.png')
    }
  ];

  displayList: Array<any> = [];

  changeGroup(event: any) {
    let index = event.target.getAttribute('data-index');
    if (!index) {
      return ;
    }
    this.$data.groupIndex = index;
  }

  mounted() {
    this.memList = this.memList.sort((a: any, b: any): number => {
      return a.name < b.name ? -1 : 1;
    })
    this.memList = this.memList.sort((a: any, b: any): number => {
      return a.year < b.year ? -1 : 1;
    })
    this.memList = this.memList.sort((a: any, b: any): number => {
      return a.group < b.group ? -1 : 1;
    })
  }

  @Watch('year')
  watchYear(newVal: String) {
    this.$data.displayList = [];
    let groupList = this.$data.groupList,
        index = this.$data.groupIndex;

    for (let i = 0; i < this.$data.memList.length; i++) {
      if (groupList[index] == '全部' || groupList[index] == this.$data.memList[i].group) {
        if (newVal == '全部' || newVal == this.$data.memList[i].year) {
          this.$data.displayList.push(this.$data.memList[i]);
        }
      }
    }
  }

  @Watch('groupIndex')
  watchGroupIndex(newVal: any) {
    this.$data.displayList = [];
    let groupList = this.$data.groupList;

    for (let i = 0; i < this.$data.memList.length; i++) {
      if (groupList[newVal] == '全部' || groupList[newVal] == this.$data.memList[i].group) {
        // console.log(this.$data.memList[i].group)
        
        if (this.$props.year == '全部' || this.$props.year == this.$data.memList[i].year) {
          this.$data.displayList.push(this.$data.memList[i]);
        }
      }
    }
  }
}
</script>
>>>>>>> ccb3fdb5f928aef2f3724779c1b7534d8828d9d1
