<template>
  <div>
    <ul class="types">
      <li   :class="value==='-'&& 'selected'" @click="selectType('-')">支出</li>
      <li :class="value==='+'&& 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop, Watch} from "vue-property-decorator";
@Component
export default class types extends Vue{
  @Prop() value!:string;
    selectType(type:string){
      if(type!=='-'&&type!=='+'){
        throw new Error("type is unknown!")
      }
      this.$emit('update:value',type)
    }

  }

</script>
<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    //&表示当前选择器 而非当前的子选择器
    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #999;
    }
  }
}
</style>