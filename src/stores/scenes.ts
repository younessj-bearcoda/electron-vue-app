import { defineStore } from 'pinia'

type Scene = {
    id: number
}

type ScenesState = {
    selected: Scene | null
    scenes: Array<Scene>
}

type ScenesGetters = {
    isEmpty: (state: ScenesState) => boolean
}

type ScenesActions = {
    select: (scene: Scene) => void
    add: (scene: Scene) => void
    remove: (scene: Scene) => void
}

export default defineStore<string, ScenesState, ScenesGetters, ScenesActions>(
    'scenesStore',
    {
        // State
        //------------------------
        state: () => ({
            selected: null,
            scenes: [],
        }),

        // Getters
        //------------------------
        getters: {
            isEmpty: ({ scenes }): boolean => scenes.length === 0,
        },

        // Actions
        //------------------------
        actions: {
            select(scene: Scene): void {
                this.selected = scene
            },
            add(scene: Scene): void {
                this.scenes.push(scene)
            },
            remove(scene: Scene): void {
                this.scenes = this.scenes.filter(
                    (item): boolean => item.id !== scene.id
                )
            },
        },
    }
)
