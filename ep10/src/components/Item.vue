<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card-body item">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card-body {
  font-family: "Arinozia", cursive;
  font-size: 24px;
  color: #6e6e6e;
  border: 1px solid #6e6e6e;
}
.item {
  cursor: pointer;
}

.item:hover {
  background: #ffe2e2;
}
</style>
