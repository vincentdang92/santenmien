<template lang="">
    <div id="main">
        <div class="session-01 search-domain">
            <b-container>
                <div class="title-search-domain">
					<h1>
						Tìm kiếm tên miền rao bán
					</h1>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque…
					</p>
				</div>
                <div class="">
                    <b-form class="form_normal">
                        <b-row>
                            <b-col lg="4" sm="6" cols="12">
                                <b-form-group>
                                    <b-form-input class="form-control" v-model="domain_name" placeholder="Nhập tên miền cần tìm kiếm" trim></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="2" sm="6" cols="12">
                                <b-form-group>
                                    <b-form-select @change="onChangeCareer" v-model="selected_career" :options="option_career"></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col lg="2" sm="6" cols="12">
                                <b-form-group>
                                    <b-form-select @change="onChangeExtend" v-model="selected_extend" :options="option_extend"></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col lg="4" sm="7" cols="12" >
                                <div class="domain_lenght">
                                  <b-form-group label="Độ dài tên miền">
                                    <RangeSlider
                                        
                                        v-model="range_slider_value"
                                        :min="1"
                                        :max="60"
                                        :step="2"
                                        
                                        class="slider-blue"
                                    />
                                </b-form-group>
                                </div>
                            </b-col>
                            <b-col class="text-center" lg="12" sm="12" cols="12">
                                <b-form-group>
                                    <b-button class="btn btn-submit btn_search c_b_s" variant="primary"><b-icon icon="search"></b-icon>  Tìm kiếm</b-button>
                                </b-form-group>
                            </b-col>
                            
                        </b-row>
                    </b-form>
                </div>
            </b-container>
            
        </div>
        <div class="session-career-domain pt-50 pb-50">
            <b-container>
                <b-row>
                    <b-col lg="3" sm="12" cols="12">
                        <div class="item-career-left">
                            <div class="title-career">
                              Ngành nghề
                            </div>
                            <div class="info-career">
                                <b-form-group
                                v-slot="{ ariaDescribedby }"
                                >
                                <b-form-checkbox
                                    v-for="option in option_filter"
                                    v-model="filter_selected"
                                    :key="option.value"
                                    :value="option.value"
                                    :aria-describedby="ariaDescribedby"
                                    name="flavour-4a"
                                    inline
                                >
                                    {{ option.text }}
                                </b-form-checkbox>
                                </b-form-group>
                            </div>
                        </div>
                    </b-col>
                    <b-col lg="9" sm="12" cols="12">
                        <div class="domain-names-are-for-sale">
                            <div class="item-top-domain-names">
                                <b-row>
                                    <b-col  sm="6" xs="12">
                                        <div class="title-left-domain-names">
                                          <h3>
                                            Tên miền đang rao bán
                                          </h3>
                                          <p>
                                            Có tổng cộng <span>4781</span> tên miền
                                          </p>
                                        </div>
                                    </b-col>
                                    <b-col  sm="6" xs="12">
                                        <div class="btn-submit domain-names c_b_s">
                                          <nuxt-link class="" to="/dang-ban-ten-mien.html">Đăng bán tên miền</nuxt-link>
                                        </div>
                                    </b-col>
                                    
                                </b-row>
                            </div>
                            <div class="item-mid-domain-names">
                                <b-table :items="items" :fields="fields" responsive="xs" >
                                   
                                    <template #cell(id)="row">
                                        
                                        <nuxt-link class="btn btn-primary btn-sm text-white" :to="{ name: 'chi-tiet-ten-mien.html', params: { domainId: row.item.id }}"><b-icon icon="eye"></b-icon> chi tiết</nuxt-link>
                                        
                                    </template>
                                    <template #cell(start_price)="row">
                                       {{ formatCurrency(row.item.start_price) }}
                                    </template>
                                    <template #cell(buy_price)="row">
                                       {{ formatCurrency(row.item.buy_price) }}
                                    </template>
                                    
                                    <template #cell(domain)="row">
                                        <b-button class="show_hide_detail" variant="default" size="sm" @click="row.toggleDetails">
                                            <b-icon v-if="row.detailsShowing" icon="dash-square"></b-icon>
                                            <b-icon v-if="!row.detailsShowing" icon="plus-square"></b-icon>
                                        </b-button>
                                       {{ row.item.domain }} 
                                       
                                        
                                    </template>
                                    <template #row-details="row">
                                        <b-card class="card-table-description">
                                        <ul class="list-description" v-html="filterRercord(row.item)">
                                           
                                        </ul>
                                        </b-card>
                                    </template>
                                    
                                    

                                </b-table>
                                <div class="custom_paging">
                                    <b-pagination
                                        v-model="currentPage"
                                        :total-rows="rows"
                                        :per-page="perPage"
                                        aria-controls="my-table"
                                    ></b-pagination>
                                </div>
                            </div>
                        </div>
                        
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <WhyUs />
        <FAQ />
    </div>
</template>
<script>
  import Vue from 'vue';
  import RangeSlider from '@vueform/slider/dist/slider.vue2.js';
  import { formatCurrency, formatNumber } from "~/utils/number-format";
  import FAQ from "@/components/FAQ";
  import WhyUs from "@/components/WhyUs";
  Vue.use(RangeSlider);  
  export default {
    components:{
        RangeSlider,
        FAQ,
        WhyUs
    },
    computed: {
      state() {
        return this.domain_name.length >= 4
      },
      rows() {
        return this.items.length
      }
      
    },
    data() {
      return {
        range_slider_value: [1,60],
        totalRows:1,
        perPage: 3,
        currentPage: 1,
        domain_name: '',
        filter_selected:[],
        selected_career: null,
        selected_extend: null,
        option_career: [
          { value: null, text: 'Chọn lĩnh vực' },
          { value: 1, text: 'Bất động sản' },
          { value: 2, text: 'Công nghệ' },

        ],
        option_extend: [
          { value: null, text: 'Đuôi tên miền' },
          { value: "COM", text: '.com' },
          { value: "VN", text: '.vn' },

        ],

        option_filter:[
            
            { text: 'Bất động sản', value: 'BDS' },
            { text: 'Công nghệ', value: 'TECH' },
            { text: 'Tài chính', value: 'FINANCE' },
            { text: 'Ăn uống', value: 'FOOD' },    
            { text: 'Trò chơi', value: 'GAME' },    
            { text: 'Tin tức', value: 'NEWS' },    
            { text: 'Mua sắm', value: 'SHOPPING' },    
            { text: 'Mạng xã hội', value: 'SOCIAL' },    
            { text: 'Thể thao', value: 'SPORT' },    
            { text: 'Du lịch', value: 'TOUR' },    
        ],
        fields: [
            {key:"domain", label:"Tên miền"},
            {key:"year", label:"Năm"},
            {key:"backlink", label:"Backlink"},
            {key:"expired_date", label:"Ngày đăng"},
            {key:"start_price", label:"Giá khởi điểm"},
            {key:"buy_price", label:"Giá mua ngay"},
            {key:"id", label:"Hành động"},
            
        ],
        items: [
          { domain: 'master-bo.com', year: 1, backlink: 12, expired_date: '05/08/2021',start_price : "100000000",buy_price: "100000000", registrar:'Nhan Hoa Software Company Ltd.' },
          { domain: "forex101.com", year: 1, backlink: 12, expired_date: '05/08/2021',start_price : "100000000",buy_price: "100000000", registrar:'Công ty 1'  },
          { domain: "master-bo.com", year: 1, backlink: 12, expired_date: '05/08/2021',start_price : "100000000",buy_price: "100000000", registrar:'Nhan Hoa Software Company Ltd.'  },
          { domain: "master-bo.com", year: 1, backlink: 12, expired_date: '05/08/2021',start_price : "100000000",buy_price: "100000000", registrar:'Nhan Hoa Software Company Ltd.'  },
          { domain: "master-bo.com", year: 1, backlink: 12, expired_date: '05/08/2021',start_price : "100000000",buy_price: "100000000", registrar:'Nhan Hoa Software Company Ltd.'  },
          { domain: "master-bo.com", year: 1, backlink: 12, expired_date: '05/08/2021',start_price : "100000000",buy_price: "100000000", registrar:'Nhan Hoa Software Company Ltd.'  },
          { domain: "master-bo.com", year: 1, backlink: 12, expired_date: '05/08/2021',start_price : "100000000",buy_price: "100000000", registrar:'Nhan Hoa Software Company Ltd.'  },
          { domain: "master-bo.com", year: 1, backlink: 12, expired_date: '05/08/2021',start_price : "100000000",buy_price: "100000000", registrar:'Nhan Hoa Software Company Ltd.'  },
          { id: 123123, domain: "123123.com", year: 1, backlink: 12, expired_date: '05/08/2021',start_price : "100000000",buy_price: "100000000", registrar:'Nhan Hoa Software Company Ltd.'  },
          
        ]
        
      }
    },
    methods:{
        formatCurrency,
        onChangeCareer(){
            console.log(this.selected_career);
        },
        onChangeExtend(){
            console.log(this.selected_extend);
        },
        filterRercord(data){
            return `
                <li class="list-description-item">Nhà đăng ký: ${data.registrar}</li>
                <li class="list-description-item">Ngày hết hạn: ${data.expired_date}</li>
                <li class="list-description-item">Danh mục: </li>
                <li class="list-description-item">Mô tả: </li>
                <li class="list-description-item">Tên người bán hàng: </li>
            
            `;
        }
        
    }
  }
</script>
<style lang="scss">
    .slider-blue {
        --slider-connect-bg: #3B82F6;
        --slider-tooltip-bg: #3B82F6;
        --slider-handle-ring-color: #3B82F630;
    }
    .domain_lenght legend {
        margin-top: -20px !important;
        display: block;
        margin-bottom: 13px;
        text-align: center;
    }

    .domain_lenght {
        background: #fff;
        border-radius: 3px;
        height: 56px;
        padding: 0 16px;
    }

    .domain_lenght fieldset {
        margin: 0 !important;
    }
    .list-description {
       border-radius: 5px;
    }
    .list-description-item {
        position: relative;
        display: block;
        padding: 10px 15px;
        margin-bottom: -1px;
        background-color: #fff;
        border: 1px solid #ddd;
    }
    .card-table-description{
        background: #929292;
    }
    
</style>