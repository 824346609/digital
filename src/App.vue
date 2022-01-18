<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
  // mounted() {
  //   if (this._isMobile()) {
  //     alert("手机端");
  //     // this.$router.replace("/m_index");
  //   } else {
  //     alert("pc端");
  //     // this.$router.replace("/pc_index");
  //   }
  // },
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
