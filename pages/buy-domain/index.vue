<template lang="">
    <div id="main">
        <div class="session-buy-domain-name pt-50 pb-50"> 
            <b-container>
                <div class="item-buy-domain-name">
                    <div class="title-buy-domain-name">
						<h3>
							Gửi yêu cầu mua tên miền
						</h3>
						<p>
							Nếu Quý khách gặp khó khăn khi phải trỏ bản ghi nhiều tên miền, vui lòng gửi danh sách tên miền về địa chỉ  santenmien@inet.vn để chúng tôi hỗ trợ đăng tên miền.
						</p>
					</div>
                    <div class="info-buy-domain-name">
                        <b-form class="form_normal">
                            <div class="buy-top-radio">
                                <b-form-group  v-slot="{ ariaDescribedby }">
                                    <b-form-radio-group
                                        id="radio-group-1"
                                        v-model="selected_find_type"
                                        :options="option_find_type"
                                        :aria-describedby="ariaDescribedby"
                                        name="radio-options"
                                    ></b-form-radio-group>
                                </b-form-group> 
                            </div>
                            <div class="buy-domain-name-input">
                                <b-form-group
                                    label="Tên miền muốn tìm mua"
                                    label-for="input-formatter"
                                    >
                                    <b-form-input
                                        id="input-formatter"
                                        v-model="domain_name"
                                        placeholder="Tên miền muốn tìm mua"
                                        
                                    ></b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Từ khóa nâng cao"
                                    label-for="input-formatter"
                                    >
                                    <b-form-input
                                        id="input-formatter"
                                        v-model="adv_domain_name"
                                        placeholder="Từ khóa nâng cao"
                                        
                                    ></b-form-input>
                                </b-form-group>
                                <b-row>
                                    <b-col xs="5" lg="5">
                                        <b-form-group
                                         label="Thuộc lĩnh vực"
                                        >
                                            <b-form-select   v-model="selected_career" :options="option_career"></b-form-select>
                                        </b-form-group>
                                    </b-col>
                                    <b-col xs="1" lg="1">
                                       
                                    </b-col>
                                    <b-col xs="6" lg="6">
                                        <b-form-group
                                         label="Khoảng giá"
                                        >
                                            <RangeSlider
                                                style="margin-top:40px;"
                                                v-model="range_slider_value"
                                                :min="1000000"
                                                :max="100000000"
                                                :step="5000000"
                                                :format="formatRangePrice"
                                                class="slider-blue"
                                            />
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="12" class="text-center">
                                         <p class="note">
                                            *Nên chọn giá tiền tối đa có thể chi trả để chủ thể tên miền dễ dàng giao dịch hơn.
                                        </p>
                                        <b-button @click="submit" variant="primary"><b-icon icon="search" ></b-icon> Tìm mua tên miền</b-button>
                                    </b-col>
                                </b-row>
                               
                            </div>
                        </b-form>
                    </div>
                </div>
            </b-container>
        </div>
    </div>
</template>
<script >
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
Vue.use(VueCompositionAPI);
import RangeSlider from '@vueform/slider/dist/slider.vue2.js';
Vue.use(RangeSlider);
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
export default {
    //middleware: 'auth',
    components: { RangeSlider },
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
    methods:{
        priceRange(price){
            return price.toLocaleString("vi-VN");
        },
        formatRangePrice: function (value) {
            return `${value.toLocaleString("vi-VN")} VNĐ`;
        },
        submit(){
            console.log(this.range_slider_value);
        }
    },
    
}
</script>
<style lang="scss">
@import '@vueform/slider/themes/default.scss';
    .buy-domain-name-input{
        select{
            height: 56px;
        }
    }
</style>
