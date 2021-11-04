<template>
<v-app >

    <main style="min-height:100vh">
      <Nuxt />
      
    </main>
    
  </v-app>
</template>

<script>
export default {

  mounted() {

  },
      methods: {
onhist(){
      const headers = {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('jwtTokens'),
          };
      this.$axios.get(
     `https://giftcity.kz/api/v1/couriers/data_courier`,{
          headers: headers
        }
    )
    .then((resp) =>{
      console.log(444);
      this.$router.push('/admin/ordersall')
    }),
      (error) => {
        localStorage.removeItem('jwtTokens')
        this.$store.commit("admin/setData_zakaz",[]);
        this.$router.push('/')
      }
      
  },
    },

  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
