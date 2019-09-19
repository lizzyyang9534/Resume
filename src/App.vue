<template>
  <div id="app">
    <div class="slide"><Cover/></div>
    <div class="slide"><Timeline /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Cover from "@/components/Cover/Cover.vue";
import Timeline from "@/components/Timeline/Timeline.vue";

@Component({
  components: {
    Cover, Timeline
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/style/_reset.scss";
.slide {
  width: 100%;
  height: 100vh;
}
</style>
