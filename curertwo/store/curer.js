
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
          let data_zakaz
          try {
            data_zakaz = await this.$axios
            .$get(`/api/couriers/data_courier`,{
              headers: headers
            })
          } catch (error) {
            console.log(error);
          }

       
        commit('setData_zakaz',data_zakaz.orders)
  
    }
  }
  
  export const getters = {
    data_zakaz: s => s.data_zakaz,
  
  
  }
