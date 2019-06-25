<template>
  <div>
    <main>
      <div class="item">
        <div class="item-img">
          <img src="../../assets/images/2.jpg" alt="">
        </div>
        <h1 class="item-title">
          智能睡眠监护枕头
        </h1>
        <p>
          这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介
        </p>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../assets/images/2.jpg" alt="">
        </div>
        <h1 class="item-title">
          “守护鲸鱼”计划游戏
        </h1>
        <p>
          这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介
          
        </p>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../assets/images/2.jpg" alt="">
        </div>
        <h1 class="item-title">
          面向前端的创客教育平台
        </h1>
        <p>
          这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介
          
        </p>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../assets/images/2.jpg" alt="">
        </div>
        <h1 class="item-title">
          “单词消消乐”游戏
        </h1>
        <p>
          asdlkasjdlkasjlkdjaklsdjkl
        </p>
      </div>
      <div class="item item-2">
        <div class="item-img">
          <img src="../../assets/images/2.jpg" alt="">
        </div>
        <h1 class="item-title">
          “单词消消乐”游戏
        </h1>
        <p>
          asdlkasjdlkasjlkdjaklsdjkl
        </p>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../assets/images/2.jpg" alt="">
        </div>
        <h1 class="item-title">
          “单词消消乐”游戏
        </h1>
        <p>
          asdlkasjdlkasjlkdjaklsdjkl
        </p>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../assets/images/2.jpg" alt="">
        </div>
        <h1 class="item-title">
          “单词消消乐”游戏
        </h1>
        <p>
          asdlkasjdlkasjlkdjaklsdjkl
        </p>
      </div>
      <div class="item item-3">
        <div class="item-img">
          <img src="../../assets/images/2.jpg" alt="">
        </div>
        <h1 class="item-title">
          “单词消消乐”游戏
        </h1>
        <p>
          asdlkasjdlkasjlkdjaklsdjkl
        </p>
      </div>
      <div class="item">
        <div class="item-img">
          <img src="../../assets/images/2.jpg" alt="">
        </div>
        <h1 class="item-title">
          “单词消消乐”游戏
        </h1>
        <p>
          asdlkasjdlkasjlkdjaklsdjkl
        </p>
      </div>
      <div class="item item-4">
        <div class="content-container">
          <h1 class="item-title">
            矿工帽
          </h1>
          <p>
            asdlkasjdlkasjlkdjaklsdjkl
          </p>
        </div>
        <div class="item-img">
          <img src="../../assets/images/2.jpg" alt="">
        </div>
      </div>
      
      
    </main>
    <footer class="footer">
      <div class="backtotop-button">
        <img src="../../assets/icons/up.png" alt>
      </div>
    </footer>
    <!-- <project-mask></project-mask> -->
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Mask from './mask.vue'

@Component({
  components: {
    'project-mask': Mask
  }
})
export default class Projects extends Vue {
  mouted() {
    // document.getElementsByClassName('el-scrollbar__wrap')[0].style.overflowX = 'hidden';
  }
}
</script>



<style lang='css' scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item {
  height: 6.4rem;
  width: 3.6rem;
  box-shadow: 0 .06rem .12rem 0 #ded5d5;
  text-align: left;
  margin: .24rem .24rem

}
.item-img img {
  height: 2rem;
  width: 100%;
}
.item-title {
  padding: .26rem;
  font-size: .24rem;
  padding-bottom: .1rem;
  font-weight: 500;
  color: #2a2a2a;
}
.item p {
  padding: 0 .26rem ;
  padding-top: 0;
  font-size: .2rem;
  color: #707070;
  overflow: hidden;
  height: 3.4rem;
}

.item-2 {
  width: 7.68rem;

}
.item-3 {
  width: 11.76rem;
}
.item-4 {
  width: 15.84rem;
  display: flex; 
}
.item-4 .content-container {
  flex: 1;
}
.item-4 .item-img  img{
  width: 7.64rem;
  height: 6.4rem;
}

.backtotop-button {
  margin: 2rem auto .5rem auto;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  box-shadow: 1px 2px 6px 1px #c7c1c1;
    line-height: 0.85rem;

}

</style>


