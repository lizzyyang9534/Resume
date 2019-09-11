<template>
  <div id="app">
    <Cover />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Cover from "@/components/Cover/Cover.vue";

@Component({
  components: {
    Cover
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
