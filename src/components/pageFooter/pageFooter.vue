<style lang="scss" scoped>
.page-footer {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 0.96rem;
  background-color: #2a2a2a;

  span {
    display: block;
    width: 100%;
    height: 0.96rem;
    line-height: 0.96rem;
    font-size: 0.24rem;
    color: #fff;
  }
}
</style>

<template>
  <div class="page-footer">
    <span>© 2019 QG Studio All Rights Reserved</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Provide } from 'vue-property-decorator'
import { NavList } from '../../utils/models/interface'

@Component({
  
})
export default class PageFooter extends Vue {

}
</script>
