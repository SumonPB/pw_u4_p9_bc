import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MostrarTodos from '@/views/MostrarTodosView.vue'
import MostrarPorIdView from '@/views/MostrarPorIdView.vue'
import GuardarView from '@/views/GuardarView.vue'
import ActualizarView from '@/views/ActualizarView.vue'
import ActualizarParcialComponent from '@/components/ActualizarParcialComponent.vue'
import EliminarComponent from '@/components/EliminarComponent.vue'
import ActualizarParcialView from '@/views/ActualizarParcialView.vue'
import EliminarView from '@/views/EliminarView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:"/showAll",
    name:"showall",
    component: MostrarTodos
  },
   {
    path:"/showById",
    name:"showbyid",
    component: MostrarPorIdView
  },   {
    path:"/save",
    name:"save",
    component: GuardarView
  },   {
    path:"/actualizar",
    name:"actualizar",
    component: ActualizarView
  },   {
    path:"/actualizarParcialmente",
    name:"actualizarParcialmente",
    component: ActualizarParcialView
  }, {
    path:"/eliminar",
    name:"eliminar",
    component: EliminarView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
