<template>
  <div class="text-center" v-if="producto">
    <h1>{{ producto.nombre }}</h1>
    <p>{{ producto.descripcion }}</p>
    <img :src="producto.imagen" class="card-img-top" alt="" />
  </div>
</template>
<script>
import ServiciosProductos from "../servicios/ServiciosProductos.js";
export default {
  props: ["id"],
  data() {
    return {
      producto: null,
    };
  },
  created() {
    // ServicioEventos.getEvent(this.$route.params.id)
    ServiciosProductos.obtenerProducto(this.id)
      .then((response) => {
        this.producto = response.data;
        console.log("producto:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
