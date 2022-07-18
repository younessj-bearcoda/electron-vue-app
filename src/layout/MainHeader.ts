import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        //
    },
    setup() {
        return {
            //
        }
    },
    template: `
        <router-link
            to="/"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            active-class="active">Home</router-link>
        <router-link
            to="/about"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            active-class="active">About</router-link>
    `,
})
