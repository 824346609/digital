<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // 页面开始加载时修改font-size
    var html = document.getElementsByTagName('html')[0]
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth
    html.style.fontSize = oWidth / 6000 * 100 + 'px'
    console.log('oWidth:', oWidth)
    console.log('rem:', html.style.fontSize)
    console.log(this.$store.state)
  },
  // methods: {
  //   //App.vue，判断是否为移动端
  //   _isMobile() {
  //     let flag = navigator.userAgent.match(
  //       /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  //     );
  //     return flag;
  //   },
  // },
}
</script>
