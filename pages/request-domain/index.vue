<template lang="">
    <div id="main">
        <div class="session-buy-domain-name pt-50 pb-50"> 
            <b-container>
                <div class="item-buy-domain-name">
                    <div class="title-buy-domain-name">
						<h3>
							Gửi yêu cầu mua tên miền {{ userToken }}
						</h3>
						<p>
							Nếu Quý khách gặp khó khăn khi phải trỏ bản ghi nhiều tên miền, vui lòng gửi danh sách tên miền về địa chỉ  santenmien@nhanhoa.com để chúng tôi hỗ trợ đăng tên miền.
						</p>
					</div>
                    <div class="info-buy-domain-name">
                        <b-form class="form_normal">
                            <div class="buy-top-radio">
                                <b-form-group  >
                                    <b-form-radio-group
                                        id="radio-group-1"
                                        v-model="selected_find_type"
                                        name="find_type"
                                        @change="onChangeFindType"
                                    >
                                        <b-form-radio :value="1">Chỉ định rõ tên miền <b-icon variant="success" id="radio-multi-domain-tooltips" icon="patch-question-fill"></b-icon></b-form-radio>
                                        <b-form-radio :value="2">Nhập nhiều tên miền </b-form-radio>
                                    </b-form-radio-group>
                                    <b-tooltip target="radio-multi-domain-tooltips" variant="success" triggers="hover">Giúp tìm kiếm tên miền nhanh hơn</b-tooltip>
                                </b-form-group> 
                            </div>
                            <div class="buy-domain-name-input">
                                <b-form-group
                                    :label="selected_find_type == 1 ? 'Tên miền muốn tìm mua' : 'Nhập nhiều tên miền'"
                                    label-for="input-domain-name"
                                    >
                                    <b-form-input
                                        v-if="selected_find_type == 1"
                                        id="input-domain-name"
                                        v-model="single_domain"
                                        placeholder="Tên miền muốn tìm mua"
                                        
                                    ></b-form-input>
                                    <b-form-textarea
                                        v-if="selected_find_type == 2"
                                        id="textarea"
                                        v-model="multi_domain"
                                        placeholder="Tối đa 4000 ký tự"
                                        rows="3"
                                        max-rows="6"
                                    ></b-form-textarea>
                                </b-form-group>
                                <b-form-group>
                                    <label for="input-keywords" class="d-block" >Từ khóa tên miền: <b-icon variant="success" id="input-keywords-tooltips" icon="patch-question-fill"></b-icon></label>
                                    <!-- <b-form-input
                                        id="input-keywords"
                                        v-model="keywords"
                                        placeholder="Nhập từ khóa (tối thiểu 3 ký tự)"
                                        
                                    ></b-form-input> -->
                                    <b-form-tags
                                        input-id="tags-state-event"
                                        v-model="tags"
                                        :tag-validator="validator"
                                        placeholder="Nhập từ khóa (tối thiểu 3 ký tự)"

                                        @tag-state="onTagState"
                                        duplicateTagText="Đã có từ khóa"
                                        addButtonText="Thêm"
                                        addButtonVariant="primary"
                                        tag-variant="primary"
                                        size="lg"
                                        :limit="limitTags"
                                        remove-on-delete
                                        :limitTagsText="`Bạn được nhập tối đa ${limitTags} từ khóa!`"
                                        :invalidTagText="`Độ dài từ khóa tối thiểu 3 ký tự`"
                                        
                                    >
                                    <template #add-button-text>
                                        <b-icon icon="plus-circle-fill"></b-icon>
                                    </template>
                                    </b-form-tags>
                                    
                                    
                                    <b-tooltip target="input-keywords-tooltips" variant="success" triggers="hover">Giúp tìm kiếm tên miền nhanh hơn với các từ khóa liên quan</b-tooltip>
                                </b-form-group>
                                <b-row>
                                    <b-col xs="4" lg="4" cols="12">
                                        <b-form-group
                                         label="Thuộc lĩnh vực"
                                        >
                                            <b-form-select   v-model="selected_career" :options="option_career"></b-form-select>
                                        </b-form-group>
                                    </b-col>
                                    
                                    <!-- <b-col  cols="10" lg="6">
                                        <b-form-group
                                         label="Chọn khoảng giá"
                                        >
                                            <RangeSlider
                                                style="margin-top:40px;"
                                                v-model="range_slider_value"
                                                :min="1000000"
                                                :max="100000000000"
                                                :step="1000000"
                                                :format="formatRangePrice"
                                                class="slider-blue"
                                            />
                                        </b-form-group>
                                    </b-col> -->
                                    <b-col cols="6" md="4">
                                        
                                    </b-col>
                                    <b-col cols="6" md="4">

                                    </b-col>
                                    <b-col cols="12" class="text-center">
                                         <p class="note">
                                            *Nên chọn giá tiền tối đa có thể chi trả để chủ thể tên miền dễ dàng giao dịch hơn.
                                        </p>
                                        <b-button  @click="submit" variant="primary"><b-icon icon="search" ></b-icon> Tìm mua tên miền</b-button>
                                    </b-col>
                                </b-row>
                               
                            </div>
                        </b-form>
                    </div>
                </div>
            </b-container>
        </div>
        <WhyUs />
        <FAQ />
    </div>
</template>
<script>
import {mapState, mapGetters} from "vuex";
import Vue from 'vue';
import { formatCurrency, formatNumber, checkValidDomain  } from "~/utils/libs";
import RangeSlider from '@vueform/slider/dist/slider.vue2.js';
import FAQ from "@/components/FAQ";
import WhyUs from "@/components/WhyUs";
Vue.use(RangeSlider);

export default {
    middleware: 'router-auth',
    components: { 
      RangeSlider,
      FAQ,
      WhyUs
    },
    data() {
      return {
        range_slider_value: [1000000,40000000],
        single_domain:'',
        multi_domain:'',
        keywords:'',
        selected_find_type: 1,
        selected_career:null,
        price_range:1000000,
        option_career: [
          { value: null, text: 'Ngành nghề' },
          { value: 1, text: 'Bất động sản' },
          { value: 2, text: 'Công nghệ' },

        ],
        option_find_type: [
          { html: 'Chỉ định rõ tên miền', value: 1 },
          { html: 'Tìm kiếm nhiều tên miền <b-icon variant="success" id="radio-domain-1" icon="patch-question-fill"></b-icon>', value: 2 },
          
        ],
        tags: [],
        validTags: [],
        invalidTags: [],
        duplicateTags: [],
        limitTags: 3
      }
    },
    computed:{
       ...mapState('auth', ['userToken'])
    },
    methods:{
        checkValidDomain,
        priceRange(price){
            return price.toLocaleString("vi-VN");
        },
        formatRangePrice: function (value) {
            return `${value.toLocaleString("vi-VN")} VNĐ`;
        },
        submit(){
            console.log(this.range_slider_value);
        },
        onChangeFindType(){
            if(this.selected_find_type == 2){

            }
        },
        onTagState(valid, invalid, duplicate) {
            this.validTags = valid
            this.invalidTags = invalid
            this.duplicateTags = duplicate
        },
        validator(tag) {
            return tag.length > 2 && tag.length < 60
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
