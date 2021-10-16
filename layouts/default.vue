<template>
  <div>
    <TheHeader />
     <Nuxt />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '@/components/Header';
import TheFooter from '@/components/Footer';
export default {
    components:{
        TheHeader,
        TheFooter
    }
}
</script>