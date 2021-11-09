

const state = () => ({
  userToken: null
});

const actions = {
  nuxtServerInit ({ commit }, { req, app, store }) {
    const cushash = app.$cookies.get('cushash');
    const cusid = app.$cookies.get('cusId');
    //console.log(cusHash,'cusHash');
    store.dispatch('auth/setToken',{
      cusHash: cushash,
      cusId: cusid
  });
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