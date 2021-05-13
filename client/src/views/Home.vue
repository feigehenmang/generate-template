<template>
<div>
  <h1>Home</h1>
  <computed></computed>
  <!-- <shallow-ref></shallow-ref> -->
  <!-- <custom-ref></custom-ref> -->
</div>
</template>

<script>
import { ref } from 'vue'
import unref from '../components/Unref.vue'
import toref from '../components/Toref.vue'
import customRef from '../components/CustomRef.vue'
import shallowRef from '../components/ShallowRef.vue'
import Computed from '../components/Computed.vue'
export default {
    components: {
        unref,
        toref,
        customRef,
        shallowRef,
        Computed
    },
    setup() {
        const count = ref(0);
        return {count}
    },
    mounted() {
        console.log(this.$options.render)
    }
}
</script>

<style>

</style>