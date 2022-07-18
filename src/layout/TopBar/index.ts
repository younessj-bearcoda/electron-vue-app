import { defineComponent } from 'vue'

import WindowControl from './WindowControl'

export default defineComponent({
    components: {
        WindowControl,
    },
    template: `
        <div class="flex justify-between">
            <div>
                <div class="w-6 h-6">Logo</div>
            </div>
        </div>

        <WindowControl/>
    `,
})
