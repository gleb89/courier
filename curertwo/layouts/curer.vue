<template>
  <v-app id="inspire">
   <CurerMenu/>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
     mounted: function () {
        if(!process.client) return;
    if (!localStorage.getItem('jwtTokenCurer')) {
        
      this.$router.push('/')
    }
    if (localStorage.getItem('jwtTokenCurer')) {
      this.$store.commit("curer/setAuthadmin", localStorage.getItem('jwtTokenCurer'));
      this.sendLogin()
        this.$router.push('/curer/ordersall')
      }
    
    },
    methods: {
    sendLogin(){
        const headers = {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('jwtTokenCurer'),
          };
        this.$axios
        .$get(`couriers/data_courier`, {
          headers:headers
        })
        .then((resp) => {
          this.$store.commit("curer/setData_zakaz", resp);
          
        })
        .catch(function (error) {
        console.log('error');
      });
        
     },
    },
}
</script>



