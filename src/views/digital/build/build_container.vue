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
    componentOne: () => import('./index.vue'),
    componentTwo: () => import('./more.vue'),
    Navi
  },
  data() {
    return {
      activeIndex: "1",
      componentList: [
        "componentOne",
        "componentTwo"
      ],
    };
  },
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      var mySwiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        initialSlide: 0, // 设定初始化时slide的索引
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, // 这样写小圆点就有了
        direction: 'vertical', // 水平(horizontal)或垂直(vertical)
        watchOverflow: true, // 因为仅有1个slide，swiper无效
        scrollbar: {
          el: '.swiper-scrollbar' // 自动隐藏
        },
        preventClicks: false // 当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转。
      })
      mySwiper.on('slideChange', () => {
        // this.swiperContainer.activeIndex; 当前切换的组件索引index
      })
    }
  }
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
  overflow: hidden;
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
  background-color: rgba(1, 2, 6, .5) !important;
}
</style>
