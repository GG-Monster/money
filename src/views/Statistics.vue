<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>

      <ol v-if="groupList.length>0">
        <li v-for="(group,index) in groupList" :key="index">
          <h3 class="title">{{ beautify(group.title) }}
           <span>¥ {{group.total}}</span></h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.id">
             <span>{{tagString(item.tags)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>¥ {{ item.amount }}</span>
            </li>
          </ol>
        </li>
      </ol>
    <div v-else class="norecord">无记录</div>
  </Layout>
</template>
<style scoped lang="scss">
.norecord{
  padding: 16px;
  text-align: center;
}
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
    background: #c4c4c4;
    height: 42px;

    &.selected {
      background: #999;

      &::after {
        //display: none;
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #111;
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
// import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
// import RecordStore from "@/store/recordStore";
import dayjs from "dayjs";
import clone from "@/lib/clone";
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
    // const hashTable: { title: string,items: HashTableValue };
    const newList=clone(recordList).filter((r:RecordItem)=>r.type===this.type).sort((a:any,b:any)=>dayjs(b.createdTime).valueOf()-dayjs(a.createdTime).valueOf());
    // for (let i = 0; i < recordList.length; i++) {
    //   const [date, time] = recordList[i].createdTime!.split('T');
    //   hashTable[date] = hashTable[date] || {title: date, items: []};
    //   hashTable[date].items.push(recordList[i]);
    // }
    if(newList.length===0){
      return [];
    }
    type Result={title:string,total?:number,items:RecordItem[]}[];
    const result:Result=[{title:dayjs(newList[0].createdTime).format('YYYY-MM-DD'),items:[newList[0]]}];
    for(let i=1;i<newList.length;i++){
      const current=newList[i];
      const last =result[result.length-1];
      if(dayjs(last.title).isSame(dayjs(current.createdTime),'day')){
        last.items.push(current);
      }
      else{
        result.push({title:dayjs(current.createdTime).format('YYYY-MM-DD'),items:[current]});
      }
    }
    result.map(group=>{group.total=group.items.reduce((sum,item)=>sum+item.amount,0)});

    return result;
  }
  beforeCreate() {
    this.$store.commit('fetchRecords');
    // this.$store.commit('fetchTags');

  }

  type = '-';
  recordTypeList = recordTypeList;
}
</script>
