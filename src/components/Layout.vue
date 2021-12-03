<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: "Layout"
}
</script>

<style lang="scss" scoped>
.content {
  border: 1px solid blue;
  overflow: auto;
  flex-grow: 1;
}

.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>