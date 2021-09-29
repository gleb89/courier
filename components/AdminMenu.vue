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

           <v-list-item @click="onadminPage('/admin/ordersnew')">
            <v-list-item-icon>
                <v-icon>mdi-alarm</v-icon>
                
             
            </v-list-item-icon>
            <v-list-item-title>Новые Заказы</v-list-item-title>
          </v-list-item>

           <v-list-item @click="onadminPage('/admin/ordersall')">
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
        <v-btn @click="onExit"></v-btn>
      </div>
      
    </v-app-bar>
    </div>
</template>

<script>
  export default {
    data: () => ({ 
        drawer: null ,
        group:null
        }),
    methods: {
      onadminPage(url){
        this.$router.push(url)
      },
      onExit(){
        
      }
    },
  }
</script>

<style >
  
</style>