<template>
  <div class="flow-auto">
    <div class="tags">
      <ul class="current">
        <li v-for="tag in dataSource" :key="tag"
            @click="selectWhether(tag)"
        :class="{selected:(selectedTags.indexOf(tag)>=0)}"
        >{{tag}}</li>

      </ul>
      <div class="new">
        <button @click="createTag"> +新增标签</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component,Prop,Watch} from "vue-property-decorator";
@Component
export default class Tags extends Vue{
  @Prop() dataSource:string[]|undefined;
  selectedTags:string[]=[];
  selectWhether(tag:string){
    if(this.selectedTags.indexOf(tag)>=0){
      this.selectedTags.splice(this.selectedTags.indexOf(tag),1);
    }else{
      this.selectedTags.push(tag);

    }
  }
  createTag(){
    const name=window.prompt('请输入标签名！');
if(name===''){
  window.alert('标签名不为空！！！！');
}else if(this.dataSource){
  this.$emit('update:dataSource',[...this.dataSource,name])
}
  }
  @Watch('selectedTags')
  onTagChanged(selectedTags:string[]){
    this.$emit('update:value',selectedTags)
  }
}
</script>

<style lang="scss" scoped>
.flow-auto{
  overflow: auto;
}
.tags {
  font-size: 14px;
  > .current {
    display: flex;
    padding: 0 16px;
    flex-wrap: wrap;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected{
        background: #2c3e50;
        color: whitesmoke;
      }

    }
  }

  > .new {
    padding-top: 16px;
    padding-left: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>