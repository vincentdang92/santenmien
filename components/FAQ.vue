<template lang="">
    <div class="session-04 pb-50">
        <b-container>
          <b-row>
            <b-col cols="12" sm="5">
              <div class="left-faq">
                <div class="title-left-faq">
                    Những<br />
                    câu hỏi thường gặp?
                </div>
                <div class="img_left">
                    <img src="@/assets/images/banner-faq.png" alt="" />
                </div>
            </div>
            </b-col>
            <b-col cols="12" sm="7">
              <div id="accordion" class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1 " role="tab">
                    <b-button  class="text-left" block v-b-toggle.accordion-1 variant="default">Tôi có rất nhiều tên miền muốn đăng bán, làm sao để đăng lên nhanh nhất? <b-icon class="when-closed float-right"  icon="plus-circle-fill"></b-icon> <b-icon class="when-open float-right"  icon="dash-circle-fill"></b-icon></b-button>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        Thông thường để đăng bán tên miền trên sàn, chủ sở hữu tên miền phải xác minh bản ghi để xác nhận tên miền đúng là của mình. Tuy nhiên hệ thống hỗ trợ các tài khoản có nhiều tên miền đăng lên tự động mà không cần xác nhận từng tên miền một.
                      </b-card-text>
                      
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button class="text-left" block v-b-toggle.accordion-2 variant="default">Tên miền tôi đăng bán (mua) được giới thiệu qua phương thức nào <b-icon class="when-open float-right"  icon="plus-circle-fill"></b-icon> <b-icon class="when-closed float-right"  icon="dash-circle-fill"></b-icon></b-button>
                  </b-card-header>
                  <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        Hệ thống phân tích dữ liệu của Nhân Hòa sẽ tự động tìm ra người phù hợp muốn mua(bán) tên miền của bạn để gợi ý thông qua hình thức gửi email, push notification và hiển thị các tên miền đẹp trên hệ sinh thái của Nhân Hòa.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button class="text-left" block v-b-toggle.accordion-3 variant="default">Tại sao tôi không thăng phiên đặt giá, khi tôi đặt giá cao nhất <b-icon class="when-open float-right"  icon="plus-circle-fill"></b-icon> <b-icon class="when-closed float-right"  icon="dash-circle-fill"></b-icon></b-button>
                  </b-card-header>
                  <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        Việc định giá tên miền chưa có công cụ nào thực sự chính xác nên việc đặt giá chỉ mang tính chất tham khảo, đến khi hai bên cùng thấy mức giá hợp lý thì mới tiến hành giao dịch mua bán.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
</template>
<script>
export default {
    mounted() {
    // this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
    //   console.log('collapseId:', collapseId)
    //   console.log('isJustShown:', isJustShown)
    // })
  }
}
</script>
<style lang="scss">
    .collapsed > .when-open,
    .not-collapsed > .when-closed {
      display: none;
    }
</style>