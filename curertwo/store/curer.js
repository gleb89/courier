
export const state = () => ({
  jwtTokenCurer : '',
  data_zakaz:[]
  })


  
  export const mutations = {
    setAuthadmin (state, jwtToken ) {
      localStorage.setItem('jwtTokenCurer',jwtToken) 
      state.jwtTokenCurer   = jwtToken 
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
            Authorization: localStorage.getItem('jwtTokenCurer'),
          };
        const data_zakaz = await this.$axios
        .$get(`https://giftcity.kz/api/v1/couriers/data_courier`,{
          headers: headers
        })
       
        commit('setData_zakaz',data_zakaz.orders)
  
    }
  }
  
  export const getters = {
    data_zakaz: s => s.data_zakaz,
  
  
  }
