<template>
    <div>
      <div >
      <h2 style="margin: 4rem;">Все заказы</h2>
      <!-- <TableZakaz :data_zakaz="data_all_zakaz"/> -->
{{data_zakaz}}
    </div>
    </div>
</template>

<script>
export default {
  layout:'curer',
  async fetch({ store }) {
    if (store.getters["curer/data_zakaz"].length === 0) {
      await store.dispatch("curer/fetch");
    }
  },
  computed: {
    data_all_zakaz() {
      this.data_zakaz = this.$store.getters["curer/data_zakaz"]
    //  this.data_zakaz = this.data_zakaz.filter((elem) => {
    //     return (
    //       elem.dostavleno === true
    //     );
    //   });
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