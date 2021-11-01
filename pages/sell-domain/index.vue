<template lang="">
    <div id="main">
        <div class="sell-domain-names pt-50 pb-50">
            <b-container>
                <div class="iten-sell-domain-names">
                    <div class="title-sell-domain-names">
						<h1>
							ĐĂNG BÁN TÊN MIỀN
						</h1>
						<p>
							Nếu Quý khách gặp khó khăn khi phải trỏ bản ghi nhiều tên miền, vui lòng gửi danh sách tên miền về địa chỉ  santenmien@inet.vn để chúng tôi hỗ trợ đăng tên miền.
						</p>
					</div>
                    <div class="info-sell-domain-names">
                        <b-form>
                            <b-row>
                                <b-col cols="12" lg="4" sm="4">
                                     <b-form-group
                                        label="Tên miền muốn bán"
                                        label-for="input-formatter"
                                        >
                                        <b-form-input
                                            id="input-formatter"
                                            v-model="domain_name"
                                            placeholder="Tên miền muốn bán"
                                            
                                        ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" lg="2" sm="2">
                                     <b-form-group
                                        label="Thuộc lĩnh vực"
                                        label-for="input-formatter"
                                        >
                                        <b-form-input
                                            id="input-formatter"
                                            v-model="domain_name"
                                            placeholder="Thuộc lĩnh vực"
                                            
                                        ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                
                            </b-row>
                        </b-form>
                    </div>
                </div>
            </b-container>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        range_slider_value: [1000000,40000000],
        domain_name:'',
        adv_domain_name:'',
        selected_find_type: 1,
        selected_career:null,
        price_range:1000000,
        option_career: [
          { value: null, text: 'Ngành nghề' },
          { value: 1, text: 'Bất động sản' },
          { value: 2, text: 'Công nghệ' },

        ],
        option_find_type: [
          { text: 'Chỉ định rõ tên miền', value: 1 },
          { text: 'Tìm kiếm nhiều tên miền', value: 2 },
          
        ]
      }
    },
}
</script>
<style lang="">
    
</style>