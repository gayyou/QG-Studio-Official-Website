<template>
  <section class="part-2">
    <div class="part-2-left">
      <div class="card-2" v-for="item in partLeftData" :key="item.title">
        <div class="card-2-img-container">
          <img :src="item.imgList[0].src" />

          <div v-if="item.imgList.length > 1">
            <button class="zoomButton" @click='commitImgList(item.imgList)'>
              <img src="../../assets/icons/zoom.png" alt />
            </button>
          </div>
        </div>
        <div class="card-2-title-container">
          <div>{{item.title}}</div>
        </div>
        <div class="part-2-content-container">
          <p>{{item.introduce}}</p>
        </div>
      </div>
    </div>

    <!-- 时间轴 -->
    <div class="timeline">
      <div class="timeline-start"></div>
      <div class="timeline-line"></div>
      <div class="timeline-arrow">
        <img src="../../assets/icons/up.png" alt />
      </div>
    </div>

    <div class="part-2-right">
      <div class="card-2" v-for="item in partRightData" :key="item.title">
        <div class="card-2-img-container">
          <img :src="item.imgList[0].src" />
          <div v-if="item.imgList.length > 1">
            <button class="zoomButton" @click="commitImgList(item.imgList)">
              <img src="../../assets/icons/zoom.png" alt />
            </button>
          </div>
        </div>
        <div class="card-2-title-container">
          <div>{{item.title}}</div>
        </div>
        <div class="part-2-content-container">
          <p>{{item.introduce}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
export default class ImportantEvent extends Vue {
  importantEventData: Array<Object> = [
    {
      imgList: [
        {
          src: require("../../assets/images/column/importantevent/工作室成立.png"),
          title: "工作室成立"
        }
      ],
      title: "工作室成立",
      introduce:
        "致力于培养更多品学兼优、专业知识扎实、能独挡一面的创新型人才，于2005年创立了大学生科技创新团队“QG工作室”，至今已有14个年头。初心：对于这个团队，我一直坚持一个梦想，就是要把团队打造成为国内顶尖的大学生科技创新团队。能够代表广东工业大学，代表广东省，站在全国大学生科技竞赛的舞台上展示工大学子的实力和风采！"
    },
    {
      imgList: [
        {
          src: require("../../assets/images/column/importantevent/首次出征.png"),
          title: "首次出征"
        }
      ],
      title: "首次出师，失败的尝试",
      introduce:
        "团队第一次参赛：作品在比赛前出现了故障，无法工作。结果可想而知，3个月团队的努力以失败告终。出师不利，铩羽而归，士气很低落，一度想放弃。我告诉学生，失败不可怕，可怕的是认为自己不行。从哪跌倒就从哪爬起来。重新振作，总结原因。制定一系列有效的措施和方法。"
    },
    {
      imgList: [
        {
          src: require("../../assets/images/column/importantevent/16.png"),
          title: "为所有的比赛做出最充分的准备"
        },
        {
          src: require("../../assets/images/column/importantevent/17.png"),
          title: "为所有的比赛做出最充分的准备"
        },
        {
          src: require("../../assets/images/column/importantevent/18.jpg"),
          title: "为所有的比赛做出最充分的准备"
        },
        {
          src: require("../../assets/images/column/importantevent/19.jpg"),
          title: "为所有的比赛做出最充分的准备"
        },
        {
          src: require("../../assets/images/column/importantevent/21.jpg"),
          title: "为所有的比赛做出最充分的准备"
        }
      ],
      title: "做事情精益求精",
      introduce:
        "面对比赛，我们不断对作品进行完善，数十个日夜颠倒的煎熬与刻苦，数不清多少次的申报材料修改，数不尽多少滴辛苦的汗水落在实验桌上。我们在每次比赛前都会进行多次的预答辩，提出了很多评委可能会问的问题……"
    },
    {
      imgList: [
        {
          src: require("../../assets/images/column/importantevent/国赛一等奖/4.jpg"),
          title: "第十二届“挑战杯”全国大学生竞赛终审决赛"
        },
        {
          src: require("../../assets/images/column/importantevent/国赛一等奖/1.jpg"),
          title: "第十二届“挑战杯”全国大学生竞赛终审决赛"
        },
        {
          src: require("../../assets/images/column/importantevent/国赛一等奖/2.jpg"),
          title: "第十二届“挑战杯”全国大学生竞赛终审决赛"
        },
        {
          src: require("../../assets/images/column/importantevent/国赛一等奖/3.jpg"),
          title: "第十二届“挑战杯”全国大学生竞赛终审决赛"
        }
      ],
      title: "首次突破",
      introduce:
        "渐渐地，略有收获，不断进步，小奖项、大奖项……大满贯！2011年10月，梦想终于实现，工作室研发成果经过层层筛选，代表广东省参加第十二届“挑战杯”全国大学生竞赛终审决赛。不负众望，为广工大首次获得了“挑战杯”国赛“一等奖”"
    },
    {
      imgList: [
        {
          src: require("../../assets/images/column/importantevent/国赛特等奖/1.jpg"),
          title: "国赛特等奖"
        },
        {
          src: require("../../assets/images/column/importantevent/国赛特等奖/2.jpg"),
          title: "国赛特等奖"
        },
        {
          src: require("../../assets/images/column/importantevent/国赛特等奖/3.jpg"),
          title: "国赛特等奖"
        },
        {
          src: require("../../assets/images/column/importantevent/国赛特等奖/4.jpg"),
          title: "国赛特等奖"
        },
        {
          src: require("../../assets/images/column/importantevent/国赛特等奖/5.jpg"),
          title: "国赛特等奖"
        },
        {
          src: require("../../assets/images/column/importantevent/国赛特等奖/6.jpg"),
          title: "国赛特等奖"
        },
        {
          src: require("../../assets/images/column/importantevent/国赛特等奖/7.jpg"),
          title: "国赛特等奖"
        }
      ],
      title: "第二次重要突破",
      introduce:
        "2015年7月，第十四届“挑战杯”全国大学生课外学术科技作品竞赛，“智慧城市”专项赛决赛，工作室研发的科技作品，从全国一千多件科技作品脱颖而出，决赛在香港科技大学举行。团队十几位成员，齐心协力，多方向协同创新云系统开发、UI设计、移动APP、嵌入式系统白天开发，晚上讨论，没日没夜的工作。决赛所有的材料、现场答辩都全英文要求。答辩PPT改版了上百次。英文讲稿改稿几十版。现场改稿，脱稿演讲精益求精的工匠精神，追求做最好的自己！"
    },
    {
      imgList: [
        {
          src: require("../../assets/images/column/importantevent/2018.8.jpg"),
          title: "QG工作室”获颁“大学生小平科技创新团队”荣誉称号"
        },
        {
          src: require("../../assets/images/column/importantevent/13.jpg"),
          title: "QG工作室”获颁“大学生小平科技创新团队”荣誉称号"
        },
        {
          src: require("../../assets/images/column/importantevent/14.png"),
          title: "QG工作室”获颁“大学生小平科技创新团队”荣誉称号"
        }
      ],
      title: "第三次重要突破",
      introduce:
        "邓小平同志诞辰114周年之际，第十一届中国青少年科技创新奖颁奖大会于8月24日在人民大会堂举行。“ QG工作室”获颁“大学生小平科技创新团队”荣誉称号。中共中央政治局委员、国务院副总理孙春兰出席并讲话，为获奖代表颁奖。该称号以邓小平同志命名，由共青团中央、全国青联、全国学联、全国少工委、中国青少年科技创新奖励基金共同设立, 旨在面向全国大学生遴选在学术研究、科技竞赛、成果转化等方面取得突出成绩或显示较大潜力的大学生科技创新团队给予支持。全国共有50个大学生创新团队获此项殊荣。（省内仅广工与华工两个团队）。"
    },
    {
      imgList: [
        {
          src: require("../../assets/images/column/importantevent/知名人士访问工作室/1.jpg"),
          title: "广东省政协主席王荣、学校校长陈新听取团队介绍"
        },
        {
          src: require("../../assets/images/column/importantevent/知名人士访问工作室/2.jpg"),
          title: "加拿大工程院院士、IEEE Fellow、国家千人特聘教授张齐军参观团队"
        },
        {
          src: require("../../assets/images/column/importantevent/知名人士访问工作室/3.jpg"),
          title: "教育部原副部长鲁昕、学校校长陈新听取工作室介绍"
        },
        {
          src: require("../../assets/images/column/importantevent/国外友人/1.jpg"),
          title: "外国友人参观团队"
        },
        {
          src: require("../../assets/images/column/importantevent/国外友人/2.jpg"),
          title: "外国友人参观团队"
        },
        {
          src: require("../../assets/images/column/importantevent/国外友人/3.jpg"),
          title: "外国友人参观团队"
        },
        {
          src: require("../../assets/images/column/importantevent/国外友人/4.jpg"),
          title: "外国友人参观团队"
        }
      ],
      title: "知名人士、外国友人访问工作室",
      introduce:
        "渐渐地，我们工作室有了外界的关注。广东省政协主席王荣、教育部原副部长鲁昕、国家千人特聘教授张齐军先后来我们工作室进行参观。除此之外，也有国外友人造访了工作室"
    },
    {
      imgList: [
        {
          src: require("../../assets/images/column/importantevent/新闻报道/1.jpg"),
          title: "工作室接受广东卫视采访"
        },
        {
          src: require("../../assets/images/column/importantevent/新闻报道/2.jpg"),
          title: "工作室接受广东卫视采访"
        },
        {
          src: require("../../assets/images/column/importantevent/新闻报道/3.jpg"),
          title: "工作室接受广东卫视采访"
        },
        {
          src: require("../../assets/images/column/importantevent/新闻报道/4.jpg"),
          title: "工作室接受南方卫视采访"
        },
        {
          src: require("../../assets/images/column/importantevent/新闻报道/5.jpg"),
          title: "工作室接受南方卫视采访"
        }
      ],
      title: "新闻报道工作室",
      introduce:
        "后来，不仅仅只有知名人士来访问工作室，还有电视台采访我们工作室，作品受邀参加全国大学生创新创业年会。工作室所获成果受到了广东卫视、广州日报等主流媒体的关注和报道。接受了广东卫视专访,介绍了研发成果，采访内容在《广东新闻联播》中播出。作品还获得了广东省教育厅推荐，代表广东省参加第十届全国大学生创新创业年会。"
    },
    {
      imgList: [
        {
          src: require("../../assets/images/column/importantevent/五四青年/五四青年.png"),
          title: "工作室获得五四青年提名奖"
        },
        {
          src: require("../../assets/images/column/importantevent/五四青年/奖状.jpg"),
          title: "工作室获得五四青年提名奖"
        }
      ],
      title: "获得五四青年提名奖",
      introduce:
        "2019年，我们团队获得了第二十一届“广东青年五四奖章”提名奖。在广东工业大学召开的纪念五四运动100周年大会暨第七次学生代表大会和第一次研究生代表大会上接受表彰。"
    },
    {
      imgList: [
        {
          src: require("../../assets/images/column/importantevent/23.jpg"),
          title: "首次出征"
        }
      ],
      title: "我们仍在路上",
      introduce: "We are still on the way..."
    }
  ];
  commitImgList(data) {
    
    this.$store.commit('changeImgList', data)
  }
  get partRightData() {
    let data = [];
    this.importantEventData.forEach((element, index) => {
      if (index % 2 !== 0) {
        data.push(element);
      }
    });
    return data;
  }

  get partLeftData() {
    let data = [];
    this.importantEventData.forEach((element, index) => {
      if (index % 2 === 0) {
        data.push(element);
      }
    });
    return data;
  }
  
}
</script>


<style lang="scss" scoped>
.second-header {
  margin: 0.96rem auto 1.08rem auto;
   color: #2a2a2a;
  font-size: 0.96rem;
}
.part-2 {
  display: flex;
  justify-content: center;
  height: auto;
  &-left {
    margin-top: 1.5rem;
    .card-2 {
      margin-bottom: 2rem;
    }
  }
  &-right {
    margin-top: 2.5rem;
    .card-2 {
      margin-bottom: 3rem;
    }
  }
  &-content-container {
    height: auto;
    overflow: hidden;
    padding: 0 0.3rem 0.2rem 0.3rem;
    p {
      font-size: 0.2rem;
      color: #2a2a2a;
      text-align: left;
      width: 100%;
    }
  }
}

.card-2 {
  box-shadow: 0 0.06rem 0.12rem 0 #ded5d5;
  width: 7.2rem;
  overflow: hidden;
  &-img-container {
    position: relative;

    img {
      width: 7.2rem;
      height: 3.6rem;
    }
  }
  &-title-container {
    width: 100%;
    div {
      width: fit-content;
      padding: 0 0.2rem;
      height: 0.48rem;
      background-color: #5a0bc3;
      margin: 0.16rem 0;
      box-shadow: 0 0.05rem 0.06rem 0 #b5b0b0;
      color: #fff;
      font-size: 0.24rem;
      line-height: 0.48rem;
      overflow: auto;
    }
  }
}

/* 时间轴 */
.timeline {
  height: 100%;
  margin: 0 0.5rem;
  &-start {
    height: 0.36rem;
    width: 0.36rem;
    background-color: #5b08c3;
    border-radius: 50%;
  }
  &-line {
    /* 在这里修改时间轴的高度 */
    height: 45.5rem;
    background-color: #707070;
    width: 0.04rem;
    margin: 0 auto;
  }
  &-arrow {
    img {
      height: 0.36rem;
      width: 0.36rem;
      transform: rotateZ(180deg);
      margin-top: -1px;
    }
  }
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