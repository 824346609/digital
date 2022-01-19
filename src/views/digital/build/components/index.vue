<template>
  <div class="build_container">
    <div class="build_bg">
      <div class="build_title"></div>
    </div>
    <div class="build_content">
      <div class="build_artical">
        <div class="block">
          <span class="demonstration">显示总数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            layout="prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </div>
        <!-- <div class="block">
          <span class="demonstration">调整每页显示条数</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">直接前往</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
          >
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">完整功能</span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          > -->
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.build_container {
  height: 100%;
  width: 100%;
}
.build_bg {
  position: relative;
  width: 100%;
  height: 40%;
  background: url("../../../../assets/build/build_bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  top: 8%;
  border-bottom: 3px solid red;
}
.build_title {
  position: relative;
  background: url("../../../../assets/build/build_tit.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 30%;
  height: 15%;
  top: 35%;
  left: 35%;
}
.build_content {
  width: 100%;
  height: 52%;
  background-color: black;
  position: relative;
  top: 8%;
}
</style>
