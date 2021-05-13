<template>
    <div>
        <h1>{{count}}</h1>
        <h1>count from props {{countFromProps}}</h1>
        <button @click="countAdd">add</button>
        <button @click="countFromPropsAdd">countFromProps Add</button>
    </div>
</template>
<script>
import {isReactive, isReadonly, isRef, reactive, ref, toRef, toRefs} from 'vue'
export default {
    props: {
        count: Number
    },
    setup(props) {
        const {count: countFromProps} = toRefs(props);
        // const countFromProps = toRef(props, 'count');
        const countFromPropsAdd = () => {
            countFromProps.value = Number(countFromProps.value)+1;
        };
        const rawCount = {count: 0};
        const proxyCount = reactive({count: 0});
        const count = toRef(rawCount, 'count');
        const countAdd = () => {
            count.value++;
            console.log(rawCount.count)
        }
        
        return {count, countAdd, countFromProps, countFromPropsAdd}
    },
}
</script>