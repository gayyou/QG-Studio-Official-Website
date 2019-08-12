<style lang="scss" scoped>
.group-intro-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  height: 90vh;
  transition: 1.5s ease transform;
  transform: translateY(-90vh);
  overflow: hidden;

  .image {
    // width: 3.5rem;
    height: 3.5rem;
    margin-top: 1.2rem;
    margin-left: auto;
    margin-right: auto;

    img {
      width: 100%;
    }
  }

  .intro {
    display: block;
    width: 80%;
    text-align: start;
    margin: 0.4rem auto;
    font-size: 0.24rem;
    color: #fff;
  }

  .intro-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 22;
  }

  .float-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 11;

    .float-icons {
      position: absolute;
      transform: translate(0, 0) rotateZ(0);
    }

    .active0 {
      transform: translate(0rem, 0rem) rotateZ(360deg);
    }

    .active1 {
      transform: translate(0rem, 2rem) rotateZ(0deg);
    }
    
    .active2 {
      transform: translate(0rem, 4rem) rotateZ(39deg);
    }

    .active3 {
      transform: translate(0rem, 6rem) rotateZ(80deg);
    }

    .active4 {
      transform: translate(0rem, 7rem) rotateZ(90deg);
    }

    .active5 {
      transform: translate(2rem, 2rem) rotateZ(60deg);
    }

    .active6 {
      transform: translate(2rem, 4rem) rotateZ(440deg);
    }

    .active7 {
      transform: translate(2rem, 5rem) rotateZ(330deg);
    }

    .active10 {
      transform: translate(2rem, 7rem) rotateZ(270deg);
    }

    .active8 {
      transform: translate(3rem, 1rem) rotateZ(180deg);
    }

    .active9 {
      transform: translate(3rem, 3rem) rotateZ(40deg);
    }

    .active11 {
      transform: translate(3rem, 5rem) rotateZ(120deg);
    }

    .active12 {
      transform: translate(3rem, 7rem) rotateZ(270deg);
    }

    .active13 {
      transform: translate(5rem, 2rem) rotateZ(180deg);
    }

    .active14 {
      transform: translate(5rem, 4rem) rotateZ(40deg);
    }

    .active15 {
      transform: translate(5rem, 6rem) rotateZ(120deg);
    }

    .active16 {
      transform: translate(5rem, 7rem) rotateZ(270deg);
    }

    .active17 {
      transform: translate(7rem, 2rem) rotateZ(180deg);
    }

    .active18 {
      transform: translate(7rem, 4rem) rotateZ(40deg);
    }

    .active19 {
      transform: translate(7rem, 6rem) rotateZ(120deg);
    }

    .active20 {
      transform: translate(8rem, 7rem) rotateZ(270deg);
    }

    .active22 {
      transform: translate(9rem, 2rem) rotateZ(180deg);
    }

    .active23 {
      transform: translate(8rem, 4rem) rotateZ(40deg);
    }

    .active21 {
      transform: translate(9rem, 6rem) rotateZ(120deg);
    }

    .icon1 {
      width: .8rem;
      transition: 7s all linear;

      img {
        width: 100%;
      }
    }

    .icon2 {
      width: 1.4rem;
      transition: 8s all linear;

      img {
        width: 100%;
      }
    }

    .icon3 {
      width: 2rem;
      transition: 9s all linear;

      img {
        width: 100%;
      }
    }

    .icon4 {
      width: 2.4rem;
      transition: 10s all linear;

      img {
        width: 100%;
      }
    }
  }
}
.container-active {
  transform: translateY(0vh);
}
</style>

<template>
  <div class="group-intro-container" :style="'z-index: ' + zIndex + ';' + 'background: linear-gradient(to top right, ' + fromColor + ', ' + toColor + ');'">
    <div class="intro-layer">
      <div class="image" :style="'width: ' + width + 'rem'">
        <img :src="url" alt="">
      </div>
      <span class="intro">{{ intro }}</span>
    </div>
    <div class="float-layer">
      <div
        class="float-icons icon1"
        :class="'active' + num1"
      >
        <img :src="floatIconUrl" alt="">
      </div>
      <div
        class="float-icons icon2"
        :class="'active' + num2"
      >
        <img :src="floatIconUrl" alt="">
      </div>
      <div
        class="float-icons icon3"
        :class="'active' + num3"
      >
        <img :src="floatIconUrl" alt="">
      </div>
      <div
        class="float-icons icon4"
        :class="'active' + num4"
      >
        <img :src="floatIconUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

@Component
export default class List extends Vue {
  @Prop(Boolean)
  isActive: boolean;

  @Prop(Number)
  zIndex: number;

  @Prop(Number)
  width: number;

  @Prop(String)
  url: string;

  @Prop(String)
  intro: string;

  @Prop(String)
  floatIconUrl: string;

  @Prop(String)
  fromColor: string;

  @Prop(String)
  toColor: string;

  num1: number = 1;

  num2: number = 7;

  num3: number = 15;

  num4: number = 22

  timeoutID1: any = null;

  timeoutID2: any = null;

  timeoutID3: any = null;

  timeoutID4: any = null;

  activeCount: number = 23;

  mounted() {
    setTimeout(() => {
      let random1 = this.getRandomNumberByRange() % this.activeCount,
          random2 = this.getRandomNumberByRange() % this.activeCount,
          random3 = this.getRandomNumberByRange() % this.activeCount,
          random4 = this.getRandomNumberByRange() % this.activeCount;
      this.num1 = random1 == this.num1 ? (random1 + 1) % this.activeCount : random1;
      this.num2 = random2 == this.num2 ? (random2 + 1) % this.activeCount : random2;
      this.num3 = random3 == this.num3 ? (random3 + 1) % this.activeCount : random3;
      this.num4 = random4 == this.num4 ? (random4 + 1) % this.activeCount : random4;

      this.timeoutID1 = setInterval(() => {
        let random1 = this.getRandomNumberByRange() % this.activeCount;
        this.num1 = random1 == this.num1 ? (random1 + 1) % this.activeCount : random1;
      }, 7000)

      this.timeoutID2 = setInterval(() => {
        let random2 = this.getRandomNumberByRange() % this.activeCount;
        this.num2 = random2 == this.num2 ? (random2 + 1) % this.activeCount : random2;
      }, 8000)

      this.timeoutID2 = setInterval(() => {
        let random3 = this.getRandomNumberByRange() % this.activeCount;
        this.num3 = random3 == this.num3 ? (random3 + 1) % this.activeCount : random3;
      }, 9000)

      this.timeoutID2 = setInterval(() => {
        let random4 = this.getRandomNumberByRange() % this.activeCount;
        this.num4 = random4 == this.num4 ? (random4 + 1) % this.activeCount : random4;
      }, 10000)
    }, 10);

    
  }

  getRandomNumberByRange() {
    return Math.floor(Math.random() * (100))
  }

  destroy() {
    clearInterval(this.timeoutID1)
    clearInterval(this.timeoutID2)
    clearInterval(this.timeoutID3)
    clearInterval(this.timeoutID4)
  }

  @Watch('isActive')
  handleIsActvie(newVal) {
    if (newVal) {
      // (<any>this.$el).style.zIndex = 999;
      $((<any>this.$el)).addClass('container-active');
    } else {
      // (<any>this.$el).style.zIndex = 1;
      if ($((<any>this.$el)).hasClass('container-active')) {
        setTimeout(() => {
          // (<any>this.$el).style.zIndex = -100;
          $((<any>this.$el)).removeClass('container-active')
        }, 1500)
      }
    }
  }
}
</script>
