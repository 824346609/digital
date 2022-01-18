<template>
  <div>
    <div class="loop_contain">
      <navi />
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <!-- <div
            class="swiper-slide"
            v-for="(val, index) in componentList"
            :key="index"
          >
            <component :key="index" :is="val"></component>
          </div> -->
        </div>
      </div>
      <div slot="pagination" class="swiper-pagination" />
    </div>
  </div>
</template>
<script>
import Navi from '../components/navigation.vue'

export default {
  components: { Navi },
  data() {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style>
.el-menu--popup {
  padding: 0px;
  background-color: rgba(255, 255, 255, 0.1);
  min-width: unset;
}
</style>
