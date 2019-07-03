<template>
  <div>
    <main>
      <h1 class="second-header" id="characteristic">QG特色</h1>
      <section class="part-1">
        <div class="card">
          <div class="card-left">
            <div class="content-container">
              <div class="no">01</div>
              <h2>暑期训练营</h2>
              <div
                class="introduce-container"
              >QG工作室训练营“程序设计及创新实践能力提升班”于每年三月正式开始招生，QG工作室面向全校大一招募大约120名有兴趣、有热诚、有基础的新生，我们采取大组+小组的训练营培训，旨在提高各位新生的程序设计及创新实践能力，在训练营中有连续五周的大组培训，主要培训新生们学习数据结构并实践相关算法，小组培训主要针对各个方向的基础入门内容对新生进行培训。</div>
            </div> 
          </div>
          <div class="card-right">
            <div class="img-container">
               <img src="../../assets/images/column/characteristic/camp.jpg" alt>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-left">
            <div class="img-container">
               <img src="../../assets/images/column/characteristic/tech.jpg" alt>
            </div>
          </div>
          <div class="card-right">
            <div class="content-container">
              <div class="no">02</div>
              <h2>技术交流会</h2>
              <div
                class="introduce-container"
              >技术交流会是QG工作室多年以来的传统，每周一次30分钟～1小时的技术交流会，由来自工作室不同小组的学员担任讲师，分享自己方向上的一些知识体系，拓宽团队成员的视野。</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-left">
            <div class="content-container">
              <div class="no">03</div>
              <h2>康乐活动</h2>
              <div
                class="introduce-container"
              >工作室坚持贯彻“全面发展”的理念，在繁忙的学习的过程中每周组织一到两次康乐活动，既锻炼了身体，又加深了我们团队的凝聚力。</div>
            </div>
          </div>
          <div class="card-right">
            <div class="img-container">
               <img src="../../assets/images/column/characteristic/activity.jpg" alt>
            </div>
          </div>
        </div>
      </section>
      <h1 class="second-header" id="importantEvent">QG大事件</h1>
      <section class="part-2">
        <div class="part-2-left">
          <div class="card-2">
            <div class="card-2-img-container">
              <img src="../../assets/images/column/importantevent/2005.9.jpg" alt>
            </div>
            <div class="time-container">
              2005年9月
            </div>
            <div class="part-2-content-container">
              <p>QG工作室成立</p>
            </div>
          </div>
          <div class="card-2">
            <div class="card-2-img-container">
              <img src="../../assets/images/column/importantevent/2015.7.jpg" alt>
            </div>
            <div class="time-container">
              2015年7月
            </div>
            <div class="part-2-content-container">
              <p>为广工大首次获得了第十四届“挑战杯”国赛“特等奖”</p>
            </div>
          </div>
          <!-- <div class="card-2">
            <div class="card-2-img-container">
              <img src="../../assets/images/2.jpg" alt>
            </div>
            <div class="time-container">
              2005.X.X
            </div>
            <div class="part-2-content-container">
              <p>这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容</p>
            </div>
          </div> -->
        </div>
        <div class="timeline-container">
          <div class="start"></div>
          <div class="line"></div>
          <div class="arrow">
        <img src="../../assets/icons/up.png" alt>

          </div>
        </div >
        <div class="part-2-right">
          <div class="card-2">
            <div class="card-2-img-container">
              <img src="../../assets/images/column/importantevent/2011.10.jpg" alt>
            </div>
            <div class="time-container">
              2011年10月
            </div>
            <div class="part-2-content-container">
              <p>为广工大首次获得了第十二届“挑战杯”国赛“一等奖”</p>
            </div>
          </div>
          <div class="card-2">
            <div class="card-2-img-container">
              <img src="../../assets/images/column/importantevent/2018.8.jpg" alt>
            </div>
            <div class="time-container">
              2018年8月
            </div>
            <div class="part-2-content-container">
              <p>颁获“大学生小平科技创新团队”荣誉称号</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <p>QG十五年，从未停步</p>
        <backToTopee-button>
          
        </backToTopee-button>
    </footer>
  </div>
</template>





<style  scoped>
.first-header {
  border: 0.02rem solid #e5e5e5;
  padding: 0.15rem 0;

}
.first-header a {
  color: #2a2a2a;
  font-size: 0.23rem;
  padding: 0 0.2rem;
}
.second-header {
  margin: .96rem auto 1.08rem auto;
}
.card {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1.94rem;
}
.card-left {
  margin-right: 0.54rem;
}
.card-right {
  margin-left: 0.54rem;
  margin-top: .48rem;
}
.top {
  margin-top: .48rem;

}
.img-container img {
  width: 8rem;
  height: 4.5rem;
}
.content-container {
  text-align: left;
}
.content-container h2 {
  color: #2a2a2a;
  font-size: 0.48rem;
  text-align: left;
  font-weight: 500;
  line-height: 2em;
}
.introduce-container {
  font-size: 0.24rem;
  color: #707070;
  width: 6.72rem;
  line-height: 1.8em;
}

.no {
  line-height: 1em;
  font-size: 0.96rem;
  color: transparent;
  -webkit-text-stroke: 0.03rem #b6aac5;
}
.second-header {
  color: #2a2a2a;
  font-size: 0.96rem;
}

.footer {
  color: #2a2a2a;
  font-size: 0.48rem;
  letter-spacing: 0.03rem;
}
.footer p {
  margin-top: .49rem;
}
.backtotop-button {
  margin: 2rem auto .5rem auto;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 50%;
  box-shadow: 1px 2px 6px 1px #c7c1c1;
}



.part-2 {

  display: flex;
  justify-content: center;
  height: auto;
}
.timeline-container {
  height: 100%;
  margin: 0 .5rem;

}
.start {
  height: .36rem;
  width: .36rem;
  background-color: #5b08c3;
  border-radius: 50%;
  
}
.line {
  height: 17rem;
  background-color: #707070;
  width: .04rem;
  margin: 0 auto;

}

.arrow img{
  height: .36rem;
  width: .36rem;
  transform: rotateZ(180deg);
  margin-top: -1px;
}

.card-2 {
  box-shadow: 0 .06rem .12rem 0 #ded5d5;
  width: 7.2rem;
  height: 4.8rem;
  overflow: hidden;
}
.card-2-img-container img{
  width: 7.2rem;
  height: 2.8rem;
}
.time-container {
  width: 2rem;
  height: .48rem;
  background-color: #5a0bc3;
  margin: .16rem 0;
  box-shadow: 0 .05rem .06rem 0 #b5b0b0;
  color: #fff;
  font-size: .24rem;
  line-height: .48rem;
}
.part-2-content-container {
  padding-top: 0;
  height: 1rem;
  overflow: hidden;
  padding: 0 .3rem;
}
.part-2-content-container p {
  font-size: .32rem;
  color: #2a2a2a;
  text-align: left;
  width: 100%;  
}
.part-2-left {
  margin-top: 1.5rem;
}
.part-2-left .card-2 {
  margin-bottom: 2rem;
}
.part-2-right {
  margin-top: 2.5rem;
}
.part-2-right .card-2 {
  margin-bottom: 3rem;

}
</style>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BackToTopButton from '../nav/backToTopButton.vue'

@Component({
  components: {
    'backToTopee-button': BackToTopButton
  }
})

export default class column extends Vue {
  mouted() {
  }
}
</script>
