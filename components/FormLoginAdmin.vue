<template>
<v-card style="padding:1rem">
 <v-form ref="form_com_children" lazy-validation>
     <h3>Вход в админ панель</h3>
          <v-text-field
            v-model="name"
            label="Имя"
            :rules="[(v) => !!v || 'Не может быть пустым']"
            counter
            maxlength="20"
            required
          ></v-text-field>
            <v-text-field
            v-model="password"
            label="Пароль"
            type="password"
            :rules="[(v) => !!v || 'Не может быть пустым']"
            required
          ></v-text-field>
          <v-btn
            :disabled="!onloginform"
            class="mr-4"
            @click="sendLogin"
          >
             Войти
          </v-btn>

        </v-form>
    </v-card>
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