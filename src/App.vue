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
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


<template>
  <div id="app">
    <nav-list></nav-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import nav from './components/nav/nav.vue'

@Component({
  components: {
    'nav-list': nav
  }
})
export default class App extends Vue {

}
</script>
