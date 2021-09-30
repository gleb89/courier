<template>
    <v-container>
        <div class="d-flex justify-center" style="align-items: center;height: 100vh;">
                <FormLoginAdmin/>
        </div>
         
    </v-container>
    
    
</template>

<script>
export default {
  layout:'login',
  mounted() {
      if(!process.client) return;
  },
  
}
</script>