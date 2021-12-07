<template>
  <Layout class-prefix="layout">
    <NumberPad  @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type" />
    <Notes @update:value="onUpdateNote" />
    <Tags :data-source.sync="tags" @update:value="onUpdateTag"/>
  </Layout>
</template>

<script lang="ts">
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import Vue from "vue";
import {Component,Watch} from "vue-property-decorator";
import model from "@/model";
const recordList=model.fetch();
@Component(
    {components:{Tags,Notes,Types,NumberPad}}
)
export default class Money extends Vue {
  tags=["衣","食","住","行"];
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
    const record2=model.clone(this.record);
    record2.createdTime=new Date();
this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange(){
  model.save(this.recordList);
  }
}
</script>

