<template>
  <div>
      <h1>{{count}}</h1>
      <button @click="countAdd">Add</button>
  </div>
</template>

<script>
import useCustomRef from '../hooks/customRef'
export default {
    setup() {
        const count = useCustomRef(2, 200);
        const countAdd = () => count.value++;
        return {
            count,
            countAdd
        }
    }
}
</script>

<style>

</style>