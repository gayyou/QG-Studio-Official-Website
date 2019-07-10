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
    '图形组',
    '设计师组'
  ];

  groupIndex = 0;
  
  memList: Array<any> = [
    {
      year: '2017',
      name: '郑伟滨',
      group: '前端组',
      url: require('@/assets/images/members/zwb.jpg')
    },
    {
      year: '2017',
      name: '张栩铭',
      group: '图形组',
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
      url: require('@/assets/images/members/xjb.jpg')
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
      group: '图形组',
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
    
    // console.log(groupList[newVal])
    // console.log(this.$data)
    // console.log(this.$props.year)

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
