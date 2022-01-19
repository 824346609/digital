<template>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          class="el-menu-vertical-demo"
          :text-color="this.$route.name === 'digital'? '#fff':'#000'"
          active-text-color="#ffd04b"
          :background-color="this.$route.name === 'digital'? '#000':'#fff'"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location" />
              <span>导航</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">集团概况</template>
              <el-menu-item
                v-for="(user, i) in listSub"
                :key="i"
                :index="`1-1-${user.id}`"
                :class="`${user.class}`"
                >{{ user.name }}</el-menu-item
              >
            </el-submenu>
            <el-menu-item
              v-for="(user, i) in listObj"
              :key="i"
              :index="(i + 1).toString()"
              @click="link(user.ref)"
            >
              <span slot="title">{{ user.name }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: "mNavi",
  data() {
    return {
      listObj: [
        { id: 1, name: "新闻中心", ref: "build" },
        { id: 2, name: "企业党建", ref: "build" },
        { id: 3, name: "招贤纳士", ref: "build" },
        { id: 4, name: "核心业务", ref: "build" },
        { id: 5, name: "联系我们", ref: "build" },
      ],
      listSub: [
        { id: 1, name: "集团简介", class: this.$route.name + '-one' },
        { id: 2, name: "领导班子", class: this.$route.name + '-two' },
        { id: 3, name: "组织架构", class: this.$route.name + '-three' },
        { id: 4, name: "荣誉资质", class: this.$route.name + '-four' },
        { id: 5, name: "领导关怀" , class: this.$route.name + '-five' },
        { id: 6, name: "领导大事记", class: this.$route.name + '-six' },
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    link(db) {
      const vm = this;
      // vm.$router.push({ name: db });
    },
  },
};
</script>
<style scoped lang="scss">
.digital {
  .el-menu-item:hover, .el-menu-item:focus {
    background-color: unset;
    color: rgb(255, 208, 75);
  }
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
    border-right: unset;
    background-color: unset !important;
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
}

.build {
  .el-submenu {
    display: block !important;
  }
  .el-submenu ::v-deep .el-submenu__title {
    background-color: white !important;
  }
  .is-active {
    background-color: rgba(240, 240, 240, .3) !important;
  }
  // .el-menu-item:hover, .el-menu-item:focus {
  //   background-color: unset;
  //   color: rgb(255, 208, 75);
  // }
  // .el-submenu__title {
  //   background-color: rgba(250, 250, 250, 1);
  // }
  // ::v-deep .el-submenu__title:hover {
  //   background-color: rgba(250, 250, 250, 1);
  // }
  // .el-col {
  //   background-color: rgba(250, 250, 250, 1);
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }
  // .el-menu {
  //   border-right: unset;
  //   background-color: rgba(250, 250, 250, 1);
  //   width: 100%;
  // }
  // .menu {
  //   width: 25%;
  //   display: flex;
  //   align-items: center;
  // }
  // .el-submenu__title {
  //   padding: 0px !important;
  // }
  // .el-submenu {
  //   display: block !important;
  // }
  // .el-submenu [class^="el-icon-"] {
  //   margin-left: -5px;
  //   text-align: unset;
  // }
  // .is-active {
  //   color: unset;
  //   background-color: rgba(250, 250, 250, 1);
  // }
}
</style>
