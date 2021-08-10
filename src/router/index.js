import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Category from '../views/category/Category.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:category',
    name: 'category',
    component: Category,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
