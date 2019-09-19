import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Timeline extends Vue {
  events: Event[] = [
    <Event>{
      title: "就讀中正大學資訊管理學系",
      displaySide: side.right
    },
    <Event>{
      title: "電算中心櫃台人員",
      displaySide: side.right
    },
    <Event>{
      title: "輔導中心網站維護人員",
      displaySide: side.right
    },
    <Event>{
      title: "鈦坦科技實習",
      description: "Software Engineer Internship",
      displaySide: side.left
    },
    <Event>{
      title: "畢業",
      displaySide: side.right
    },
    <Event>{
      title: "任職於鈦坦科技",
      description: "Product Developer",
      displaySide: side.left,
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

const side = {
  left: "left",
  right: "right"
};