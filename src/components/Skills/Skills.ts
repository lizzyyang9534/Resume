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
    }
  };
  get swiper(): SwiperClass {
    return this.$refs.skillsSwiper.swiper;
  }
  slideTo(index: number) {
    this.categories.forEach((x) => { x.isActive = false; });
    this.categories[index].isActive = true;
    this.swiper.slideTo(index);
  }
}
