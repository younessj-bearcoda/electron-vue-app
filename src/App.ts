import { defineComponent } from 'vue'
import MainHeader from '@/layout/MainHeader'
import WindowControl from '@/layout/WindowControl'

export default defineComponent({
    components: {
        MainHeader,
        WindowControl,
    },
    template: `
        <WindowControl/>
        <MainHeader />
        
        <main class="px-4 sm:px-6 py-6">
            <router-view></router-view>
        </main>
    `,
})
