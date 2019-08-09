// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// import axios from 'axios';//引入axios
import axios from './assets/js/axios';   //并依据创建文件
Vue.prototype.$axios = axios; //添加axios到Vue的原型对象上

import './assets/css/global.scss'

import './assets/svgImg'

import NavBar from './components/component/Nav.vue';
Vue.component("NavBar",NavBar); // 全局注册组件
import SilderBar from './components/component/Silder.vue';
Vue.component("SilderBar",SilderBar); // 全局注册组件


import Global_ from './assets/js/Global'
Vue.prototype.Global=Global_;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
