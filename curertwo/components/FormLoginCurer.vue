<template>
<v-container id="forml">
 <v-form ref="form_com_children" lazy-validation style="padding: 1rem;">
     <h3>Вход в курьер панель!</h3>
          <v-text-field
            v-model="email"
            label="email"
            :rules="[(v) => !!v || 'Не может быть пустым']"
            counter
            maxlength="30"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[(v) => !!v || 'Не может быть пустым']"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Введите пароль"
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-btn
            :disabled="!onloginform"
            class="mr-4"
            @click="sendLogin"
          >
             Войти
          </v-btn>

        </v-form>
</v-container>
</template>


<script>

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
      show1:false
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

        this.$axios
        .$post(`/api/couriers/login`, data, {
         
        })
        .then((token) => {
            console.log(token);
            
            this.$store.commit("curer/setAuthadmin", `Bearer ${token.access_token}`);
            this.$router.push('/curer/ordersall')
          
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