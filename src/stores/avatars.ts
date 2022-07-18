import { defineStore } from 'pinia'

enum AvatarGender {
    MALE = 'male',
    FEMALE = 'female',
}

type Avatar = {
    id: number
    gender: AvatarGender
    name: string
    // settings
}

type AvatarsState = {
    selected: Avatar | null
    avatars: Array<Avatar>
}

type AvatarsGetters = {
    isEmpty: (state: AvatarsState) => boolean
}

type AvatarsActions = {
    select: (avatar: Avatar) => void
    add: (avatar: Avatar) => void
    remove: (avatar: Avatar) => void
}

export default defineStore<
    string,
    AvatarsState,
    AvatarsGetters,
    AvatarsActions
>('avatarsStore', {
    // State
    //------------------------
    state: () => ({
        selected: null,
        avatars: [],
    }),

    // Getters
    //------------------------
    getters: {
        isEmpty: ({ avatars }): boolean => avatars.length === 0,
    },

    // Actions
    //------------------------
    actions: {
        select(avatar: Avatar): void {
            this.selected = avatar
        },
        add(avatar: Avatar): void {
            this.avatars.push(avatar)
        },
        remove(avatar: Avatar): void {
            this.avatars = this.avatars.filter(
                (item): boolean => item.id !== avatar.id
            )
        },
    },
})
