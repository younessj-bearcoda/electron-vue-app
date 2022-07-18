import { computed, defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            required: false,
            default: undefined,
        },
    },
    setup(props, { slots }) {
        const hasTitle = computed<boolean>(() => props.title != undefined)

        const hasSlot = (name: string): boolean => !!slots[name]

        return {
            hasTitle,
            hasSlot,
        }
    },
    template: `
        <div class="panel border border-sky-500 bg-sky-900 rounded-md overflow-hidden">
            <div
                v-if="hasSlot('panel-header') || hasTitle"
                class="panel-header bg-white text-sky-500 px-2 py-1"
            >
                <slot v-if="hasSlot('panel-header')" name="panel-header"></slot>
                <span v-else-if="hasTitle">{{ title }}</span>
            </div>
            <div class="panel-body px-2 py-1">
                <slot></slot>
            </div>        
            <div 
                v-if="hasSlot('panel-footer')" 
                class="panel-footer px-2 py-1">
                <slot name="panel-footer"></slot>
            </div>
        </div>
    `,
})
