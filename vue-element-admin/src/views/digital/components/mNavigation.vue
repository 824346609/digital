<template>
  <div :class="this.$route.name">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          class="el-menu-vertical-demo"
          text-color="#fff"
          active-text-color="#ffd04b"
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
              <el-menu-item v-for="(user, i) in listSub" :key="i" :index="`1-1-${user.id}`">{{ user.name }}</el-menu-item>
            </el-submenu>
            <el-menu-item v-for="(user, i) in listObj" :key="i" :index="(i+1).toString()" @click="link(user.ref)">
              <span slot="title">{{ user.name }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'MNavi',
  data() {
    return {
      listObj: [
        { id: 1, name: '新闻中心', ref: 'build' },
        { id: 2, name: '企业党建', ref: 'build' },
        { id: 3, name: '招贤纳士', ref: 'build' },
        { id: 4, name: '核心业务', ref: 'build' },
        { id: 5, name: '联系我们', ref: 'build' }
      ],
      listSub: [
        { id: 1, name: '集团简介' },
        { id: 2, name: '领导班子' },
        { id: 3, name: '组织架构' },
        { id: 4, name: '荣誉资质' },
        { id: 5, name: '领导关怀' },
        { id: 6, name: '领导大事记' }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    link(db) {
      const vm = this
	    vm.$router.push({ name: db })
    }
  }
}
</script>
<style scoped>
.digital-index {
  position: fixed;
  z-index: 99;
}
>>>.el-col-12 {
  width: 100%;
}
>>>.el-col {
  background-color: rgba(0,0,0,.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
>>>.el-menu {
  border-right: none !important;
  background-color: rgba(0,0,0,.1);
  padding: 0 20px;
  width: 100%;
}
>>>.menu {
  width: 25%;
  display: flex;
  align-items: center;
}
>>>.el-submenu__title {
  padding: 0px !important;
}
>>>.el-submenu {
  display: block !important;
}
>>>.el-submenu [class^=el-icon-] {
  margin-left: -5px;
  text-align: unset;
}
>>>.el-submenu__title:hover {
  background-color: rgba(0,0,0,.1);
}
>>>.is-active {
  color: unset;
  background-color: unset;
}
</style>
