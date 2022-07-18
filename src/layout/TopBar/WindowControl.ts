import { computed, defineComponent } from 'vue'
import { electronApi } from '@/api/electron-api'

export default defineComponent({
    setup() {
        const isNotElectron = computed<boolean>(() => electronApi === undefined)

        const minimize = async (): Promise<void> => {
            return electronApi.minimizeWindow()
        }
        const maximize = async (): Promise<void> => {
            return electronApi.maximizeWindow()
        }
        const close = async (): Promise<void> => {
            return electronApi.closeWindow()
        }

        const btnClasses = (disabled = false) => {
            if (disabled) {
                return [
                    'px-4 py-2 text-sm font-medium text-gray-900 bg-white border-none border-gray-200',
                    'cursor-not-allowed',
                    // Dark
                    'dark:bg-gray-500 dark:border-gray-600 dark:text-gray-600',
                ]
            }

            return [
                'px-4 py-2 text-sm font-medium text-gray-900 bg-white border-none border-gray-200',
                'hover:bg-gray-100 hover:text-blue-700',
                'focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700',

                // Dark
                'dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                'dark:hover:text-white dark:hover:bg-gray-800',
                'dark:focus:ring-blue-500 dark:focus:text-white',
            ]
        }

        return {
            isNotElectron,
            minimize,
            maximize,
            close,
            btnClasses,
        }
    },
    template: `
        <div class="window-controls">
            <div class="flex justify-end p-2 rounded-md shadow-sm" role="group">
                <button type="button" @click.prevent="minimize" :disabled="isNotElectron"
                        class="rounded-l-md" :class="btnClasses(isNotElectron)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </button>
                <button type="button" @click.prevent="maximize" :disabled="isNotElectron"
                        :class="btnClasses(isNotElectron)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                </button>
                <button type="button" @click.prevent="close" :disabled="isNotElectron"
                        class="rounded-r-md" :class="btnClasses(isNotElectron)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    `,
})
