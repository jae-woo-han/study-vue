import Vue from 'vue'
import VueRouter from 'vue-router'
import BoardView from "@/views/BoardView";
import PostView from "@/views/PostView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/board',
    name: 'board',
    component: BoardView
  },
  {
    path:'/post/:id',
    name:'post',
    component:PostView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
