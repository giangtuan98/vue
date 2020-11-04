<template>
<!-- TODO dung the slot de co the viet noi dung ben trong component -->
  <div class="card">
    <h2>{{ cardTitle}}</h2>
    <p>This is my car</p>
    <slot name="header">this is default header</slot>
    <!-- TODO this is default slot, it don't have name attribute -->
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    cardTitle: {
      type: String,
    },
  },
}
</script>

<style scoped>
  .card {
    width: 100%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
    padding: 30px;
    margin: 20px;
    text-align: center;
  }


</style>