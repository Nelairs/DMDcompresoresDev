import { createRouter, createWebHistory } from "vue-router";
import {deleteFiltrosPinia} from "../utils/functions"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
      meta:{
        requiresAuth: true,
      }
    },
    {
      path: "/variadores",
      name: "Variadores",
      component: () => import("../views/Variadores.vue"),
      meta:{
        requiresAuth: true,
      }
    },
    {
      path: "/administracion",
      name: "Administracion",
      component: () => import("../views/Administracion.vue"),
      meta:{
        requiresAuth: true,
      }
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
      meta: {
        disableNavbar: true,
      },
    },
  ],
});

function hasQueryParams(route) {
  return !!Object.keys(route.query).length;
}


router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    
  }

  if ( hasQueryParams(from) && !hasQueryParams(to) && to.name != "Home" ) {
    next({name:to.name, query: from.query });
  } 
  else if(from.name === undefined && hasQueryParams(to)){
    deleteFiltrosPinia()
    next({name: to.name, query:null})
  }else{
    next()
  }

});
export default router;
