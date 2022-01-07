import { createRouter, createWebHashHistory } from 'vue-router'
import ListaProductos from '../views/ListaProductos.vue'

const routes = [
  {
    path: "/",
    name: "ListaProductos",
    component: ListaProductos
  },
  {
    path: "/sobre-nosotros",
    name: "SobreNosotros",
    component: () =>
      import("../views/SobreNosotros.vue")
  },
  {
    path: "/detalle-producto/:id",
    name: "DetalleProducto",
    props: true,
    component: () =>
      import("../views/DetalleProducto.vue")
  },
  {
    path: "/formulario",
    name: "Formulario",
    props: true,
    component: () =>
      import("../views/Formulario.vue")
  }
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
