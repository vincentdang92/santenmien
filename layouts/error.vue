<template>
  <div>
      <b-container>
          <b-row>
              <b-col cols="12">
                <h1 v-if="error.statusCode === 404">Không tìm thấy trang</h1>
                <h1 v-else>Có lỗi!</h1>
                <NuxtLink to="/">Trang chủ</NuxtLink>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>