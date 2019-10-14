<template>
  <div id="app">
    <swiper :options="swiperOption" ref="mainSwiper">
      <swiper-slide>
        <Cover />
      </swiper-slide>
      <swiper-slide>
        <Introduction />
      </swiper-slide>
      <swiper-slide>
        <Timeline />
      </swiper-slide>
      <swiper-slide>
        <Skills />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import SwiperClass from "swiper";
import "./assets/style/swiper.css";
import Cover from "@/components/Cover/Cover.vue";
import Timeline from "@/components/Timeline/Timeline.vue";
import Introduction from "@/components/Introduction/Introduction.vue";
import Skills from "@/components/Skills/Skills.vue";
import { actionName } from "./store";

@Component({
  components: {
    swiper,
    swiperSlide,
    Cover,
    Timeline,
    Introduction,
    Skills
  }
})
export default class App extends Vue {
  @Action(actionName.initSwiper) initSwiper: (swiper: SwiperClass) => void;
  swiperOption: object = {
    direction: "vertical",
    slidesPerView: 1,
    speed: 1050,
    autoHeight: true,
    mousewheel: {
      releaseOnEdges: true
    },
    keyboard: {
      enabled: true
    }
  };

  mounted() {
    this.initSwiper((this.$refs.mainSwiper as swiper).swiper);
  }
}
</script>

<style lang="scss">
@import "./assets/style/_reset.scss";
body {
  overflow: hidden;
}
// .slide {
//   width: 100%;
//   height: 100vh;
// }
</style>
