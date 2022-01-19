<template>
  <div class="loop_contain">
    <navi />
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(val, index) in componentList"
          :key="index"
        >
          <component :key="index" :is="val"></component>
        </div>
      </div>
    </div>
    <div slot="pagination" class="swiper-pagination" />
  </div>
</template>
<script>
import Navi from "../components/navigation.vue";
import Swiper from "swiper";

export default {
  components: {
    componentOne: () => import("./components/index.vue"),
    // componentTwo: () => import('./2.vue'),
    // componentThree: () => import('./3.vue'),
    Navi,
  },
  data() {
    return {
      activeIndex: "1",
      componentList: ["componentOne"],
    };
  },
};
</script>

<style lang="scss">
.el-menu--popup {
  padding: 0px;
  background-color: rgba(0, 0, 0, 0.1);
  min-width: unset;
  width: 6rem;
}
.loop_contain {
  height: 100%;
  width: 100%;
}
.swiper-pagination-bullet {
  display: block;
  width: 15px;
  height: 15px;
  margin: 3px 0;
}
.swiper-pagination {
  bottom: 2%;
  left: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.swiper-container {
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}
.swiper-pagination-bullet-active {
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.5) !important;
}
</style>
