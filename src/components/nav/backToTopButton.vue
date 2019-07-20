<style scoped>
.backtotop-button {
  margin: 2rem auto .5rem auto;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  -webkit-box-shadow: 1px 2px 6px 1px #c7c1c1;
  box-shadow: 1px 2px 6px 1px #c7c1c1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>


<template>
    <div class="backtotop-button" @click="move">
        <img src="../../assets/icons/up.png" alt>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({

})

export default class BackToTopButton extends Vue {
  move() {
    let refs = <any>this.$root.$children[0].$refs['scrollbar'];
    refs.wrap.scrollTop = 0;
  }
}
</script>
