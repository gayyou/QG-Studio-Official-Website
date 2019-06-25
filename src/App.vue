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
</style>


<template>
  <div id="app">
    <el-scrollbar style="height: 100vh;width: 100%;">
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

@Component({
  components: {
    'nav-list': nav,
    'page-footer': pageFooter
  }
})
export default class App extends Vue {
  mouted() {
    // document.getElementsByClassName('el-scrollbar__wrap')[0].style.overflowX = 'hidden';
  }
}
</script>
