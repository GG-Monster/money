<template>
  <div class="nav">
    <router-link to="/money">
      <Icon name="money"></Icon>
      钱包 ｜
    </router-link>
    <router-link to="/labels">
      <Icon name="label"></Icon>
      标签 ｜
    </router-link>
    <router-link to="/statistics">
      <Icon name="statistics"></Icon>
      统计 ｜
    </router-link>
  </div>
</template>

<script lang="ts">
// import x from '@/assets/icons/money.svg';
// import y from '@/assets/icons/label.svg';
// import z from '@/assets/icons/statistics.svg';
// console.log(x);
// console.log(y);
// console.log(z);
//引用同一个尾名的众多文件
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}
//error: '__WebpackModuleApi' is not defined (no-undef)
//解决方案：在.eslintrc.js>module.exports添加globals
// "globals":{"__WebpackModuleApi":"writable"}
export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>