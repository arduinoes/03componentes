<template>
  <form @submit.prevent="enviarForm">
  <BaseInput
    v-model="producto.nombre"
    type="text"
    label="Nombre"
  />
   <BaseTextarea
    v-model="producto.descripcion"
    type="text"
    label="Descripción"
  />
    <BaseSelect
    v-model="producto.categoria"
    :opciones="categorias"
    label="Selecciona una categoría"
  />
  <base-checkbox 
    v-model="producto.extras.pelicula" 
    label="Película"
    />
  <base-checkbox 
    v-model="producto.extras.comic" 
    label="Cómic"
    />
  <base-radio
  v-model="producto.editorial"
  :value="0"
  label="DC Cómic"
  />
  <base-radio
  v-model="producto.editorial"
  :value="1"
  label="Marvel"
  />
  <div class="text-center">
  <button type="submit" class="btn btn-primary">Enviar</button>
</div>  </form>
   {{ producto }}
</template>

<script>
import axios from "axios"
import BaseInput from "../components/BaseInput.vue"
import BaseTextarea from "../components/BaseTextarea.vue"
import BaseSelect from "../components/BaseSelect.vue"
import BaseCheckbox from "../components/BaseCheckbox.vue"
export default {
  name: 'Formulario',
  components: {
    BaseInput,
    BaseTextarea,
    BaseSelect,
    BaseCheckbox
  },
  data () {
    return {
      categorias: [
        'Los Vengadores',
        'Los Cuatro Fantásticos',
        'Guardianes de la Galaxia',
        'Superhéroe'
      ],
      producto: {
        categoria: '',
        nombre: '',
        descripcion: '',
        editorial: 0,
        extras: {
          pelicula: false,
          comic: false
        }
      }
    }
  },
  methods: {
    enviarForm() {
      axios.post('https://my-json-server.typicode.com/arduinoes/datos/productos', this.producto)
    .then((response) => {
        console.log('response', response);
    })      
    .catch((error) => {
        console.log(error);
      })
  } 
  } 
}
</script>

<style scoped>
.formulario {
  max-width: 400px;
}
</style>