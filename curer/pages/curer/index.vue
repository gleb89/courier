<template>
    <v-container>
      <Go/>
        <div class="d-flex justify-center" style="align-items: center;height: 100vh;">
                <FormLoginCurer :onhist="onhist"/>
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
            Authorization: localStorage.getItem('jwtTokenCurer'),
          };
      this.$axios.get(
     `http://giftcity.kz/api/v1/couriers/data_courier`,{
          headers: headers
        }
    )
    .then((resp) =>{
      console.log(resp);
      this.$router.push('/curer/ordersall')
    }),
      (error) => {
        localStorage.removeItem('jwtTokenCurer')
        this.$store.commit("curer/setData_zakaz",[]);
        this.$router.push('/curer')
      }
      
  },
    },
  
}
</script>
