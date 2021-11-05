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

    if (!localStorage.getItem('jwtTokenCurer')) {
        
      this.$router.push('/')
    }
    if (localStorage.getItem('jwtTokenCurer')) {
      this.$store.commit("curer/setAuthadmin", localStorage.getItem('jwtTokenCurer'));
        this.$router.push('/curer/ordersall')
        await this.$store.dispatch("curer/fetch");
      }
    
    },
}
</script>



