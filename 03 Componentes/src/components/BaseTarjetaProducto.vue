<template>
  <div class="card" style="width: 18rem">
    <img :src="producto.imagen" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ producto.nombre }}</h5>
      <p class="card-text">
        {{ producto.descripcion }}
      </p>
      <router-link :to="{ name: 'DetalleProducto', params: { id: producto.id }}">
      <a href="#" class="btn btn-primary">Leer mas</a> 
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    producto: Object,
  },
};
</script>

