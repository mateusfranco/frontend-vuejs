export default{
    namespaced: true,

    state: {
        email: undefined,
        token: undefined,
        login: false
    },

    mutations: {
        modifyLogin (state, log) {
          state.login = log
        },
        setToken (state, newToken) {
          state.token = newToken
        },
        setEmail (state, newEmail) {
          state.email = newEmail
        }
    },
    actions: {
    
    },
    getters: {
        login: state => state.login,
        token: state => state.token,
        email: state => state.email
    }

}
