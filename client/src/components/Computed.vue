<template>
  <div>
      <h1>Computed</h1>
      <h1>{{count}}</h1>
      <h1>{{doubleCount}}</h1>
      <h1>{{doubleCountWrite}}</h1>
      <button @click="countAdd">Add</button>
  </div>
</template>

<script>
import { computed, isReactive, isReadonly, isRef, ref } from 'vue'
export default {
    setup() {
        const count = ref(0);
        const doubleCount = computed(() => count.value * 2);
        const doubleCountWrite = computed({
            get() {
                return count.value;
            },
            set(value) {
                count.value = value / 2;
            }
        })
        const countAdd = () => {
            count.value += 1
        };

        doubleCountWrite.value = 10
        console.log('isRef', isRef(doubleCount))
        console.log('isReadonly', isReadonly(doubleCount))
        console.log('isReadonly', isReadonly(doubleCountWrite))
        return {
            count,
            doubleCount,
            doubleCountWrite,
            countAdd
        }
    }
}
</script>

<style>

</style>