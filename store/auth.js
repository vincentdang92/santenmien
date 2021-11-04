/**
 * initial state
 */
 const state = () => ({
    userToken: null,
    userAgent:null
  });
  
  /**
   * initial getters
   */
  const getters = {
    isAuthenticated: (state) =>
      state.userToken != undefined  && state.userToken.length > 0
  };
  
  /**
   * initial actions
   */
  const actions = {
    setToken({state, commit}, payload) {
        commit('setToken',(state, payload));
        
    },
    logout({state, commit}, payload) {
        commit('removeToken',(state));
        
        return true;
    },
    
  };
  
  /**
   * initial mutations
   */
  const mutations = {
    setToken(state, token) {
      state.userToken = token;
      
    },
  
    removeToken(state) {
      state.userToken = null;
      
    }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };
  