<template>
<div>
            <div v-if="admin_data.filters_present_change" style="width: 100%;padding: 1rem;">
        <v-btn
        @click="dialogform = true"
      class="mx-2"
      fab
      dark
      color="indigo"
    >
<v-icon dark style="color:white"> mdi-plus </v-icon>
    </v-btn>
    </div>
    <v-dialog v-model="dialogform" max-width="500px">
            <!-- изменить -->
            <v-card>
              <v-card-title>
                <span class="text-h5">Создать повод</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                <v-col cols="12">
                      <v-text-field
                        v-model="name_reason"
                        label="Название повода "
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                                        <v-file-input
                      v-model="image_precent"
                      :rules="rulesImage"
                      accept="image/png, image/jpeg, image/png"
                      placeholder="Загрузите изображение"
                      prepend-icon="mdi-camera"
                      required
                      
                      label="Загрузите изображение"
                    ></v-file-input>
                </v-col>

                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogform = false">
                  Отмена
                </v-btn>
                <v-btn color="blue darken-1" text @click="createForm">
                  Сохранить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      <v-dialog v-model="dialogformupdate" max-width="500px">
            <!-- изменить -->
            <v-card>
              <v-card-title>
                <span class="text-h5">Изменить повод</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                <v-col cols="12">
                      <v-text-field
                        v-model="name_reason"
                        label="Название повода"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                      v-model="image_precent"
                      :rules="rulesImage"
                      accept="image/png, image/jpeg, image/png, image/webp"
                      placeholder="Загрузите изображение"
                      prepend-icon="mdi-camera"
                      required
                      
                      label="Изменить изображение изображение"
                    ></v-file-input>
                </v-col>

                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogformupdate = false">
                  Отмена
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  Сохранить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

   <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Вы действительно хотите удалить  повод ?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogDelete = false"
                  >Отмена</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >Да</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>

  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Название повода
          </th>
          <th class="text-left">
            Изображение
          </th>
          <th class="text-left">
            Изменить/Удалить
          </th>
        </tr>
      </thead>
      <tbody
       class="drop-zone"

        >
        {{get_items}}
        <tr
        @drop="onDrop($event,item)"
        @dragenter.prevent
        @dragover.prevent
          v-for="item in items  "
          :key="item.id"
          class="drag-el"
          draggable="true"
          @dragstart="startDrag($event,item)"
        >
          <td>{{ item.name_reason }}</td>
          <td>
            <img style="width: 10rem;"  :src="item.icon" alt="">
          </td>
          <td>
        <v-icon v-if="admin_data.filters_present_change" small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon v-if="admin_data.filters_present_delete" small @click="deleteItem(item)"> mdi-delete </v-icon>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>
 
<script>

export default {
  layout: "admin",
  asyncData({ $axios }) {
    const headers = {
      "Content-Type": "application/json",
    };
    return $axios
      .$get(`/api/present/reason/`, {
        headers: headers,
      })
      .then((reason_presents) => {
        return { reason_presents};
      });
  },

  data: () => ({
    name_reason: '',
    dialog: false,
    rulesImage: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
    dialogformupdate:false,
    dialog_send:false,
    dialogDelete: false,
    image_precent:null,
    dialogform:false,
    items: [],
    item_id:null,
    search: '',
    editedIndex: -1,
    editedItem: {},
  }),

  computed: {

    get_items() {
      this.items = this.reason_presents;
     
    },
       admin_data(){
       return this.$store.state.localStorage.admin_data
       },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
 
  },

  methods: {
      startDrag(event,item){
  
  event.dataTransfer.dropEffect = "move"
  event.dataTransfer.effectAllowed = "move"
  event.dataTransfer.setData("itemID",item.id) 
  event.dataTransfer.setData("serial_number_one",item.serial_number) 
},
  onDrop(event,drop_item){
  
  const id_one =  event.dataTransfer.getData("itemID")
  const id_two = drop_item.id
  
 
  this.updateSerialNumb(id_one,id_two )
},
updateSerialNumb(id_one,id_two ){
        let headers = {
         "Content-Type": "application/json",
        "Authorization":this.$store.state.localStorage.jwtToken
       };
       console.log(id_one,id_two );
      this.$axios
        .$put(`/api/present/reason/update/serial/${id_one}/${id_two}`,{
          headers: headers
        })
        .then((resp) => {
         this.reason_presents = resp
         this.image_precent =  null
          
        })
        .catch(function (error) {
         console.log(error);
        });
},
      createForm(){
          this.dialog_send = false
  
          let bodyFormData = new FormData();
          bodyFormData.append("image", this.image_precent);
          let headers = {
         "Content-Type": "application/json",
        "Authorization":this.$store.state.localStorage.jwtToken
       };
       
      this.$axios
        .$post(`/api/present/reason/?name_reason=${this.name_reason}`,bodyFormData ,{
          headers: headers
        })
        .then((resp) => {
         this.items.push(resp)
         this.dialogform = false
         this.image_precent =  null
          
        })
        .catch(function (error) {
         console.log(error);
        });
      },
    editItem(item) {
      this.name_reason = item.name_reason
    this.item_id = item.id
    this.dialogformupdate = true
    },

    deleteItem(item) {
      this.item_id = item.id
      this.dialogDelete = true
    },

    deleteItemConfirm() {
   let headers = {
         "Content-Type": "application/json",
        "Authorization":this.$store.state.localStorage.jwtToken
       };
        this.$axios
        .$delete(`/api/present/reason/${this.item_id}`,{
          headers: headers
        })
        .then((resp) => {
         this.reason_presents = resp
         this.dialogDelete = false
         this.image_precent =  null
        })
        .catch(function (error) {
         console.log(error);
        });
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.image_precent =  null
      });
    },
    save() {
      let headers = {
         "Content-Type": "application/json",
        "Authorization":this.$store.state.localStorage.jwtToken
       };
       
       
      let bodyFormData = new FormData();
      if (this.image_precent) {
        bodyFormData.append("image", this.image_precent);
        
      }

      
      bodyFormData.append("name_reason", this.name_reason);
      
      this.$axios
        .$put(`/api/present/reason/update/${this.item_id}`, bodyFormData, {
          headers: headers
        })
        .then((resp) => {
         
         this.reason_presents = resp
         this.dialogformupdate = false
         this.image_precent =  null
          
        })
        .catch(function (error) {
         console.log(error);
        });
     

      this.close();
    },

    closeDelete() {
      this.dialogDelete = false;
        this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        });
      let headers = {
         "Content-Type": "application/json",
        "Authorization":this.$store.state.localStorage.jwtToken
       };
        this.$axios
        .$delete(`/api/present/reason/${this.editedItem.id}`,{
          headers: headers
        })
        .then((resp) => {
         this.items = resp

        })
        .catch(function (error) {
         console.log(error);
        }); 
    },
  },
};
</script>
