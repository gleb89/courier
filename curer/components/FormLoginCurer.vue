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
        .$post(`/api/couriers/login`, data, {
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