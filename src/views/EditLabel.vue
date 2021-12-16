<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click.native="goBack"></Icon>
      <span class="title">编辑标签</span>
    </div>
    <div class="form-container">
      <FormItem class="input"
                :value="currentTag.name"
                @update:value="update"
                field-name="标签名"
                placeholder="请输入..."/>
    </div>
    <div class="deleteTag-container">
      <Button class="delete" @click.native="remove">删除标签</Button>
    </div>
  </Layout>
</template>
<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import FormItem from "@/components/Money/FormItem.vue";
import Button from "@/components/Button.vue";

@Component({
  components: {FormItem, Button},
})
export default class EditLabel extends Vue {
  get currentTag(){
    return this.$store.state.currentTag;
  }
  created() {
    const id=this.$route.params.id;
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag',id);
    if (!this.currentTag) {
      this.$router.replace('/404');
    }
  }

  update(name: string) {
    if (this.currentTag)
      this.$store.commit('updateTag', {id:this.currentTag.id,name});
  }

  remove() {
    if (this.currentTag) {
      this.$store.commit('removeTag',this.currentTag.id);
    }
  }

  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.deleteTag-container {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}

.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;

  .leftIcon {
    position: absolute;
    left: 16px;
    margin-top: 4px;
  }

  .input {
    height: 48px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>