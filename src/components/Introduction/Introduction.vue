<template>
  <div class="introduction">
    <div class="photo">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="../../assets/images/photo.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <div class="back">Lizzy</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="circle-polka-dot"></div>
    <div class="content">

    </div>
  </div>
</template>

<script lang="ts" src="./Introduction.ts">
</script>

<style lang="scss" scoped>
@import "./Introduction.scss";
</style>
