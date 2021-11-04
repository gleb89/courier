export const state = () => {
    return {
      form:[],
  
  
  
    }
  }
  
  export const mutations = {
    setform (state,form) {
    state.form = form
  
    },
  
  
  }
  
  export const actions = {
    async fetch({commit,state}){
        const headers = {
            "Content-Type": "application/json"
          };
        const form = await this.$axios
        .$get(`/api/present/form_product/`,{
          headers: headers
        })
        commit('setform',form)
  
    }
  }
  
  export const getters = {
    form: s => s.form,
  
  
  }