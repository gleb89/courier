<template>
<div>
     <v-navigation-drawer
      v-model="drawer"
      app
    >
       <v-list
        nav
        dense
        
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

           <v-list-item @click="onadminPage('/curer/ordersnew')">
            <v-list-item-icon>
                <v-icon>mdi-alarm</v-icon>
                
             
            </v-list-item-icon>
            <v-list-item-title>Новые Заказы
                          <v-avatar color="#FF7A00" size="14" style="padding:1em">
              <span class="white--text">{{data_all_zakaz.length}}</span>
            </v-avatar>
               </v-list-item-title>
          </v-list-item>

           <v-list-item @click="onadminPage('/curer/ordersall')">
            <v-list-item-icon>
               <v-icon>mdi-domain</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Все Заказы</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer">
          
      </v-app-bar-nav-icon>

      <v-toolbar-title >Админ-панель</v-toolbar-title>
         <div style="width: 100%;" class="text-right">
        <v-btn @click="onExit"> выйти</v-btn>
      </div>
      
    </v-app-bar>
    </div>
</template>

<script>
  export default {
    async fetch({ store }) {
    if (store.getters["curer/data_zakaz"].length === 0) {
      try {
        await store.dispatch("curer/fetch");
      } catch (error) {
        console.log('err');
      }
      
    }
  },
   computed: {
    data_all_zakaz() {
      try {
             this.data_zakaz = this.$store.getters["curer/data_zakaz"].filter((elem) => {
        return (
          elem.dostavleno === false
        );
      });
      } catch (error) {
        console.log('err');
      }

      return this.data_zakaz
    }
    },
    data: () => ({ 
        drawer: null ,
        data_zakaz:[],
        group:null
        }),
    methods: {
      onadminPage(url){
        this.$router.push(url)
      },
      onExit(){
        localStorage.removeItem('jwtTokenCurer')
        this.$store.commit("curer/setData_zakaz",[]);
        this.$router.push('/')
      }
    },
  }
</script>

<style >
  
</style>