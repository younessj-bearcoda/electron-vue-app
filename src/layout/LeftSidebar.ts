import { defineComponent } from 'vue'
import ProjectPanel from '@/layout/Panels/ProjectPanel'
import AnimationPanel from '@/layout/Panels/AnimationPanel'

export default defineComponent({
    components: {
        ProjectPanel,
        AnimationPanel,
    },
    template: `
        <aside class="sidebar sidebar-left p-1 flex flex-col space-y-3 resize-x overflow-hidden border">
            <ProjectPanel/>
            <AnimationPanel/>
        </aside>
    `,
})
