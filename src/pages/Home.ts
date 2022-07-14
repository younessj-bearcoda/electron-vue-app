import { defineComponent } from 'vue'
import Counter from '@/components/Counter'

export default defineComponent({
    components: {
        Counter,
    },
    template: `
        <h1 class="text-3xl font-bold underline">Home Page</h1>
        <p>This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
        <a class="btn btn-lg btn-primary" href="/docs/5.2/components/navbar/" role="button">View navbar docs &raquo;</a>
        
        <Counter/>
    `,
})
