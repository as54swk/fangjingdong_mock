<template>
  <div class="nav">
    <span @click="$router.push('/login')">登录</span>
    <span>|</span>
    <span @click="$router.push('/register')">注册</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.nav {
  text-align: center;
  font-size: 26/360 * 100vw;
  height: 15vh;
  line-height: 15vh;
  span:nth-child(2) {
    padding: 0 2px;
  }
}
</style>