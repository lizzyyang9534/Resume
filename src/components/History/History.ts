import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class History extends Vue {
  events: Event[] = [
    <Event>{
      title: "就讀中正大學資訊管理學系",
      displaySide: "right"
    },
    <Event>{
      title: "電算中心櫃台人員",
      displaySide: "right"
    },
    <Event>{
      title: "輔導中心網站維護人員",
      displaySide: "right"
    },
    <Event>{
      title: "鈦坦科技實習",
      description: "Software Engineer Internship",
      displaySide: "left"
    },
    <Event>{
      title: "畢業",
      displaySide: "right"
    },
    <Event>{
      title: "任職於鈦坦科技",
      description: "Product Developer",
      displaySide: "left",
      isActive: true
    }
  ];
}

class Event {
  title: string;
  description: string;
  displaySide: string;
  isActive: boolean;
}
