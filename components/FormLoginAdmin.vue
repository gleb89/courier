<template>
<v-container id="forml">
 <v-form ref="form_com_children" lazy-validation style="padding: 1rem;">
     <h3>Вход в админ панель</h3>
          <v-text-field
            v-model="name"
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
    const headers = {
      "Content-Type": "application/json",
    };
import { mapState } from "vuex";
  export default {
    data: () => ({
      valid: true,
      name: '',
      password:'',
    }),
  computed: {
    onloginform() {
      if (this.name && this.password) {
        return true;
      } else {
        return false;
      }
    },

  },
    methods: {
    sendLogin(){
        let data = {
          "name": this.name,
          "password": this.password
        }
        this.$axios
        .$post(`http://82.148.17.12:8080/api/v1/couriers/login`, data, {
          headers: headers
        })
        .then((token) => {
            console.log(token);
            this.$router.push('/admin/ordersall')
          this.$store.commit("admin/setAuthadmin", `Bearer ${token.access_token}`);
        })
        .catch(function (error) {
        console.log('error');
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