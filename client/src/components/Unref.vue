<template>
    <div>
        <h1>{{state.message.count}}</h1>
        <button @click="countAdd">add</button>
    </div>
</template>
<script>
import {ref, unref} from 'vue'
export default {
    setup() {
        let state = ref({message: {count: 0}})
        state = unref(state)
        const countAdd = () => state.message.count++
        return {state, countAdd}
    },
}
</script>