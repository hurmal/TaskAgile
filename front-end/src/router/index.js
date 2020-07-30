import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";

Vue.use(VueRouter)
const routes = []

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default new VueRouter({
  routes:[{
    path: '/login',
    name:'Login',
    component : Login
  }]
})
