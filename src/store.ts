import Vue from "vue";
import Vuex from "vuex";
import SwiperClass from "swiper";

Vue.use(Vuex);

export const actionName = {
  initSwiper: "initSwiper"
};

export default new Vuex.Store({
  state: {
    swiper: null
  },
  mutations: {
    [actionName.initSwiper](state, swiper: SwiperClass) {
      state.swiper = swiper;
    }
  },
  actions: {
    [actionName.initSwiper](context, swiper: SwiperClass) {
      context.commit(actionName.initSwiper, swiper);
    }
  }
});
