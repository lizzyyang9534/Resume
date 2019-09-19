<template>
  <div class="history">
    <div class="timeline">
      <div class="line"></div>
      <div class="events">
        <div class="event" v-for="event in events" :key="event.title" :class="[event.displaySide, event.isActive ? 'active' : '']">
          <div class="title">{{event.title}}</div>
          <div class="description" v-if="event.description">{{event.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./History.ts">
</script>

<style lang="scss" scoped>
@import "./History.scss";
</style>
