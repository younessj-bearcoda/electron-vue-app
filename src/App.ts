import { defineComponent } from 'vue'
import TopBar from '@/layout/TopBar'
import MainHeader from '@/layout/MainHeader'
import LeftSidebar from '@/layout/LeftSidebar'
import RightSidebar from '@/layout/RightSidebar'

export default defineComponent({
    components: {
        TopBar,
        MainHeader,

        LeftSidebar,
        RightSidebar,
    },
    setup() {
        return {
            //
        }
    },
    template: `
        <div class="main-page h-full bg-white text-gray-900 dark:text-white dark:bg-gray-600">
            <header class="main-header">
                <TopBar/>
                <MainHeader />
            </header>

            <LeftSidebar/>
            <main class="main-canvas px-4 sm:px-6 py-6">
                <router-view></router-view>
            </main>
            <RightSidebar/>

            <footer class="main-footer">
                Footer
            </footer>
        </div>
    `,
})
