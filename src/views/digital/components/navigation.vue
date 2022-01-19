<template>
  <!-- <div  :class="[{'navi':this.$route.name =='test'}]" v-if="device!=='mobile'"> -->
  <div v-if="device !== 'mobile'" :class="this.$route.name">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      @close="handleClose"
    >
      <el-menu-item index="0" class="logoBox"
        ><div :class="this.$route.name + '-logo'"
      /></el-menu-item>
      <el-submenu index="1">
        <template slot="title" class="sub">集团概况</template>
        <el-menu-item
          v-for="(user, i) in listSub"
          :key="i"
          :index="`1-${user.id}`"
          :class="`${user.class}`"
          >{{ user.name }}</el-menu-item
        >
        <!-- <el-menu-item index="1-1" id="test">集团简介</el-menu-item>
        <el-menu-item index="1-2">领导班子</el-menu-item>
        <el-menu-item index="1-3">组织架构</el-menu-item>
        <el-menu-item index="1-4">荣誉资质</el-menu-item>
        <el-menu-item index="1-5">领导关怀</el-menu-item>
        <el-menu-item index="1-6">领导大事记</el-menu-item> -->
        <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
          <el-menu-item index="1-4-2">选项2</el-menu-item>
          <el-menu-item index="1-4-3">选项3</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="2">新闻中心</el-menu-item>
      <el-menu-item index="3" @click="building">企业党建</el-menu-item>
      <el-menu-item index="4">招贤纳士</el-menu-item>
      <el-menu-item index="5">核心业务</el-menu-item>
      <el-menu-item index="6">联系我们</el-menu-item>
      <el-menu-item index="7">搜索</el-menu-item>
    </el-menu>
  </div>
  <div :class="this.$route.name" v-else>
    <mNavi />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ResizeMixin from "../mixin/ResizeHandler";
import mNavi from "./mNavigation.vue";

export default {
  name: "Navi",
  components: { mNavi },
  mixins: [ResizeMixin],
  data() {
    return {
      activeIndex: "1",
      listSub: [
        { id: 1, name: "集团简介", class: this.$route.name + '-one' },
        { id: 2, name: "领导班子", class: this.$route.name + "-two" },
        { id: 3, name: "组织架构", class: this.$route.name + "-three" },
        { id: 4, name: "荣誉资质", class: this.$route.name + "-four" },
        { id: 5, name: "领导关怀", class: this.$route.name + "-five" },
        { id: 6, name: "领导大事记", class: this.$route.name + "-six" },
      ],
    };
  },
  computed: {
    ...mapState({
      device: (state) => state.app.device,
    }),
    classObj() {
      return {
        mobile: this.device === "mobile",
      };
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.listSub)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.listSub)
    },
    building() {
      const vm = this;
      vm.$router.push({ name: "build" });
    }
  },
};
</script>
<style scoped lang="scss">
.digital {
  position: fixed;
  width: 100%;
  z-index: 99;
  .el-menu--horizontal > .el-menu-item.is-active,
  .el-menu--horizontal ::v-deep .el-submenu .el-submenu__title,
  .el-menu--horizontal > .el-submenu:focus .el-submenu__title,
  .el-menu--horizontal > .el-submenu:hover .el-submenu__title,
  .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    color: white;
    font-size: 0.7rem;
    letter-spacing: 5px;
    background-color: black;
  }
  .el-menu-item:hover,
  .el-submenu:hover,
  .el-menu--horizontal ::v-deep .el-submenu .el-submenu__title:hover,
  .el-menu--horizontal > .el-menu-item,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
    background-color: black;
    color: white;
  }
  .el-menu--horizontal .el-menu .el-menu-item,
  .el-menu--horizontal .el-menu .el-submenu__title {
    color: white !important;
    background-color: transparent !important;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: unset;
    background-color: white;
  }
  .el-menu.el-menu--horizontal {
    border: none;
    background-color: black;
  }
}


.logoBox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 !important;
}
.digital-logo {
  background: url("../../../assets/Logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 80px;
  width: 80%;
  height: 80%;
}
.build-logo {
  background: url("../../../assets/bLogo.png");
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 80px;
  width: 80%;
  height: 80%;
}
li[class*="digital-"] {
  background: transparent !important;
  color: white !important;
}
// li[class*="build-"] {
//   color: black ;
// }
.el-menu.el-menu--horizontal {
  display: flex;
  flex-wrap: wrap;
}
.el-menu-item,
.el-submenu,
.el-submenu__title {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-menu--horizontal ::v-deep .el-submenu .el-submenu__title {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-menu.el-menu--horizontal > li {
  height: 80px;
  color: white;
  font-size: 0.7rem;
  letter-spacing: 5px;
  /* max-width: 130px; */
}


.build {
  position: fixed;
  width: 100%;
  z-index: 99;
  .el-submenu__title:hover {
    background-color: white;
    color: black;
  }
  .el-submenu__title {
    background-color: black;
    color: black;
  }

  .el-menu.el-menu--horizontal > li {
    background-color: white;
    color: black;
    font-weight: 600;
  }
  .el-menu-item.digital-index-logo,
  .el-submenu:hover,
  .el-menu--horizontal .el-submenu .el-submenu__title:hover,
  .el-menu--horizontal > .el-menu-item,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
    background-color: white;
    color: black;
  }
  .el-menu--horizontal > .el-menu-item.is-active,
  .el-menu--horizontal ::v-deep .el-submenu .el-submenu__title,
  .el-menu--horizontal > .el-submenu:focus .el-submenu__title,
  .el-menu--horizontal > .el-submenu:hover .el-submenu__title,
  .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    color: black;
    font-size: 0.7rem;
    letter-spacing: 5px;
  }
  .el-menu--horizontal .el-menu .el-menu-item,
  .el-menu--horizontal .el-menu .el-submenu__title {
    color: black !important;
    background-color: transparent !important;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: 2px solid rgb(234, 234, 234);
    background-color: black;
  }
}
</style>
