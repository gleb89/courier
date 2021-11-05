
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


  
  export const getters = {
    data_zakaz: s => s.data_zakaz,
  
  
  }
