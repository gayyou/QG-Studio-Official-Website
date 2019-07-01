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

    li {
      width: 100%;
      height: 0.5rem;
    }
  }

  .right-section {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
  }
}
</style>

<template>
  <div class="members-main">
    <div class="left-section">
      <li
        v-for="(item, index) in groupList"
        :key="index + 1"
      >{{ item }}</li>
    </div>
    <div class="right-section">
      <list
        v-for="(item, index) in memList"
        :key="index + 1"
        :year="item.year"
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

@Component({
  components: {
    list
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
  
  memList: Array<any> = [
    {
      year: '2015届',
      name: '郑伟滨',
      group: '前端组',
      url: '123'
    },
    {
      year: '2015届',
      name: '郑伟滨',
      group: '前端组',
      url: '123'
    },
    {
      year: '2015届',
      name: '郑伟滨',
      group: '前端组',
      url: '123'
    },
    {
      year: '2015届',
      name: '郑伟滨',
      group: '前端组',
      url: '123'
    },
    {
      year: '2015届',
      name: '郑伟滨',
      group: '前端组',
      url: '123'
    },

    {
      year: '2015届',
      name: '郑伟滨',
      group: '前端组',
      url: '123'
    },
    {
      year: '2015届',
      name: '郑伟滨',
      group: '前端组',
      url: '123'
    },
    {
      year: '2015届',
      name: '郑伟滨',
      group: '前端组',
      url: '123'
    },
    {
      year: '2015届',
      name: '郑伟滨',
      group: '前端组',
      url: '123'
    },
    {
      year: '2015届',
      name: '郑伟滨',
      group: '前端组',
      url: '123'
    },
    {
      year: '2015届',
      name: '郑伟滨',
      group: '前端组',
      url: '123'
    },
    {
      year: '2015届',
      name: '郑伟滨',
      group: '前端组',
      url: '123'
    },
  ]
}
</script>
