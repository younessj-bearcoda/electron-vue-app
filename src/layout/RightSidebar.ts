import { defineComponent } from 'vue'
import ToolsPanel from '@/layout/Panels/ToolsPanel'

export default defineComponent({
    components: {
        ToolsPanel,
    },
    template: `
        <aside class="sidebar sidebar-right p-1 flex flex-col space-y-3 resize-x overflow-hidden border">
            <ToolsPanel/>
        </aside>
    `,
})
