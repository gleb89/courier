<template>
    <div>
      <div >
      <h2 style="margin: 4rem;">Все заказы</h2>
      <TableZakaz :data_zakaz="data_all_zakaz"/>
    </div>
    </div>
</template>

<script>
export default {
  layout:'curer',
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
      this.data_zakaz = this.$store.getters["curer/data_zakaz"]
      try {
        this.data_zakaz = this.$store.getters["curer/data_zakaz"]
      } catch (error) {
        console.log('err');
      }
      
      return this.data_zakaz
    },
  
  },
  
  data() {
    return {
      data_zakaz: [],
    };
  },
}
</script>