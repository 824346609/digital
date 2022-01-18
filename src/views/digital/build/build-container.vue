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
import Navi from "../components/navigation.vue";

export default {
  components: { Navi },
  data() {
    return {
      activeIndex: "1",
    };
  },
  mounted() {
    // 页面开始加载时修改font-size
    var html = document.getElementsByTagName("html")[0];
    var oWidth =
      document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = (oWidth / 6000) * 100 + "px";
    console.log("oWidth:", oWidth);
    console.log("rem:", html.style.fontSize);
    console.log(this.$store.state);
  },
};
</script>

<style lang="scss">
.build {
  .el-submenu__title {
    background-color: black;
  }
  .el-submenu__title:hover {
    background-color: rgba(0, 0, 0, 1);
  }
  .el-col {
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-menu {
    border-right: none !important;
    background-color: rgba(0, 0, 0, 1);
    padding: 0 20px;
    width: 100%;
  }
  .menu {
    width: 25%;
    display: flex;
    align-items: center;
  }
  .el-submenu__title {
    padding: 0px !important;
  }
  .el-submenu {
    display: block !important;
  }
  .el-submenu [class^="el-icon-"] {
    margin-left: -5px;
    text-align: unset;
  }
  .is-active {
    color: unset;
    background-color: unset;
  }
  .el-submenu .el-submenu__title {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  }
}
// .el-menu--popup {
//   padding: 0px;
//   background-color: rgba(255, 255, 255, 0.1);
//   min-width: unset;
//   width: 6rem;
// }
// .el-menu--horizontal .el-submenu .el-submenu__title {
//   background-color: white !important;
//   color: black;
// }
</style>
