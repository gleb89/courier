<template>
    <v-container>
        <div class="d-flex justify-center" style="align-items: center;height: 100vh;">
                <FormLoginAdmin :onhist="onhist"/>
        </div>
         
    </v-container>
    
    
</template>

<script>
export default {
  layout:'login',
  mounted() {
      if(!process.client) return;
  },
        methods: {
onhist(){
      const headers = {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('jwtTokens'),
          };
      this.$axios.get(
     `http://giftcity.kz/api/v1/couriers/data_courier`,{
          headers: headers
        }
    )
    .then((resp) =>{
      console.log(resp);
      this.$router.push('/admin/ordersall')
    }),
      (error) => {
        localStorage.removeItem('jwtTokens')
        this.$store.commit("admin/setData_zakaz",[]);
        this.$router.push('/')
      }
      
  },
    },
  
}
</script>