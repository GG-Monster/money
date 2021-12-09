<template>
  <Layout class-prefix="layout">
    <NumberPad  @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type" />
    <FormItem field-name="备注" placeholder="请输入备注" @update:value="onUpdateNote" />
    <Tags :data-source.sync="tags" @update:value="onUpdateTag"/>
  </Layout>
</template>

<script lang="ts">
/* eslint-disable */
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import Vue from "vue";
import {Component,Watch} from "vue-property-decorator";
import recordModel from "@/models/recordModel";
import tagModel from "@/models/tagModel";

const recordList=recordModel.fetch();

@Component(
    {components:{FormItem, Tags,Types,NumberPad}}
)
export default class Money extends Vue {
  tags=window.tagList;
  recordList:RecordItem[]=recordList;
  record:RecordItem={
    tags:[],
    notes:'',
    type:'-',
    amount:0
  }
  onUpdateAmount(value:string){
this.record.amount=parseFloat(value);
  }
  onUpdateNote(value:string){
    this.record.notes=value;
  }
  onUpdateTag(value:string[]){
    this.record.tags=value;
  }
  saveRecord(){
recordModel.create(this.record);
  }
  @Watch('recordList')
  onRecordListChange(){
  recordModel.save();
  }
}
</script>

