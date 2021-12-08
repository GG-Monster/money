<template>
<Layout>
  <div>
    <Icon name="left"></Icon>
    <span>编辑标签</span>
  </div>

</Layout>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import tagModel from "@/models/tagModel";

@Component
export default class EditLabel extends Vue{
created(){
const id=this.$route.params.id;
tagModel.fetch();
const tags=tagModel.data;
const tag=tags.filter(t=>t.id===id)[0];
if (tag){
  console.log(tag);
}else {
  this.$router.replace('/404');
}
}

}
</script>

<style lang="scss" scoped>

</style>