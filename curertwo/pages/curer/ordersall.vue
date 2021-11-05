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
  async asyncData({ route, $axios }) {
    const product_id = Number(route.params.id);
    let curers = await $axios.get(`/api/couriers/data_courier`);

    return { curers: curers.data };
  },
  computed: {
    data_all_zakaz() {
      this.data_zakaz = this.curers
      this.$store.commit("curer/setData_zakaz", this.curers);
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