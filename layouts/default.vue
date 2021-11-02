<template>
  <div>
    <TheHeader />
    <Nuxt />
    <Snackbar />
    <TheFooter />
  </div>
</template>
<script>
import Snackbar from '@/components/Snackbar';
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
export default {
    components:{
      TheHeader,
      TheFooter,
      Snackbar
    }
}
</script>