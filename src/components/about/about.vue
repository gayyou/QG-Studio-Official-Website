<style lang="scss" scoped>
.about-container {
  position: relative;
}
</style>

<template>
  <div class="about-container" id="about">
    <!-- <circleSvg></circleSvg> -->
    <list
      v-for="(item, index) in aboutList"
      :key="item.id"
      :data-index="index"
      :message="item.message"
      :title="item.title"
      :url="item.url"
      :height="item.height"
      :position="item.position"
    ></list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Provide, Prop } from 'vue-property-decorator'
import list from './list/list.vue'
import { AboutList } from '@/utils/models/interface'
import circleSvg from './circle/circle.vue'

@Component({
  components: {
    list,
    circleSvg
  }
})
export default class Nav extends Vue {
  aboutList: Array<AboutList> = [
    {
      url: require('@/assets/images/about/1.jpg'),
      title: 'QG工作室',
      message: [
        'QG 科技创新团队由团队负责人计算机学院副院长谢光强副教授于2005年创建并担任指导老师，',
        '从团队成立之初就设立了远大的目标，力争将团队建设为在业界一定有影响力、具有国际化视野、',
        '具有高水平研究成果，能培养出成长为科技拓路人、行业带头人、产业领军人的高水平大学生科技创新团队。',
        '团队发展得到了学校大力支持和帮助，团队学生科研创新、团队协作的能力得到很大提升，',
        '团队在人工智能、嵌入式智能系统等多个方向上展开研究和多领域的融合创新应用，取得了丰硕的成果，',
        '被评为广东工业大学“标志性获奖团队”。 '
      ],
      id: '1',
      height: 145,
      position: 'right bottom'
    },
    {
      url: require('@/assets/images/about/3.jpg'),
      title: '小平科技创新团队',
      message: [
        '团队被授予以邓小平同志命名的大学生“小平科技创新团队”称号，并于2018年',
        '在北京人民大会堂接受颁奖。该项称号是由共青团中央、全国青联、全国学联、',
        '全国少工委、中国青少年科技创新奖励基金颁发（全国共50支，广东省仅2支）。',
        '旨在面向全国大学生遴选50个在学术研究、科技竞赛、成果转化等方面取得突出成绩',
        '或显示较大潜力的大学生科技创新团队给予表彰支持'
      ],
      id: '3',
      height: 180,
      position: 'center bottom'
    },
    {
      url: require('@/assets/images/about/8.jpg'),
      title: '第二十一届“广东青年五四奖章”提名奖',
      message: [
        '2019年，我们团队获得了第二十一届“广东青年五四奖章”提名奖',
        '在广东工业大学召开的纪念五四运动100周年大会暨第七次学生代表大会和第一次研究生代表大会上接受表彰。'
      ],
      id: '3',
      height: 180,
      position: 'center top'
    },
    {
      url: require('@/assets/images/about/2.png'),
      title: '标志性奖项',
      message: [
        '团队曾获得第十四届“挑战杯”全国大学生课外学术科技作品竞赛“智慧城市”专项赛决赛“特等奖”',
        '（全国共3项），，第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛“一等奖”。',
        '承担大学生创新创业训练计划(国家级)、广东省大学生科技创新培育专项资金(重点)等各类科技项目50项',
        '申请专利和软件著作权等成果30余项，获得各类科技竞赛180余项，其中省级以上奖项120项。',
        '团队成员代表广东省获得第十四届“挑战杯”全国大学生课外学术科技作品竞赛',
        '“智慧城市”专项赛决赛“特等奖”（全国共三项）',
        '第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛“一等奖”！'
        // '团队所获成果收到了广东卫视、广州日报、新快报等主流媒体的广泛关注和报道，',
        // '接受了广东卫视专访并介绍了项目的主要内容和成果，采访内容在《广东新闻联播》中头条播出。',
        // '作品还获得了广东省教育厅推荐，代表广东省参加第十届全国大学生创新创业年会。'
      ],
      id: '2',
      height: 150,
      position: 'center center'
    },
    {
      url: require('@/assets/images/about/7.png'),
      title: '社会影响力',
      message: [
        '团队所获成果收到了广东卫视、广州日报、新快报等主流媒体的广泛关注和报道，',
        '接受了广东卫视专访并介绍了项目的主要内容和成果，采访内容在《广东新闻联播》中头条播出。',
        '作品还获得了广东省教育厅推荐，代表广东省参加第十届全国大学生创新创业年会。'
      ],
      id: '2',
      height: 180,
      position: 'center top'
    },
    {
      url: require('@/assets/images/about/9.jpg'),
      title: '嘉宾访问工作室',
      message: [
        '团队多次向来自国内各界领导、嘉宾、专家、国际友人展示了所研发的成果，受到了高度赞赏和肯定。',
        '如教育部原副部长鲁昕、团中央书记处书记傅振邦莅临“智慧城市”专项赛决赛参赛项目展区、',
        '广东省政协主席王荣等都曾亲临创新团队指导和交流，获得一致好评。'
      ],
      id: '2',
      height: 140,
      position: 'center bottom'
    },
    // {
    //   url: require('@/assets/images/about/4.jpg'),
    //   title: '成员校内标志性奖项',
    //   message: [
    //     'QG 科技创新团队心系中国梦的奋进，经过十几年的建设，形成了自己独特的文化和传承，',
    //     '把团队精神的培养上升到与学术与科研能力并重，团队具有很强的凝聚力和战斗力，',
    //     '培养了大批品学兼优、专业知识扎实、能独当一面的创新型人才，团队毕业生曾获得',
    //     '“广东工业大学十佳优秀毕业生”，“广东工业大学十佳创新之星”称号，',
    //   ],
    //   id: '2',
    //   height: 100,
    //   position: 'center center'
    // },
    {
      url: require('@/assets/images/about/5.png'),
      title: '成员毕业后去向',
      message: [
        '培养的学生，毕业后大部分进入了华为、阿里巴巴、百度、腾讯等知名IT公司及企事业单位工作，',
        '成为了核心技术骨干，获得用人单位的好评！另有部分毕业生获“推免”留校深造或到海内外高校',
        '继续攻读硕（博）士，或在毕业后进行了创业，获得了初步的成功！曾获得：',
        '1. “百度最佳个人”（该奖项颁发为一年一度，颁发给百度优秀杰出员工，名额每年五个）',
        '2. “腾讯优秀员工”（获得人数约占腾讯员工数的5%）',
        '3. “腾讯微信事业群绩效突出者”（获得人数约占微信事业群的10%）'
      ],
      id: '2',
      height: 190,
      position: 'center top'
    },
  ]
}
</script>
