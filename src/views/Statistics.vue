<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>

    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
      <ol>
        <li v-for="(group,index) in groupList" :key="index">
          <h3 class="title">{{ beautify(group.title) }}</h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.id">
             <span>{{tagString(item.tags)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>¥ {{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ol>
  </Layout>
</template>
<style scoped lang="scss">
%item{
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title{
@extend %item;
}
.record{
  background: white;
  @extend %item;

}
.notes{
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
::v-deep {
  .type-tabs-item {
    background: white;

    &.selected {
      background: #c4c4c4;

      &::after {
        display: none;
      }
    }
  }

  li.interval-tabs-item {
    height: 48px;
  }
}

</style>
<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue"
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
// import RecordStore from "@/store/recordStore";
import dayjs from "dayjs";
import clone from "@/lib/clone";
const api=dayjs();
console.log(api);
@Component({
  components: {
    Tabs,
  }
})
export default class Statistics extends Vue {

  tagString(tags:Tag[]){
    return tags.length===0?'无':tags[0].name;
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  beautify(string:string){
    const day =dayjs(string);
    const now=dayjs();
    if(day.isSame(now,'day')){
      return '今天';
    }else if(day.isSame(now.subtract(1,'day'),'day')){

      return '昨天';
    }else if(day.isSame(now.subtract(2,'day'),'day')){
      return '前天';
    }else return day.format('YYYY年MM月DD日');
  }
  get groupList() {
    const {recordList} = this;
    if(recordList.length===0){
      return [];
    }
    type HashTableValue = { title: string, items: RecordItem[]};
    // const hashTable: { title: string,items: HashTableValue };
    const newList=clone(recordList).sort((a:any,b:any)=>dayjs(b.createdTime).valueOf()-dayjs(a.createdTime).valueOf());
    // for (let i = 0; i < recordList.length; i++) {
    //   const [date, time] = recordList[i].createdTime!.split('T');
    //   hashTable[date] = hashTable[date] || {title: date, items: []};
    //   hashTable[date].items.push(recordList[i]);
    // }
    const group=[{title:dayjs(newList[0].createdTime),items:[newList[0]]}];
    for(let i=1;i<newList.length;i++){
      const current=newList[i];
      const last =group[group.length-1];
      if(dayjs(last.title).isSame(dayjs(current.createdTime),'day')){
        last.items.push(current);
      }
      else{
        group.push({title:dayjs(current.createdTime),items:[current]});
      }
    }
    return group;
  }
  beforeCreate() {
    this.$store.commit('fetchRecords');
    // this.$store.commit('fetchTags');

  }

  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>
