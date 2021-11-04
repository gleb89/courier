<template>
    <v-container>
      <Go/>
        <div class="d-flex justify-center" style="align-items: center;height: 100vh;">
                <!-- <FormLoginCurer :onhist="onhist"/> -->
                {{data}}
        </div>
         
    </v-container>
    
    
</template>

<script>
export default {
  layout:'login',
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
      if(!process.client) return;
      
  },
        methods: {
onhist(){
      const headers = {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('jwtTokenCurer'),
          };
      this.$axios.get(
     `https://giftcity.kz/api/v1/couriers/data_courier`,{
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
