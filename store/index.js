

const state = () => ({
  userToken: null
});

const actions = {
  nuxtServerInit ({ commit }, { req, app, store }) {
    const cusHash = app.$cookies.get('cushash');
    const cusId = app.$cookies.get('cusId');
    console.log(cusHash,'cusHash');
    
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