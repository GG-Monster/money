<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/styles/reset.scss";
@import "~@/assets/styles/global.scss";

body{
  font-family: $font-hei;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
