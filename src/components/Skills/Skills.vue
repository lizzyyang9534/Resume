<template>
  <div>
    <div class="title">Skills</div>
    <div class="navigation">
      <div class="option" v-for="(category, index) in categories" :key="index" :class="{'active': category.isActive}" @click="slideTo(index)">
        {{category.title}}
      </div>
    </div>
    <div class="line"></div>
    <swiper class="slides" ref="skillsSwiper" :options="swiperOption">
      <swiper-slide>
        <div class="slide">
          <div class="subtitle">JS</div>
          <div class="skills">
            <div class="skill" data-swiper-parallax="-200" data-swiper-parallax-duration="400">
              <img src="../../assets/images/js.jpg" />
            </div>
            <div class="skill" data-swiper-parallax="-200" data-swiper-parallax-duration="400">
              <img src="../../assets/images/ts.png" />
            </div>
            <div class="skill" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
              <img src="../../assets/images/jquery.png" />
            </div>
            <div class="skill" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
              <img src="../../assets/images/vue.png" />
            </div>
            <div class="skill" data-swiper-parallax="-400" data-swiper-parallax-duration="800">
              <img src="../../assets/images/phaser.png" />
            </div>
          </div>
          <div class="subtitle">UI</div>
          <div class="skills">
            <div class="skill" data-swiper-parallax="-200" data-swiper-parallax-duration="1000">
              <img src="../../assets/images/css.jpg" />
            </div>
            <div class="skill" data-swiper-parallax="-200" data-swiper-parallax-duration="1000">
              <img src="../../assets/images/sass.png" />
            </div>
            <div class="skill" data-swiper-parallax="-300" data-swiper-parallax-duration="1100">
              <img src="../../assets/images/bootstrap.png" />
            </div>
            <div class="skill" data-swiper-parallax="-400" data-swiper-parallax-duration="1200">
              <img src="../../assets/images/semanticUI.png" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <div class="subtitle">Back End</div>
          <div class="skills">
            <div class="skill" data-swiper-parallax="-200" data-swiper-parallax-duration="600">
              <img src="../../assets/images/csharp.png" />
            </div>
            <div class="skill" data-swiper-parallax="-400" data-swiper-parallax-duration="800">
              <img src="../../assets/images/sql server.png" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <div class="subtitle">Others</div>
          <div class="skills">
            <div class="skill" data-swiper-parallax="-100" data-swiper-parallax-duration="200">.</div>
            <div class="skill" data-swiper-parallax="-100" data-swiper-parallax-duration="600">.</div>
          </div>
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
