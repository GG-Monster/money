import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import tagModel from "@/models/tagModel";
Vue.component('Nav',Nav);
Vue.component('Layout',Layout);
Vue.component('Icon',Icon);

Vue.config.productionTip = false
window.tagList=tagModel.fetch();
window.createTag=(name:string)=>{
  const message=tagModel.create(name);
  if(message==='duplicated'){
    window.alert('标签名重复！！！')
  }else{
    window.alert('标签创建成功！');
  }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
