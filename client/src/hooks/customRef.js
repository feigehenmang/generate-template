import { customRef } from 'vue'
export default function useCustomRef(value, delay = 200) {
    return customRef((track, trigger) => {
        return {
            get() {
                console.log(track)
                track();
                return value;
            },
            set(val) {
                console.log(trigger)
                value = val;
                trigger();
            }
        }
    })
}