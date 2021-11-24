<template>
  <div>
    
    <b-toast v-for="(snackbar, index) in snackbars"  :key="index"  :autoHideDelay="5000" :visible="snackbar.showing" id="my-toast" :variant="snackbar.type" solid :appendToast="true">
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-icon icon="exclamation-triangle-fill"></b-icon>
          <strong class="ml-1">Thông báo!</strong>
          
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