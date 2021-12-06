<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NumberPad"
}
</script>
<style lang="scss">
.layout-container{
}
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/styles/global.scss";
.numberPad {
  .output {
    font-size: 36px;
    font-family: Cosolas, monospace;
    padding: 9px 16px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px fade_out(black,0),
    inset 0 5px 5px -5px fade_out(black,0);
  }

  .buttons {
    @extend %x;
    > button {
      width: 25%;
      height: 64px;
      float: left;

      &.ok {
        height: 64*2px;
        float: right;

      }

      &.zero {
        width: 25*2%;
      }

      //$bg: #f2f2f2;

      //&:nth-child(3) {
      //  background: $bg;
      //}
      //
      //&:nth-child(2), &:nth-child(5), {
      //  background: darken($bg, 4%);
      //}
    }

  }
}
</style>