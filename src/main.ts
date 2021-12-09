import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import tagModel from "@/models/tagModel";
import recordModel from "@/models/recordModel";
Vue.component('Nav',Nav);
Vue.component('Layout',Layout);
Vue.component('Icon',Icon);

Vue.config.productionTip = false
//tag store
window.tagList=tagModel.fetch();
window.findTag=(id:string)=>{
  return window.tagList.filter(t=>t.id===id)[0];
}
window.createTag=(name:string)=>{
  const message=tagModel.create(name);
  if(message==='duplicated'){
    window.alert('标签名重复！！！')
  }else{
    window.alert('标签创建成功！');
  }
}
window.removeTag=(id:string)=>{
    return tagModel.remove(id);
}
window.updateTag=(id:string,name:string)=>{
 return tagModel.update(id,name);
}
//record store
window.recordList=recordModel.fetch();
window.createRecord=(record:RecordItem)=>{
  recordModel.create(record);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
