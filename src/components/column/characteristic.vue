<template>
     <section class="part-1">
        <div class="card">
        <div class="card-left">
            <div class="content-container">
            <div class="no">01</div>
            <h2>新生训练营</h2>
            <div
                class="introduce-container"
            >QG工作室训练营“程序设计及创新实践能力提升班”于每年三月正式开始招生，QG工作室面向全校大一招募大约120名有兴趣、有热诚、有基础的新生，我们采取大组+小组的训练营培训，旨在提高各位新生的程序设计及创新实践能力，在训练营中有连续五周的大组培训，主要培训新生们学习数据结构并实践相关算法，小组培训主要针对各个方向的基础入门内容对新生进行培训。</div>
            </div>
        </div>
        <div class="card-right">
            <div class="card-img-container">
            
            <img src="../../assets/images/column/camp/2018.1.jpg"  />
            <button class="zoomButton" @click="openMask(0)">
                <img src="../../assets/icons/zoom.png" alt />
            </button>
            </div>
        </div>
        </div>
        <div class="card">
        <div class="card-left">
            <div class="card-img-container">
            <img src="../../assets/images/column/characteristic/tech.jpg" alt />
            <button class="zoomButton" @click="openMask(1)">
                <img src="../../assets/icons/zoom.png" alt />
            </button>
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
            <div class="card-img-container">
            <img src="../../assets/images/column/characteristic/activity.jpg" alt />
            <button class="zoomButton" @click="openMask(2)">
                <img src="../../assets/icons/zoom.png" alt />
            </button>
            </div>
        </div>
        </div>
        <!-- 毕业照 -->
        <div class="card">
        <div class="card-left">
            <div class="card-img-container">
            <img src="../../assets/images/column/characteristic/graduation.jpg" alt />
            <button class="zoomButton" @click="openMask(3)">
                <img src="../../assets/icons/zoom.png" alt />
            </button>
            </div>
        </div>
        <div class="card-right">
            <div class="content-container">
            <div class="no">04</div>
            <h2>毕业生合照</h2>
            <div class="introduce-container">
                QG 科技创新团队心系中国梦的奋进，经过十几年的建设，形成了自己独特的文化和传承，把团队精神的培养上升到与学术与科研能力并重，团队具有很强的凝聚力和战斗力，培养了大批品学兼优、专业知识扎实、能独当一面的创新型人才。团队每年毕业时会进行合照留影。
            </div>
            </div>
        </div>
        </div>
        <!-- 毕业照 -->
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";


@Component({
  components: {
      
  }
})

export default class Characteristic extends Vue{
    nowImgList: Array<Object> = [];
    campImgList: Array<Object> = [
        {
            src: require("../../assets/images/column/camp/2017.2.jpg"),
            title: "2017年新生训练营宣讲会"
        },
        {
            src: require("../../assets/images/column/camp/2017.1.jpg"),
            title: "2017年新生训练营结营"
        },
        {
            src: require("../../assets/images/column/camp/2018.1.jpg"),
            title: "2018年新生训练营结营"
        },
        // {
        //     src: require("../../assets/images/column/camp/2019.jpg"),
        //     title: "2019年暑期训练营"
        // }
    ];
    healthyImgList: Array<Object> = [
        {
            src: require("../../assets/images/column/kl/2.jpg"),
            title: "早上六点打篮球"
        },
        {
            src: require("../../assets/images/column/kl/1.jpg"),
            title: "室内康乐看电影"
        },
        {
            src: require("../../assets/images/column/kl/3.jpg"),
            title: "傍晚跑内环"
        },
        {
            src: require("../../assets/images/column/kl/4.jpg"),
            title: "室内桌游"
        },
        {
            src: require("../../assets/images/column/kl/5.jpg"),
            title: "撕名牌"
        },
        {
            src: require("../../assets/images/column/kl/6.jpg"),
            title: "QG丁俊晖集合地"
        },
        {
            src: require("../../assets/images/column/kl/7.jpg"),
            title: "早上六点绝命足球"
        },
    ];
    techImgList: Array<Object> = [
        {
            src: require("../../assets/images/column/tech/1.jpg"),
            title: "视觉传达与设计分享"
        },
        {
            src: require("../../assets/images/column/tech/2.jpg"),
            title: "浅谈大数据架构"
        },
        {
            src: require("../../assets/images/column/tech/3.jpg"),
            title: "线程池"
        },
        {
            src: require("../../assets/images/column/tech/4.jpg"),
            title: "交互设计是玄学吗？"
        },
        {
            src: require("../../assets/images/column/tech/5.jpg"),
            title: "安卓那些事"
        },
        {
            src: require("../../assets/images/column/tech/6.jpg"),
            title: "深度学习在学什么"
        },
        {
            src: require("../../assets/images/column/tech/7.jpg"),
            title: "浏览器的渲染引擎是如何工作的"
        }
    ];
    graduationImgList: Array<Object> = [
        {
            src: require("../../assets/images/column/graduation/2008.png"),
            title: "QG 2008届毕业生合照"
        },
        {
            src: require("../../assets/images/column/graduation/2009.png"),
            title: "QG 2009届毕业生合照"
        },
        {
            src: require("../../assets/images/column/graduation/2010.png"),
            title: "QG 2010届毕业生合照"
        },
        {
            src: require("../../assets/images/column/graduation/2011.jpg"),
            title: "QG 2011届毕业生合照"
        },
        {
            src: require("../../assets/images/column/graduation/2012.jpg"),
            title: "QG 2012届毕业生合照"
        },
        {
            src: require("../../assets/images/column/graduation/2013.jpg"),
            title: "QG 2013届毕业生合照"
        },
        {
            src: require("../../assets/images/column/graduation/2014.jpg"),
            title: "QG 2014届毕业生合照"
        },
        {
            src: require("../../assets/images/column/graduation/2016.jpg"),
            title: "QG 2016届毕业生合照"
        },
        {
            src: require("../../assets/images/column/graduation/2017.jpg"),
            title: "QG 2017届毕业生合照"
        },
        {
            src: require("../../assets/images/column/graduation/2018.jpg"),
            title: "QG 2018届毕业生合照"
        },
        {
            src: require("../../assets/images/column/graduation/2019.jpg"),
            title: "QG 2019届毕业生合照"
        }
    ];
    commitImgList(data) {
    }
    openMask(index: number) {
        const imgType = [
        "campImgList",
        "techImgList",
        "healthyImgList",
        "graduationImgList"
        ];
        this.$store.commit('changeImgList', this[imgType[index]]);
    } 
}
</script>


<style lang="scss" scoped>

.card {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1.94rem;
  
  &-left {
    margin-right: 0.54rem;
  }
  &-right {
    margin-left: 0.54rem;
  }
  &-img-container {
    margin-top: 0.48rem;
    position: relative;
    img {
      width: 8rem;
      height: 4.9rem;
      box-shadow: 0 0.05rem 0.06rem 0 #b5b0b0;
    }
  }
  
}


.content-container {
  text-align: left;
  h2 {
    color: #2a2a2a;
    font-size: 0.48rem;
    text-align: left;
    font-weight: 500;
    line-height: 2em;
  }
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
.zoomButton {
  position: absolute;
  top: 0.16rem;
  right: 0.16rem;
  height: 0.64rem;
  width: 0.64rem;
  background: #fff;
  border-radius: 50%;
  img {
    height: 0.32rem;
    width: 0.32rem;
    box-shadow: none;
  }
}

</style>
