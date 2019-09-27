<template>
  <div id="app">
    <!-- <div class="slide"><Cover/></div>
    <div class="slide"><Timeline /></div>-->
    <swiper :options="swiperOption">
      <swiper-slide>
        <Cover />
      </swiper-slide>
      <swiper-slide>
        <Timeline />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "./assets/style/swiper.css";
import Cover from "@/components/Cover/Cover.vue";
import Timeline from "@/components/Timeline/Timeline.vue";
import Introduction from "@/components/Introduction/Introduction.vue";

@Component({
  components: {
    Cover,
    Timeline,
    Introduction,
    swiper,
    swiperSlide
  }
})
export default class App extends Vue {
  swiperOption: object = {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1050,
    mousewheel: {
      releaseOnEdges: true
    },
    pagination: {
      paginationHide: true
    },
    keyboard: {
      enabled: true
    }
  };
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
