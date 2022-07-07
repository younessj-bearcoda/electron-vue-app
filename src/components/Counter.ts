import { defineComponent } from 'vue'
import { useCounterStore } from '@/stores'
import { storeToRefs } from 'pinia'

export default defineComponent({
    setup() {
        const store = useCounterStore()

        const { counter } = storeToRefs(store)
        const { increment } = store

        return {
            counter,
            increment,
        }
    },
    template: `
        <button @click.prevent="increment" class="btn btn-lg btn-secondary">
            Counter: {{ counter }}
        </button>
    `,
})
