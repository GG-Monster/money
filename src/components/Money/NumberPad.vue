<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">记账</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  output = '0';
  inputContent(event:MouseEvent){
    const button=(event.target as HTMLButtonElement);
    const input =button.textContent as string;
    if(this.output.length===16){return;}
    if(this.output==='0'){
      if('0123456789'.indexOf(input)>=0){
        this.output=input;
      }
      else{
        this.output+=input;
      }
      return;
    }
if(this.output.indexOf('.')>=0&&input==='.'){
  return;
}
this.output+=input;
  }
remove(){
    if(this.output.length===1){
      this.output='0';
    }else{
      this.output=this.output.slice(0,-1);
    }
}
clear(){
this.output='0';
}
ok(){
    this.$emit('update:value',this.output)
}
}
</script>
<style lang="scss">
.layout-container {
}

.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/styles/global.scss";

.numberPad {
  .output {
    height: 72px;
    font-size: 36px;
    font-family: Cosolas, monospace;
    padding: 9px 16px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px fade_out(black, 0),
    inset 0 5px 5px -5px fade_out(black, 0);
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