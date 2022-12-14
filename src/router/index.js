import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import ExampleOne from '../views/ExampleOne/index.vue';
import ExampleTwo from '../views/ExampleTwo/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/example-one',
    name: 'ExampleOne',
    component: ExampleOne
  },
  {
    path: '/example-two',
    name: 'ExampleTwo',
    component: ExampleTwo
  },
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
