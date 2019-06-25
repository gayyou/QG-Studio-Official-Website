<template>
    <main>
        <div class="mask-container">
            123
        </div>
    </main>
</template>

<style scoped>
main {
   
    background-color: rgba(42, 42, 42, 0.32);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.mask-container {
    width: 12.8rem;
    height: 4rem;
    position: fixed;
    top: 1rem;
    left:50%;
    margin-left: -6.4rem;
    background-color: #fff;
    
}

</style>

<script lang="ts">
import Vue from 'vue'
import { Provide } from 'vue-property-decorator'

export default class Mask extends Vue {
  
}
</script>
