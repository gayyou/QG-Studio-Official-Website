<style lang="scss">
@font-face {
  font-family: 'SourceHanSansCN-Regular';
  src: url('assets/fonts/SourceHanSansCN-Regular.ttf') format('truetype');
}
#app {
  font-family: 'SourceHanSansCN-Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden; 
}
.footer {
  position: relative;
}
.el-scrollbar__wrap {
  overflow-x: hidden!important;
}
.el-scrollbar__thumb:hover {
  background-color: rgba(0, 0, 0, .8)!important;
}
.el-scrollbar__thumb {
  background-color: rgba(0, 0, 0, .3)!important;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #e8d6ff!important;
}
.is-vertical {
    z-index: 999999!important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


<template>
  <div id="app">
    <transition name="fade">
    <loading v-if="!iscompleted" style="z-index: 9999999"></loading>
    </transition>
    <el-scrollbar v-if="iscompleted" ref="scrollbar" style="height: 100vh;width: 100%;">
      <nav-list></nav-list>
      <router-view></router-view>
      <page-footer class="footer"></page-footer>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import nav from './components/nav/nav.vue'
import pageFooter from './components/pageFooter/pageFooter.vue'
import loading from './components/loading/loading.vue'

@Component({
  components: {
    'nav-list': nav,
    'page-footer': pageFooter,
    loading
  }
})
export default class App extends Vue {
  iscompleted: boolean = false;

  mounted() {
    setTimeout(() => {
      if (document.readyState == "complete") {
        // 已经加载完毕的，那么就显示
        this.iscompleted = true
      } else {
        // 未加载完毕，就等在加载完毕
        window.onload = () => {
          this.iscompleted = true
        }
      }
    }, 5800);
    
  }
}
</script>
