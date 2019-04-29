const state = {
    all: []
}

const mutations = {
    remove: (context, event) => {
        state.all = state.all.filter(item => item.code !== event.code)
    },
    add: (context, item) => state.all.push(item)
}

const getters = {
    active: () => state.all.filter(account => account.type === 'актив'),
    passive: () => state.all.filter(account => account.type === 'пасив')
}

const actions = {
    removeAccount: (context, item) => context.commit('remove', item),
    addAccount: (context, item) => context.commit('add', item)
}

export default {
    state,
    mutations,
    actions,
    getters
}
