export const UserModule = {
    namespaced: true,

    state: {
    user: null
    },
    
    // Mutations are functions that effect the state
    // convention: all caps
    mutations: {
    SET_USER(state, user) {
        state.user = user
    }
    },
    
    // Actions are functions that you call throughout your application that calls mutation
    actions: {
    setUser({ commit }, user) {
        commit('SET_USER', user);
    }
    },
}