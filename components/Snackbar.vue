<template>
  <div>
    
    <b-toast v-for="(snackbar, index) in snackbars"  :key="index"  :autoHideDelay="5000" :visible="snackbar.showing" id="my-toast" :variant="snackbar.type" solid :appendToast="true">
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">Thông báo!</strong>
          
        </div>
      </template>
      {{ snackbar.text }}
      
    </b-toast>
  </div>
</template>

<script>
 import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState({
        snackbars: state => state.snackbar.snackbars
      })
    },    

  }
</script>

<style>
</style>