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

.to-Top {

}
</style>

<template>
  <div class="we-container" id="advisor">
    <carouseMap id="moment"></carouseMap>
    <counselor id="advisor"></counselor>
    <group id="direction"></group>
    <honor id="honors"></honor>
    <!-- <toTop class="to-Top"></toTop> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import toTop from '../nav/backToTopButton.vue'
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
    honor,
    toTop
  }
})
export default class We extends Vue{
  mounted() {
    // let search = window.location.search.slice(1);
    // switch(search) {
    //   case 'advisor': {
    //     let t = $('#advisor').offset() || { top: 0 };
    //     this.$root.$children[0].$refs['scrollbar'].wrap.scrollTop = t.top
    //     break;
    //   }

    //   case 'direction': {
    //     let t = $('#direction').offset() || { top: 0 };
    //     $('.el-scrollbar').scrollTop(t.top);
    //     // console.log(this.$root.$children[0].$refs['scrollbar'].wrap.scrollTop)
    //     this.$root.$children[0].$refs['scrollbar'].wrap.scrollTop = t.top
    //     // this.$refs['scrollbar'].wrap.scrollTop = t.top
    //     // console.log(t)
    //     break;
    //   }

    //   default: {

    //   }
    // }
  }
}
</script>
