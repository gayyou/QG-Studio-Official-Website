<style lang="scss" scoped>
%clear-both::after {
  content: "";
  display: block;
  clear: both;
}
%flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.we-container {
  @extend %clear-both;
  position: relative;
  width: 100%;
}
</style>

<template>
  <div class="we-container">
    <carouseMap></carouseMap>
    <counselor></counselor>
    <group></group>
    <honor></honor>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import carouseMap from './carouselMap/carouselMap.vue'
import counselor from './counselor/counselor.vue'
import group from './group/group.vue'
import honor from './honor/honor.vue'

@Component({
  components: {
    carouseMap,
    counselor,
    group,
    honor
  }
})
export default class We extends Vue{
  
}
</script>
