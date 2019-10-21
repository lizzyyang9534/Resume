import SwiperClass from "swiper";
import { Component, Prop, Vue } from "vue-property-decorator";
import { swiper, swiperSlide } from "vue-awesome-swiper";

class Category {
  title: string;
  isActive: boolean;
}

@Component({
  components: {
    swiper,
    swiperSlide
  }
})
export default class Skills extends Vue {
  showNavigation: boolean = false;
  categories: Category[] = [
    <Category>{
      title: "Front end",
      isActive: true
    },
    <Category>{
      title: "Back end",
      isActive: false
    }];

  swiperOption: object = {
    parallax: true,
    autoHeight: true,
    keyboard: {
      enabled: true
    },
    on: {
      slideChange: this.handleActiveSlide,
      resize: this.handleResize
    }
  };

  get swiper(): SwiperClass {
    return (this.$refs.skillsSwiper as swiper).swiper;
  }

  mounted() {
    this.handleResize();
  }

  handleActiveSlide() {
    this.categories[this.swiper.previousIndex].isActive = false;
    this.categories[this.swiper.activeIndex].isActive = true;
  }

  handleResize() {
    if (this.swiper.width <= 945) {
      this.showNavigation = true;
    }
  }

  slideTo(index: number) {
    this.swiper.slideTo(index);
    this.handleActiveSlide();
  }
}
