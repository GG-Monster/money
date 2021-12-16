<template>
<Layout>
  <div class="tags">
    <router-link class="tag" v-for="tag in tags" :key="tag.id"
    :to="`/labels/edit/${tag.id}`">
      <span>{{tag.name}}</span>
      <Icon name="right"/>
    </router-link>
  </div>
  <div class="createTag-container">
    <Button @click.native="createTag">新建标签</Button>
  </div>
</Layout>
</template>
<script lang="ts">
import Button from "@/components/Button.vue";
import Vue from "vue";
import {Component} from "vue-property-decorator";
import TagHelper from "@/mixins/TagHelper";
import { mixins } from "vue-class-component";

@Component({
  components: {Button,},
})
export default class Labels extends mixins(TagHelper) {
  get tags(){
    return this.$store.state.tagList;
  }
  beforeCreate() {
    this.$store.commit('fetchTags');
  }
}
</script>
<style lang="scss" scoped>
.tags{
  background: white;
  font-size: 16px;
  padding-left: 20px;
  .tag{
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #e6e6e6;
    svg{
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag-container{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }


</style>