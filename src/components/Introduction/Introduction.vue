<template>
  <div>
    <div class="photo">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="../../assets/images/photo.jpg" alt />
        </swiper-slide>
        <swiper-slide>
            <div class="back"></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" src="./Introduction.ts">
</script>

<style lang="scss" scoped>
@import "./Introduction.scss";
</style>
