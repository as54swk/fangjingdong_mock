import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
// 注册axios
import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
// 设置请求拦截器
axios.interceptors.request.use(function (config) {
  // config配置为请求参数配置项,这里可以全局设置请求头,js文件中直接使用store
  config.headers.Authorization = store.state.token;
  return config;
}, function (error) {
  return Promise.reject(error);
});
// 设置响应拦截器,处理token过期问题
// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
