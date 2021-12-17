<template>
  <Layout class-prefix="layout">
    <NumberPad  @update:value="onUpdateAmount" @submit="saveRecord"/>
<!--    <Types :value.sync="record.type" />-->
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <FormItem field-name="备注" placeholder="请输入备注" @update:value="onUpdateNote" />
    <Tags :data-source.sync="tags" @update:value="onUpdateTag"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import {Component,} from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue"
import recordTypeList from "@/constants/recordTypeList";
@Component(
    {components:{FormItem, Tags,NumberPad,Tabs},
   }
)
export default class Money extends Vue {
  get recordList(){
    return this.$store.state.recordList;
  }
  recordTypeList=recordTypeList;
      record:RecordItem={
    tags:[],
    notes:'',
    type:'-',
    amount:0,
  }
  created(){
    this.$store.commit('fetchRecords');
  }
  onUpdateNote(value:string){
    this.record.notes=value;
  }
  saveRecord(){
    this.$store.commit('createRecord',this.record);
  }
}
</script>

