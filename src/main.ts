import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
Vue.component('Nav',Nav);
Vue.component('Layout',Layout);
Vue.component('Icon',Icon);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
window.onload=function(){
  setTimeout(function(){
    window.scrollTo(9,200);
  },0);
};
if (document.documentElement.clientWidth>500){
  window.alert('为保证浏览效果，请使用手机打开页面！');
  const img=document.createElement('img');
  img.src='/moneyWebsite/qr_code.png';
  img.style.position='fixed';
  img.style.left='50%';
  img.style.top='60%';
  img.style.transform='translate(-50%,-50%)';
  document.body.appendChild(img);
}