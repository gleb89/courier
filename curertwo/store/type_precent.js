export const state = () => {
    return {
      type_precent:[],
  
  
  
    }
  }
  
  export const mutations = {
    settype_precent (state,type_precent) {
    state.type_precent = type_precent
  
    },
  
  
  }
  
  export const actions = {
    async fetch({commit,state}){
        const type_precent = await this.$axios
        .$get(`/api/present/type/`,{
      
        })
        commit('settype_precent',type_precent)
  
    }
  }
  
  export const getters = {
    type_precent: s => s.type_precent,
  
  
  }