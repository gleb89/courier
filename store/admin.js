
export const state = () => ({
  jwtToken : '',
  data_zakaz:[]
  })


  
  export const mutations = {
    setAuthadmin (state, jwtToken ) {
      localStorage.setItem('jwtTokens',jwtToken) 
      state.jwtToken  = jwtToken 
    },
    setData_zakaz(state, data) {
      console.log('settt',);
      state.data_zakaz  = data
    },

  
  }

  export const actions = {
    async fetch({commit,state}){
        const headers = {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('jwtTokens'),
          };
        const data_zakaz = await this.$axios
        .$get(`http://82.148.17.12:8080/api/v1/couriers/data_courier`,{
          headers: headers
        })
       
        commit('setData_zakaz',data_zakaz.orders)
  
    }
  }
  
  export const getters = {
    data_zakaz: s => s.data_zakaz,
  
  
  }
