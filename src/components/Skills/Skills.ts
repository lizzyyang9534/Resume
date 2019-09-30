import { Component, Prop, Vue } from "vue-property-decorator";
import { swiper, swiperSlide } from "vue-awesome-swiper";

@Component({
  components: {
    swiper, swiperSlide
  }
})
export default class Skills extends Vue {
  swiperOption: object = {
    parallax: true,
    autoHeight: true,
    keyboard: {
      enabled: true
    }
  };
}
