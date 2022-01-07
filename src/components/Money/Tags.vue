<template>
  <div class="flow-auto">
    <div class="tags">
      <ul class="current">
        <li v-for="tag in tagList" :key="tag.id"
            @click="selectWhether(tag)"
            :class="{selected:selectedTags.indexOf(tag)>=0}">
          {{ tag.name }}
        </li>
      </ul>
      <div class="new">
        <button @click="createTag"> 新增标签</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {Component,} from "vue-property-decorator";
import {mixins} from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";
@Component
export default class Tags extends mixins(TagHelper) {
  get tagList(){
    return this.$store.state.tagList;
  }
  selectedTags: string[] = [];

  created() {
    this.$store.commit('fetchTags');
  }

  selectWhether(tag: string) {
    if (this.selectedTags.indexOf(tag) >= 0) {
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }
}
</script>

<style lang="scss" scoped>
.flow-auto {
  overflow: auto;
}

.tags {
  background: white;
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
      border-radius: 12px;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

      &.selected {
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