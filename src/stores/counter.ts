import { defineStore } from 'pinia'

type CounterState = {
    counter: number
}

type CounterGetters = {
    isZero: (state: CounterState) => boolean
}

type CounterActions = {
    increment: () => void
}

export default defineStore<string, CounterState, CounterGetters, CounterActions>('counterStore', {
    // State
    //------------------------
    state: () => ({
        counter: 0,
    }),

    // Getters
    //------------------------
    getters: {
        isZero: ({counter}): boolean => counter === 0,
    },

    // Actions
    //------------------------
    actions: {
        increment(): void {
            this.counter++
        },
    },
})