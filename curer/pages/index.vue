<template>
    <v-container style="min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;flex-direction: column;">
            <div class="text-center"  style="width:100%;padding:1em">
                <v-btn
                @click="onPage('/admin')"
              small
              color="primary"
              dark
            >
              Войти как администратор
            </v-btn>
            </div>
            <div class="text-center" style="width:100%;padding:1em">
                          <v-btn
                          @click="onPage('/curer')"
              small
              color="primary"
              dark
            >
              Войти как курьер
            </v-btn>
            </div>
    </v-container>
</template>

<script>
export default {
  methods: {
    onPage(url) {
      this.$router.push(url)
    },
  },
}
</script>