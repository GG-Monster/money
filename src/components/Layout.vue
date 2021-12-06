<template>
  <div class="layout-container" :class="classPrefix &&`${classPrefix}-container` ">
    <div class="content" :class="classPrefix &&`${classPrefix}-content` ">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: "Layout",
  props:['classPrefix'],
}
</script>

<style lang="scss" scoped>
.content {
  //border: 1px solid blue;
  overflow: auto;
  flex-grow: 1;
}

.layout-container {
  //border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>