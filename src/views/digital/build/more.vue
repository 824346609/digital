<template>
  <div class="more_container">
    <div class="more_title">
      <div><span></span></div>
    </div>
    <art />
    <art />
    <art />
    <div class="page">
      <div class="block">
        <span class="demonstration"></span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="200"
          layout="prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import art from "./components/article.vue";

export default {
  data() {
    return {
      currentPage1: 5
    };
  },
  components: {
    art,
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.more_title {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  div {
    border-bottom: 2px solid red;
    width: 80%;
    height: 100%;
    span {
      background: url("../../../assets/build/build_tit.png");
      background-repeat: no-repeat;
      background-position: center;
      display: inline-block;
      background-size: contain;
      height: 40%;
      width: 40%;
      position: relative;
      top: 30%;
      left: 30%;
    }
  }
}
body {
  font-size: 14px;
}
.more_container {
  height: 100%;
  width: 100%;
}
.build_artical {
  height: 20%;
}
.build_artical {
  padding-top: 30px;
  padding-bottom: 20px;
}
::v-deep .build_artical .artical_container {
  height: 100%;
  top: unset;
  box-shadow: unset;
  background-color: rgba(241, 241, 241, 1);
}
::v-deep .build_artical .artical_container:hover {
  background-color: white;
  box-shadow: 5px 5px 20px 5px grey;
}
.page {
  display: flex;
  justify-content: center;
}
</style>