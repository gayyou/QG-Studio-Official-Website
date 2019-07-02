<style lang="scss" scoped>
.copyright-container {
  position: relative;
  width: 100%;
  margin-top: 0.4rem;
  padding-bottom: 0.6rem;

  .title {
    font-size: 0.36rem;
    color: #2a2a2a;
  }

  .copyright-list-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }
}

.copyright-container::after {
  content: "";
  display: block;
  clear: both;
}
</style>

<template>
  <div class="copyright-container">
    <!-- <layer></layer> -->
    <span class="title">软件著作权</span>
    <div class="copyright-list-container">
      <list
        v-for="(item, index) in list"
        :key="index + 1"
        :data-index="index"
        :url="item.url"
        :name="item.name"
      ></list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import list from './list/list.vue'
import layer from './layer/layer.vue'

@Component({
  components: {
    list,
    layer
  }
})
export default class Software extends Vue {
  list: Array<any> = [
    {
      url: require('@/assets/images/honors/software/1.png'),
      name: '订单集群打印系统V1.0'
    },
    {
      url: require('@/assets/images/honors/software/2.png'),
      name: '康复训练及评估平台V1.0'
    },
    {
      url: require('@/assets/images/honors/software/3.png'),
      name: '康复训练及评估平台移动管理系统V1.0'
    },
    {
      url: require('@/assets/images/honors/software/4.jpg'),
      name: '微型打印控制系统V1.0'
    },
    {
      url: require('@/assets/images/honors/software/5.jpg'),
      name: '移动订单管理及打印系统V1.0'
    },
    {
      url: require('@/assets/images/honors/software/6.png'),
      name: '智能急救头盔APP软件V1.0'
    },
    {
      url: require('@/assets/images/honors/software/7.png'),
      name: '智能急救头盔系统V1.0'
    }
  ]
}
</script>
