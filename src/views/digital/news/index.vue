<template>
  <div class="news_container">
    <div class="news_bg">
      <div class="news_title"></div>
    </div>
    <div class="news_content">
      <div class="content_title">
         <tit />
         <tit />
         <tit />
         <tit />
       <!-- <div class="content">
        
       </div> -->
      </div>
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
    </div>
</template>
<script>
import $ from "jquery";
import tit from "./components/title.vue";

export default {
  components: {
    tit
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  data() {
    return {
      currentPage1: 1
    };
  },
  mounted() {
    // var next = $("<span>下一页</span>")
    // var prev = $("<span>上一页</span>")
    // $(".btn-next").children().remove()
    // $(".btn-prev").children().remove()
    // $(".btn-prev").append(prev)
    // $(".btn-next").append(next)
    // $(".btn-next").css("background-color", "yellow");
    // this.initSwiper();
  },
}
</script>
<style lang="scss" scoped>
.news_container {
  height: 100%;
  width: 100%;
}
.news_bg {
  position: relative;
  width: 100%;
  height: 40%;
  background: url("../../../assets/news/news_bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  // border-bottom: 3px solid red;
}
.news_title {
  position: relative;
  background: url("../../../assets/news/news_tit.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 30%;
  height: 15%;
  top: 35%;
  left: 35%;
}
.content_title {
  height: 60%;
  width: 90%;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
}
.news_content {
  width: 100%;
  height: 52%;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
}
// @media screen and (max-width: 992px) {
//   .build_bg {
//     top: 5.5%;
//   }
// }
.page {
  display: flex;
  justify-content: center;
}
</style>
