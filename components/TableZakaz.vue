<template>
<div>
            <v-dialog v-model="dialog"
            transition="dialog-bottom-transition"
            max-width="600"
            >
            <v-card>
            <v-container class="">
              <v-row justify="start">
                <v-col cols="12">
                  <v-form ref="form_com_children" lazy-validation>
                      <h3>Отправить фото-отчет</h3>
                        <v-file-input
                        aria-required="fgfgf"
                        :rules="[(v) => !!v || 'Не может быть пустым']"
                          v-model="image"
                          accept="image/png, image/jpeg, image/bmp"
                          placeholder="Загрузите изображение"
                          prepend-icon="mdi-camera"
                          label="Загрузите изображение"
                        ></v-file-input>
                        <div style="text-align: end;">
                    <v-btn
                    :disabled="!onloginform"
                      class="mr-4"
                      @click="sendDataform"
                    >
                      Создать
                    </v-btn>
                    </div>
                  </v-form>
                </v-col>
              </v-row>
            </v-container>
            </v-card>
        </v-dialog>

  <v-simple-table fixed-header >
    <template v-slot:default>

      <thead>
        <tr>
          <th class="text-left">
            Артикул заказа
          </th>
          <th class="text-left">
            Фото-отчет
          </th>
        <th class="text-left">
            Инфо о клиенте
          </th>
          <th class="text-left">
            Доставлено?
          </th>
          <th class="text-left">
            отметить доставку
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data_zakaz" :key="item.name">
          <td>{{ item.history_id }}</td>
          <td v-if="item.photo_dostavka">
            <img style="max-width: 4rem;" :src="item.photo_dostavka" alt="" />
          </td>
          <td>
              Имя клиента: {{item.name_user}}
              <br>
              Номер клиента: {{item.phone_user}}
              <br>
              Адрес клиента: {{item.adress_user}}
          </td>
          <td v-if="!item.photo_dostavka">еще не доставлено</td>
          <td v-if="item.dostavleno">доставлено</td>
          <td v-if="!item.dostavleno">не доставлено</td>
          <td v-if="!item.dostavleno">
            <v-btn  @click="onUpdate(item.id)" tile color="success">
                
              <v-icon left>
                mdi-pencil
              </v-icon>
              отметить
            </v-btn>
          </td>
          <td v-if="item.dostavleno">доставлено</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>
export default {
  props: ["data_zakaz"],
  data() {
      return {
          zakaz_id:0,
          image:null,
          dialog:false,
        rulesImage: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
      };
  },
  computed: {
    onloginform() {
      if (this.image) {
        return true;
      } else {
        return false;
      }
    },
  
  },
  methods: {
      onUpdate(item_id) {
          this.zakaz_id = item_id
          this.dialog = true
      },
      sendDataform(){
          let bodyFormData = new FormData();
          bodyFormData.append("image", this.image);
           this.$axios
        .$put(`http://82.148.17.12:8080/api/v1/couriers/orders/${this.zakaz_id}`, bodyFormData, {
    
        })
        .then((data) => {
            console.log(data.orders);
            this.$store.commit("admin/setData_zakaz", data.orders);
            this.dialog = false
        })
        .catch(function (error) {
        console.log('error');
      });
      }
  },
};
</script>
