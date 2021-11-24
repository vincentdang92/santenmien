

const state = () => ({
  userToken: null,
  userAgent: ''
});

const actions = {
  nuxtServerInit ({ commit }, { req, app, store }) {
    const cushash = app.$cookies.get('cushash');
    const cusid = app.$cookies.get('cusId');
    store.dispatch('auth/setToken',{
      cusHash: cushash,
      cusId: cusid
    });
    //detech device
    // console.log(req.headers['user-agent']);
    // console.log(process,'process');
    let userAgent = process.server
          ? req.headers['user-agent']
          : navigator.userAgent;
    commit('setUserAgent',(state,  userAgent ));
  }
}

const mutations = {
  SET_TOKEN: (state, userToken) => {
    state.userToken = userToken
  },
  setUserAgent: (state, userAgent) => {
    state.userAgent = userAgent;
  },
  
}
const getters = {
    userToken: state => state.userToken,
    userAgent: state => state.userAgent,
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};