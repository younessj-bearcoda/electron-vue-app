import { defineComponent } from 'vue'
import Counter from '@/components/Counter'

export default defineComponent({
    components: {
        Counter,
    },
    template: `
        <h1>About Page</h1>
        <Counter/>
    `,
})
