<template>
  <div class="container formulario">
    <div class="mb-3">
      <label class="form-label">{{ label }}</label>
      <input
        type="text"
        class="form-control"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>


<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style scoped>
.formulario {
  max-width: 400px;
}
</style>
