<template>
    <v-container>
        <div class="d-flex justify-center">
            <v-card class="login-form">
                <FormLoginAdmin/>
            </v-card>
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