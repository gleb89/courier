<template>
    <div>
      <h2 style="margin: 4rem;">Новые заказы</h2>
      
      <TableZakaz :data_zakaz="data_new_zakaz"/>

    </div>
    
</template>

<script>
export default {
  layout:'curer',

  computed: {
    data_new_zakaz() {
       this.data_zakaz = this.$store.getters["curer/data_zakaz"]
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