import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mode: 1,
    about: {
      showMore: false,
      showVideo: false
    },
    imgList: []
  },
  mutations: {
    changeImgList(state, data) {

      state.imgList = data;
    }
  },
  actions: {

  }
})
