<template>
<div class="nav-wrapper">
  <div class="content">
    <p>money.vue</p>
  </div>
  <Nav/>
</div>
</template>

<script lang="ts">
export default {
  name: "Money",
}
</script>

<style lang="scss" scoped>
.content{
  border: 1px solid blue;
overflow: auto;
flex-grow: 1;
}
.nav-wrapper{
border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>