<template>
  <div>
      <h1>{{count.value}}</h1>
      <button @click="countAdd">Add</button>
  </div>
</template>

<script>
import { shallowRef, triggerRef, watchEffect } from 'vue';
export default {
    setup() {
        const count = shallowRef({});
        count.value.value = 10;
        const countAdd = () => {
            count.value.value++
            console.log(count.value)
            triggerRef(count)
        };
        watchEffect(() => {
            console.log(count.value);
        })
        return {
            count,
            countAdd
        }
    }
}
</script>

<style>

</style>