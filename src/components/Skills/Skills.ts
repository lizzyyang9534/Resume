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
  categories: Category[] = [
    <Category>{
      title: "Front end",
      isActive: true
    },
    <Category>{
      title: "Back end",
      isActive: false
    },
     <Category>{
       title: "Others",
       isActive: false
     }];

  swiperOption: object = {
    parallax: true,
    autoHeight: true,
    keyboard: {
      enabled: true
    },
    on: {
      slideChange: this.handleActiveSlide
    }
  };

  get swiper(): SwiperClass {
    return this.$refs.skillsSwiper.swiper;
  }

  handleActiveSlide() {
    this.categories[this.swiper.previousIndex].isActive = false;
    this.categories[this.swiper.activeIndex].isActive = true;
  }

  slideTo(index: number) {
    this.swiper.slideTo(index);
    this.handleActiveSlide();
  }
}
