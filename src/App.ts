import { defineComponent } from 'vue'

export default defineComponent({
    template: `
    <p class="bg-red">
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <router-view></router-view>
  `,
})
