// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import todoList from  './todoList'
import store from 'store'


Vue.config.productionTip = false
Vue.prototype.$store = store

/* eslint-disable no-new */
router.beforeEach((to,next)=>{
  console.log(store.state,"store.state")
  if(store.state.userInfo||to.path==='/login'){
    next()
  }else{
    next()
  }
})


new Vue({
  el: '#app',
  router,
  components: { todoList },
  template: '<todoList/>'
})
