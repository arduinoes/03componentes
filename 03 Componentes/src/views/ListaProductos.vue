<template>
  <div class="row justify-content-center">
    <BaseTarjetaProducto
      class="col-4 m-2"
      v-for="producto in productos"
      :key="producto.id"
      :producto="producto"
    />
  </div>
</template>

<script>
import BaseTarjetaProducto from "@/components/BaseTarjetaProducto.vue";
import ServiciosProductos from "@/servicios/ServiciosProductos.js";

export default {
  name: "ListaProductos",
  components: {
    BaseTarjetaProducto,
  },
  data() {
    return {
      productos: null,
    };
  },
  created() {
    ServiciosProductos.obtenerProductos()
      .then((response) => {
        this.productos = response.data;
        console.log("productos:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
