<template>
<div>
  {{data}}
</div>
</template>


<script>
    const headers = {
      "Content-Type": "application/json",
    };
import { mapState } from "vuex";
  export default {
        async asyncData({ $axios, route, error }) {
    const headers = {
      "Content-Type": "application/json",
    };
    
    const coin_data =  await $axios.$get(`https://giftcity.kz/api/v1/couriers/`);
   
    return {data:coin_data}
      // .then((coin_data) => {
      //   return { coin };
      // });
  
  },
      mounted() {
    if(localStorage.getItem('jwtTokenCurer')){
        // this.onhist()
    }
  },
    data: () => ({
      valid: true,
      email: '',
      password:'',
    }),
    methods: {

    },
  computed: {
    onloginform() {
      if (this.email && this.password) {
        return true;
      } else {
        return false;
      }
    },

  },
    methods: {
    sendLogin(){
        let data = {
          "email": this.email,
          "password": this.password
        }
        const headers = {
        "Content-Type": "application/json",
      };
        this.$axios
        .$post(`https://giftcity.kz/api/v1/couriers/login`, data, {
          headers: headers
        })
        .then((token) => {
            console.log(token);
            this.$router.push('/curer/ordersall')
          this.$store.commit("curer/setAuthadmin", `Bearer ${token.access_token}`);
        })
        .catch(function (error) {
        console.log('error');
        console.log(error);
      });
        
     },


    },
  }
</script>

<style scoped>
  #forml{
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
  }
</style>