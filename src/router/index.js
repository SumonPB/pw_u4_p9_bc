import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MostrarTodos from '@/views/MostrarTodosView.vue'
import MostrarPorIdView from '@/views/MostrarPorIdView.vue'
import GuardarView from '@/views/GuardarView.vue'
import ActualizarView from '@/views/ActualizarView.vue'
import ActualizarParcialView from '@/views/ActualizarParcialView.vue'
import EliminarView from '@/views/EliminarView.vue'
import Login from '@/components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }
  },
    {
    path: '/login',
    name: 'login',//el nombre es importante debido a que es el que usa para redirigir a esa pagina
    component: Login,
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }
  },
  {
    path: "/showAll",
    name: "showall",
    component: MostrarTodos,//para trabajar con guardianes se debe definir una metadata
    meta: {
      requiereAutorizacion: false,
      esPublica: false
    }
  },
  {
    path: "/showById",
    name: "showbyid",
    component: MostrarPorIdView,
    meta: {
      requiereAutorizacion: false,
      esPublica: true
    }
  }, {
    path: "/save",
    name: "save",
    component: GuardarView
    ,
    meta: {
      requiereAutorizacion: true,
      esPublica: true
    }
  }, {
    path: "/actualizar",
    name: "actualizar",
    component: ActualizarView,
    meta: {
      requiereAutorizacion: true,
      esPublica: true
    }
  }, {
    path: "/actualizarParcialmente",
    name: "actualizarParcialmente",
    component: ActualizarParcialView,
    meta: {
      requiereAutorizacion: true,
      esPublica: true
    }
  }, {
    path: "/eliminar",
    name: "eliminar",
    component: EliminarView,
    meta: {
      requiereAutorizacion: true,
      esPublica: true
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
/*Configuracion del guardian  tiene to, from, next: to a donde quiero ingresar from desde donde vengo y next es una variable que me permite saber si se puede redirigir a una pagina o no*/
router.beforeEach((
  to, from, next
)=>{
//cuerpo de la validacion
if(to.meta.requiereAutorizacion){
  /*se envia a una pagina de login*/
  const estaAutenticado = localStorage.getItem("estaAutenticado");
  if(!estaAutenticado){
  console.log("Redirigiendo al login")
  next({name:'login'});
  }else{
    next();
  }

}else{
  /**Le dejo que pase sin que valide*/
  console.log("Pase Libre")
  next();
}
///******************** */
})
export default router
