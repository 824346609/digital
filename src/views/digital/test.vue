<template>
  <div class="loop_contain">
    <navi />
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(val, index) in componentList" :key="index" class="swiper-slide">
          <component :is="val" :key="index" />
        </div>
      </div>
    </div>
    <div slot="pagination" class="swiper-pagination" />
  </div>
</template>
<script>
import Swiper from 'swiper'
import Navi from './components/navigation.vue'
// var componentList = {
//   componentOne: require("./index.vue").default,
//   componentTwo: require("./2.vue").default,
//   componentThree: require("./3.vue").default,
// };
export default {
  components: {
    componentOne: () => import('./index.vue'),
    componentTwo: () => import('./2.vue'),
    componentThree: () => import('./3.vue'),
    Navi
  },
  data() {
    return {
      componentList: [
        'componentOne',
        'componentTwo',
        'componentThree'
      ]
    }
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
}
</script>
<style>
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
  background-color: rgba(255, 255, 255, .5) !important;
}
.el-menu--popup {
  padding: 0px;
  background-color: rgba(255,255,255,.1);
  min-width:unset;
  width: 6rem;
}
</style>
