import { defineComponent } from 'vue'
import Counter from '@/components/Counter'

export default defineComponent({
    components: {
        Counter,
    },
    template: `
        <h1 class="text-3xl font-bold underline">About Page</h1>
        <Counter/>
    `,
})
