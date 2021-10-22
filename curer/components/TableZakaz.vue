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
            Имя клиента
          </th>
        <th class="text-left">
            Телефон клиента
          </th>
        <th class="text-left">
            адрес клиента
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
          <td style="height: 10rem;min-height: 10rem">{{ item.history_id }}</td>
          <td style="height: 10rem;min-height: 10rem">
            <img v-if="item.photo_dostavka" style="max-width: 4rem;" :src="item.photo_dostavka" alt="еще не доставлено" />
          <span v-if="!item.photo_dostavka">еще не доставлено</span>
          </td>
          <td style="min-width: 7rem;height: 10rem;min-height: 10rem">
            <span style="font-weight: bold;">{{item.name_user}}</span>
              
          </td>
          <td style="height: 10rem;min-height: 10rem">
              <span style="font-weight: bold;">{{item.phone_user}}</span>   
          </td>
          <td style="height: 10rem;min-height: 10rem">
            <span style="font-weight: bold;">{{item.adress_user}}</span>
          </td>
          
          <td style="height: 10rem;min-height: 10rem" v-if="item.dostavleno">доставлено</td>
          <td style="height: 10rem;min-height: 10rem" v-if="!item.dostavleno">не доставлено</td>
          <td style="height: 10rem;min-height: 10rem" v-if="!item.dostavleno">

            <v-btn
            @click="onUpdate(item.id)"
      class="mx-2"
      fab
      dark
      large
      color="cyan"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>
          </td>
          <td style="height: 10rem;min-height: 10rem" v-if="item.dostavleno">доставлено</td>
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
        .$put(`http://giftcity.kz/api/v1/couriers/orders/${this.zakaz_id}`, bodyFormData, {
    
        })
        .then((data) => {
            console.log(data.orders);
            this.$store.commit("curer/setData_zakaz", data.orders);
            this.dialog = false
        })
        .catch(function (error) {
        console.log('error');
      });
      }
  },
};
</script>
