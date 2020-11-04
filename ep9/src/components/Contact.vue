<template>
  <div>
    <h1>This is contact page</h1>
    <button @click="count++">+</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
// TODO phan biet active, created - destroy , deactived
export default {
data() {
  return {
    count: 0
  }
},
created() {
  console.log('created');
},
unmounted() {
  console.log('unmounted');
},
deactivated() {
  console.log('Deactived');
},
activated() {
  console.log('Actived');
}
}
</script>

<style>

</style>