/**
 * initial state
 */
 const state = () => ({
    cusHash: null,
    cusId: null,
    
  });
  
  /**
   * initial getters
   */
  const getters = {
    isAuthenticated: (state) =>
      state.cusHash != undefined  && state.cusHash.length > 0 || state.cusId != undefined && state.cusId.length > 0
  };
  
  /**
   * initial actions
   */
  const actions = {
    setToken({state, commit}, payload) {
      commit('setToken',(state,  payload ));
        
    },
    logout({state, commit, app}, payload) {
      commit('removeToken',(state));
      return true;
    },
    
  };
  
  /**
   * initial mutations
   */
  const mutations = {
    setToken(state, token) {
      state.cusHash = token.cusHash;
      state.cusId = token.cusId;
      
    },
    removeToken(state) {
      state.cusHash = null;
      state.cusId = null;
    }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };
  