import SwiperClass from "swiper";
import { Component, Prop, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component({
  components: {

  }
})
export default class Cover extends Vue {
  @State(state => state.swiper) swiper: SwiperClass;
  slideNext() {
    this.swiper.slideNext();
  }
}
