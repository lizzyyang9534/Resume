import { Component, Prop, Vue } from "vue-property-decorator";
import { swiper, swiperSlide } from "vue-awesome-swiper";

@Component({
  components: {
    swiper,
    swiperSlide
  }
})
export default class Introduction extends Vue {
  swiperOption: object = {
    effect: "flip",
    grabCursor: true,
    loop: true,
    flipEffect: {
      slideShadows: false
    }
  };
}
