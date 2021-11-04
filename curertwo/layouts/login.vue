<template>
  <v-app id="inspire">
    <div>
    <div class="box-norm" v-if="preload">
    <v-main>
      <Nuxt />
    </v-main>
        </div>
        <div class="box-preload"  v-if="!preload">
      <div class="text-center" style="width:100%">
        <img style="max-width: 100%;" src="/icon.png" alt="">
      </div>
      <div class="text-center" style="width:100%">
        <h2 style="color:white">Courier app</h2>
      </div>
    </div>
    </div>
  </v-app>
</template>

<script>
export default {
   mounted() {
    setTimeout(() => {
      this.preload = true
      
    }, 3000);
  },
  data() {
    return {
      preload:false,
    };
  },
}
</script>

<style >
.box-preload{
  min-height: 100vh;
background: black;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
}
.box-norm{
  transition: 1s;
}
</style>


