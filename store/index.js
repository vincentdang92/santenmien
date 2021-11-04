

const state = () => ({
  userToken: null
});

const actions = {
  nuxtServerInit ({ commit }, { req, app, store }) {
    
    const userToken = app.$cookies.get('userToken')
    if(userToken && userToken.length > 0){
        store.dispatch('auth/setToken',userToken);
    }
  }
}

const mutations = {
  SET_TOKEN: (state, userToken) => {
    state.userToken = userToken
  }
}
const getters = {
    userToken: state => state.userToken
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};