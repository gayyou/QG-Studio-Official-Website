<style lang="scss" scoped>

</style>

<template>
  <div class="nav-first-header">
    <div class="nav-logo-container">
      <img src=""/>
    </div>
    <nav class="nav-list-container">
      <li class="nav-list" 
        v-for="(item, index) in firstNavList"
        :key="item"
        :data-type="index"
      >{{ item }}</li>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Provide } from 'vue-property-decorator'
import { NavList } from '../../utils/models/interface'

@Component({
  
})
export default class Nav extends Vue {
  firstNavList: Array<NavList> = [
    {
      value: '1',
      label: '2',
      children: ['123']
    }
  ]
}
</script>
