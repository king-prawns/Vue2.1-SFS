// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import I18n from 'vue-i18n'
import VueResource from 'vue-resource'

import App from './App'
import UserView from './view/UserView'
import UserDetailView from './view/User-detailView'
import UserTodosView from './view/UserTodosView'
import PostsView from './view/PostsView'

import Locales from './translate/translate.js'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(I18n)
Vue.config.lang = 'en'

Object.keys(Locales).forEach(function (lang) {
  Vue.locale(lang, Locales[lang])
})

// install vue resource
Vue.use(VueResource)

// install router
Vue.use(VueRouter)

// vue resource interceptors for loader
Vue.http.interceptors.push((request, next) => {
  // modify request
  // console.log("start http");
  NProgress.start()
  // continue to next interceptor
  next((response) => {
    // modify response
    // console.log("stop http");
    NProgress.done()
  })
})

// routing
const routes = [
  { path: '/users', name: 'userList', component: UserView },
  { path: '/user/:id', name: 'userDetails', component: UserDetailView },
  { path: '/user/:id/todos', name: 'userTodos', component: UserTodosView },
  { path: '/posts', name: 'postList', component: PostsView },
  { path: '*', redirect: '/users' }
]

const router = new VueRouter({
  routes
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
