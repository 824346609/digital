<template>
  <div class="main_content">
    <div class="intro_content">
      <!-- <div class="intro"> -->
      <div class="firm">莆田数字集团有限公司</div>
      <div class="firm_en">PUTIAN DIGTALGROUP CO.LTD</div>
      <div class="motto">数生万物·智联未来</div>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Digital',
  data() {
    return {
    }
  },
  mounted() {
    // 页面开始加载时修改font-size
    var html = document.getElementsByTagName('html')[0]
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth
    html.style.fontSize = oWidth / 6000 * 100 + 'px'
    console.log('oWidth:', oWidth)
    console.log('rem:', html.style.fontSize)
    console.log(this.$store.state)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.main_content {
  height: 100%;
  background: url('../../assets/background.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
}
.intro_content {
 position: absolute;
 top: 38%;
 left: 18%;
 height: 17%;
 width: 60%;
 display: flex;
 flex-wrap: wrap;
}
.firm, .motto {
  height: 40%;
  width: 100%;
  font-size: 1.5rem;
  display: flex;
  letter-spacing: 6px;
  justify-content: center;
  align-items: center;
  color: white;
}
.firm_en {
  height: 20%;
  width: 100%;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
