<template>
    <div>
      <h2 style="margin: 4rem;">Новые заказы</h2>
      
      <TableZakaz :data_zakaz="data_new_zakaz"/>

    </div>
    
</template>

<script>
export default {
  layout:'admin',
  async fetch({ store }) {
    if (store.getters["admin/data_zakaz"].length === 0) {
      await store.dispatch("admin/fetch");
    }
  },
  computed: {
    data_new_zakaz() {
       this.data_zakaz = this.$store.getters["admin/data_zakaz"]
     this.data_zakaz = this.data_zakaz.filter((elem) => {
        return (
          elem.dostavleno === false
        );
      });
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