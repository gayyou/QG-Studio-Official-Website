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
                    <div class="card-img-container">
                    
                    <img src="../../assets/images/column/characteristic/camp.jpg"  />
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
                    <div class="introduce-container">这是内容</div>
                    </div>
                </div>
                </div>
                <!-- 毕业照 -->
            </section>
            <h1 class="second-header" id="importantEvent">QG大事件</h1>
            <section class="part-2">
                <div class="part-2-left">
                    <div class="card-2" v-for="item in partLeftData" :key="item.title">
                        <div class="card-2-img-container">
                            <img :src="item.imgList[0].src"   />
                            
                            <div v-if="item.imgList.length > 1">   
                                 <button class="zoomButton" @click="openImportantEventMask(item.imgList)">
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
                            <img :src="item.imgList[0].src"  />
                            <div v-if="item.imgList.length > 1">   
                                 <button class="zoomButton" @click="openImportantEventMask(item.imgList)">
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
        </main>
        <footer class="footer">
            <p>QG十五年，从未停步</p>
            <backToTopee-button></backToTopee-button>
        </footer>
        <el-dialog :visible.sync="showMask" width="11rem" top="1rem">
            <el-carousel
                trigger="click"
                class="carousel"
                indicator-position="none"
                :autoplay="false"
                height="6.7rem"
                style="overflow: hidden;"
            >
                <el-carousel-item v-for="item in nowImgList" :key="item.time" class="carousel-item">
                    <div class="carousel-img-container">
                        <img :src="item.src" />
                    </div>
                    <p class="carousel-time">{{item.title}}</p>
                </el-carousel-item>
            </el-carousel>
        </el-dialog>
    </div>
</template>



<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import BackToTopButton from "../nav/backToTopButton.vue";

@Component({
  components: {
    "backToTopee-button": BackToTopButton
  }
})
export default class column extends Vue {
    showMask: Boolean = false;
    
    
    nowImgList: Array<Object> = [];
    campImgList: Array<Object> = [
        {
            src: require("../../assets/images/column/camp/2016.jpg"),
            title: "2016年暑期训练营"
        },
        {
            src: require("../../assets/images/column/camp/2017.jpg"),
            title: "2017年暑期训练营"
        },
        {
            src: require("../../assets/images/column/camp/2018.jpg"),
            title: "2018年暑期训练营"
        },
        {
            src: require("../../assets/images/column/camp/2019.jpg"),
            title: "2019年暑期训练营"
        }
    ];
    healthyImgList: Array<Object> = [];
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
    importantEventData: Array<Object> = [
        {
            imgList: [
                { 
                    src: require("../../assets/images/column/importantevent/工作室成立.png"),
                    title: '工作室成立'
                }
            ],
            title: '工作室成立',
            introduce: "致力于培养更多品学兼优、专业知识扎实、能独挡一面的创新型人才，于2005年创立了大学生科技创新团队“QG工作室”，至今已有14个年头。初心：对于这个团队，我一直坚持一个梦想，就是要把团队打造成为国内顶尖的大学生科技创新团队。能够代表广东工业大学，代表广东省，站在全国大学生科技竞赛的舞台上展示工大学子的实力和风采！"
        }, 
        {
            imgList: [
                { 
                    src:  require("../../assets/images/column/importantevent/首次出征.png"),
                    title: '首次出征'
                }
            ],
            title: '首次出师，失败的尝试',
            introduce: "团队第一次参赛：作品在比赛前出现了故障，无法工作。结果可想而知，3个月团队的努力以失败告终。出师不利，铩羽而归，士气很低落，一度想放弃。我告诉学生，失败不可怕，可怕的是认为自己不行。从哪跌倒就从哪爬起来。重新振作，总结原因。制定一系列有效的措施和方法。"
        }, 
        {
            imgList: [
                { 
                    src:  require("../../assets/images/column/importantevent/国赛一等奖/1.jpg"),
                    title: '第十二届“挑战杯”全国大学生竞赛终审决赛'
                }, { 
                    src:  require("../../assets/images/column/importantevent/国赛一等奖/2.jpg"),
                    title: '第十二届“挑战杯”全国大学生竞赛终审决赛'
                }, { 
                    src:  require("../../assets/images/column/importantevent/国赛一等奖/3.jpg"),
                    title: '第十二届“挑战杯”全国大学生竞赛终审决赛'
                }, { 
                    src:  require("../../assets/images/column/importantevent/国赛一等奖/4.jpg"),
                    title: '第十二届“挑战杯”全国大学生竞赛终审决赛'
                }
            ],
            title: '首次突破',
            introduce: '渐渐地，略有收获，不断进步，小奖项、大奖项……大满贯！2011年10月，梦想终于实现，工作室研发成果经过层层筛选，代表广东省参加第十二届“挑战杯”全国大学生竞赛终审决赛。不负众望，为广工大首次获得了“挑战杯”国赛“一等奖”'
        }, 
        {
            imgList: [
                { 
                    src:  require("../../assets/images/column/importantevent/国赛特等奖/1.jpg"),
                    title: '国赛特等奖'
                },{ 
                    src:  require("../../assets/images/column/importantevent/国赛特等奖/2.jpg"),
                    title: '国赛特等奖'
                },{ 
                    src:  require("../../assets/images/column/importantevent/国赛特等奖/3.jpg"),
                    title: '国赛特等奖'
                },{ 
                    src:  require("../../assets/images/column/importantevent/国赛特等奖/4.jpg"),
                    title: '国赛特等奖'
                },{ 
                    src:  require("../../assets/images/column/importantevent/国赛特等奖/5.jpg"),
                    title: '国赛特等奖'
                },{ 
                    src:  require("../../assets/images/column/importantevent/国赛特等奖/6.jpg"),
                    title: '国赛特等奖'
                },{ 
                    src:  require("../../assets/images/column/importantevent/国赛特等奖/7.jpg"),
                    title: '国赛特等奖'
                },
            ],
            title: '第二次重要突破',
            introduce: "2015年7月，第十四届“挑战杯”全国大学生课外学术科技作品竞赛，“智慧城市”专项赛决赛，工作室研发的科技作品，从全国一千多件科技作品脱颖而出，决赛在香港科技大学举行。团队十几位成员，齐心协力，多方向协同创新云系统开发、UI设计、移动APP、嵌入式系统白天开发，晚上讨论，没日没夜的工作。决赛所有的材料、现场答辩都全英文要求。答辩PPT改版了上百次。英文讲稿改稿几十版。现场改稿，脱稿演讲精益求精的工匠精神，追求做最好的自己！"
        }, 
        {
            imgList: [
                { 
                    src:  require("../../assets/images/column/importantevent//2018.8.jpg"),
                    title: 'QG工作室”获颁“大学生小平科技创新团队”荣誉称号'
                }
            ],
            title: '第三次重要突破',
            introduce: "邓小平同志诞辰114周年之际，第十一届中国青少年科技创新奖颁奖大会于8月24日在人民大会堂举行。“ QG工作室”获颁“大学生小平科技创新团队”荣誉称号。中共中央政治局委员、国务院副总理孙春兰出席并讲话，为获奖代表颁奖。该称号以邓小平同志命名，由共青团中央、全国青联、全国学联、全国少工委、中国青少年科技创新奖励基金共同设立, 旨在面向全国大学生遴选在学术研究、科技竞赛、成果转化等方面取得突出成绩或显示较大潜力的大学生科技创新团队给予支持。全国共有50个大学生创新团队获此项殊荣。（省内仅广工与华工两个团队）。"
        }, 
        {
            imgList: [
                {
                    src: require("../../assets/images/column/importantevent/知名人士访问工作室/1.jpg"),
                    title: '广东省政协主席王荣、学校校长陈新听取团队介绍'
                }, {
                    src: require("../../assets/images/column/importantevent/知名人士访问工作室/2.jpg"),
                    title: '加拿大工程院院士、IEEE Fellow、国家千人特聘教授张齐军参观团队'
                }, {
                    src: require("../../assets/images/column/importantevent/知名人士访问工作室/3.jpg"),
                    title: '教育部原副部长鲁昕、学校校长陈新听取工作室介绍'
                }, {
                    src: require("../../assets/images/column/importantevent/国外友人/1.jpg"),
                    title: '外国友人参观团队'
                }, {
                    src: require("../../assets/images/column/importantevent/国外友人/2.jpg"),
                    title: '外国友人参观团队'
                }, {
                    src: require("../../assets/images/column/importantevent/国外友人/3.jpg"),
                    title: '外国友人参观团队'
                }, {
                    src: require("../../assets/images/column/importantevent/国外友人/4.jpg"),
                    title: '外国友人参观团队'
                }
            ],
            title: '知名人士、外国友人访问工作室',
            introduce: '渐渐地，我们工作室有了外界的关注。广东省政协主席王荣、教育部原副部长鲁昕、国家千人特聘教授张齐军先后来我们工作室进行参观。除此之外，也有国外友人造访了工作室'
        }, 
        {
            imgList: [
                {
                    src: require("../../assets/images/column/importantevent/新闻报道/1.jpg"),
                    title: '工作室接受广东卫视采访'
                }, {
                    src: require("../../assets/images/column/importantevent/新闻报道/2.jpg"),
                    title: '工作室接受广东卫视采访'
                }, {
                    src: require("../../assets/images/column/importantevent/新闻报道/3.jpg"),
                    title: '工作室接受广东卫视采访'
                }, {
                    src: require("../../assets/images/column/importantevent/新闻报道/4.jpg"),
                    title: '工作室接受广东卫视采访'
                }, {
                    src: require("../../assets/images/column/importantevent/新闻报道/5.jpg"),
                    title: '工作室接受广东卫视采访'
                }
            ],
            title: '新闻报道工作室',
            introduce: "后来，不仅仅只有知名人士来访问工作室，还有电视台采访我们工作室，作品受邀参加全国大学生创新创业年会。工作室所获成果受到了广东卫视、广州日报等主流媒体的关注和报道。接受了广东卫视专访,介绍了研发成果，采访内容在《广东新闻联播》中播出。作品还获得了广东省教育厅推荐，代表广东省参加第十届全国大学生创新创业年会。"
        }, 
        {
            imgList: [ 
                { 
                    src:  require("../../assets/images/column/importantevent/五四青年/五四青年.png"),
                    title: '工作室获得五四青年提名奖'
                }, {
                    src: require("../../assets/images/column/importantevent/五四青年/奖状.jpg"),
                    title: '工作室获得五四青年提名奖'
                }
            ],
            title: '获得五四青年提名奖',
            introduce: '2019年，我们团队获得了第二十一届“广东青年五四奖章”提名奖。在广东工业大学召开的纪念五四运动100周年大会暨第七次学生代表大会和第一次研究生代表大会上接受表彰。'
        }, 
        {
            imgList: [
                { 
                    src:  require("../../assets/images/column/camp/2016.jpg"),
                    title: '首次出征'
                }
            ],
            title: '我们仍在路上',
            introduce: 'We are still on the road...'
        }
    ];
    
    get partRightData() {
        let data = [];
        this.importantEventData.forEach((element, index) => {
            if (index % 2 !== 0)  {
                data.push(element);
            }
        });
        return data;
    }

    get partLeftData() {
        let data = [];
        this.importantEventData.forEach((element, index) => {
            if (index % 2 === 0)  {
                data.push(element);
            }
        });
        return data;
    }
    mouted() {}
    openMask(index: number) {
        const imgType = [
            "campImgList",
            "techImgList",
            "healthyImgList",
            "graduationImgList",
        ];
        this.nowImgList = this[imgType[index]];
        this.showMask = true;
    }
    openImportantEventMask(imgList: Array<Object>) {
        this.nowImgList = imgList;
        this.showMask = true;
    }
}
</script>


<style lang="scss" scoped>
.carousel {
  height: auto;
  &-item {
    height: auto;
    width: 100%;
    text-align: center;
  }
  &-img-container {
    text-align: center;
    position: relative;
    img {
      height: 5.6rem;
      width: 8.4rem;
    }
   
  }
  &-time {
    margin: 0.42rem auto 0 auto;
    color: #2a2a2a;
    font-size: 0.3rem;
  }
}

.first-header {
  border: 0.02rem solid #e5e5e5;
  padding: 0.15rem 0;
  a {
    color: #2a2a2a;
    font-size: 0.23rem;
    padding: 0 0.2rem;
  }
}

.second-header {
  margin: 0.96rem auto 1.08rem auto;
}

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

.second-header {
  color: #2a2a2a;
  font-size: 0.96rem;
}

.footer {
  color: #2a2a2a;
  font-size: 0.48rem;
  letter-spacing: 0.03rem;
  p {
    margin-top: 0.49rem;
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
    height: 40.5rem;
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


