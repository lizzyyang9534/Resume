<template>
  <div>
    <div class="title">Skills.</div>
    <div class="navigation">
      <div class="option active">Front end</div>
      <div class="option">Back end</div>
      <div class="option">Others</div>
    </div>
    <div class="line"></div>
    <swiper class="slides" :options="swiperOption">
      <swiper-slide>
        <div class="slide front-end">
          <div class="subtitle">JS</div>
          <div class="skills">
            <div class="skill" data-swiper-parallax="-200" data-swiper-parallax-duration="200">
              <img src="../../assets/images/js.jpg" alt />
            </div>
            <div class="skill" data-swiper-parallax="-200" data-swiper-parallax-duration="200">
              <img src="../../assets/images/ts.png" alt />
            </div>
            <div class="skill" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
              <img src="../../assets/images/jquery.png" alt />
            </div>
            <div class="skill" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
              <img src="../../assets/images/vue.png" alt />
            </div>
            <div class="skill" data-swiper-parallax="-400" data-swiper-parallax-duration="800">
              <img src="../../assets/images/phaser.png" alt />
            </div>
          </div>
          <div class="subtitle">UI</div>
          <div class="skills">
            <div class="skill" data-swiper-parallax="-200" data-swiper-parallax-duration="1000">
              <img src="../../assets/images/css.jpg" alt />
            </div>
            <div class="skill" data-swiper-parallax="-200" data-swiper-parallax-duration="1000">
              <img src="../../assets/images/sass.png" alt />
            </div>
            <div class="skill" data-swiper-parallax="-300" data-swiper-parallax-duration="1100">
              <img src="../../assets/images/bootstrap.png" alt />
            </div>
            <div class="skill" data-swiper-parallax="-400" data-swiper-parallax-duration="1200">
              <img src="../../assets/images/semanticUI.png" alt />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide back-end">
          <div class="subtitle">Back End</div>
          <div class="skill" data-swiper-parallax="-100" data-swiper-parallax-duration="200">.</div>
          <div class="skill" data-swiper-parallax="-100" data-swiper-parallax-duration="600">.</div>
          <div class="skill" data-swiper-parallax="-100" data-swiper-parallax-duration="600">.</div>
          <div class="skill" data-swiper-parallax="-100" data-swiper-parallax-duration="800">.</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide others">
          <div class="subtitle">Others</div>
          <div class="skill" data-swiper-parallax="-100" data-swiper-parallax-duration="200">.</div>
          <div class="skill" data-swiper-parallax="-100" data-swiper-parallax-duration="600">.</div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="square-yellow"></div>
  </div>
</template>

<script lang="ts" src="./Skills.ts">
</script>

<style lang="scss" scoped>
@import "./Skills.scss";
</style>
