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
                                    <!-- <template #thead-top="data">
                                        <b-tr>
                                            <b-th><span class="sr-only"></span>Tên miền</b-th>
                                            <b-th><span class="sr-only"></span>Năm</b-th>
                                            <b-th><span class="sr-only"></span>Backlink</b-th>
                                            <b-th><span class="sr-only"></span>DA</b-th>
                                            <b-th><span class="sr-only"></span>Ngày đăng</b-th>
                                            <b-th><span class="sr-only"></span>Giá khởi điểm</b-th>
                                            <b-th><span class="sr-only"></span>Giá mua ngay</b-th>
                                            <b-th><span class="sr-only"></span>Hành động</b-th>
                                            
                                        </b-tr>
                                    </template> -->
                                    <template #cell(actions)="row">
                                        <b-button variant="primary" size="sm" class="mr-1">
                                            Xem chi tiết
                                        </b-button>
                                        
                                    </template>
                                    <template #cell(domain)="data">
                                    <b-icon icon="exclamation-circle-fill" variant="info"></b-icon> {{ data.value }} 
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
        <div class="session-03 pb-50">
        <b-container>
          <div class="why">
            <div class="title-all">
              <h3>
                vì sao nên chọn chúng tôi
              </h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div class="info-why">
            <b-row>
              <b-col v-for="n in 4" :key="n*2" lg="3" sm="6" cols="12">
                <div class="item-why">
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="47.628" height="46" viewBox="0 0 47.628 46">
                        <g id="discount" transform="translate(0 -8.749)">
                          <path id="Path_8198" data-name="Path 8198" d="M149.781,131.546l4.581.009.66-.5.008-.006a11.231,11.231,0,1,0-17.971-8.984,11.267,11.267,0,0,0,3.224,7.875A19.53,19.53,0,0,1,149.781,131.546Zm4.151-4.987a1.461,1.461,0,1,1-1.461-1.461A1.461,1.461,0,0,1,153.932,126.559Zm-3.94-7.871a1.439,1.439,0,0,1,2.035,2.035l-5.437,5.437a1.439,1.439,0,0,1-2.034-2.035Zm-5.881-1.892a1.461,1.461,0,1,1-1.461,1.461A1.461,1.461,0,0,1,144.111,116.8Z" transform="translate(-124.31 -92.585)" fill="#0085f1"/>
                          <path id="Path_8199" data-name="Path 8199" d="M45.615,349.577a2.494,2.494,0,0,0-4.477-.94s-4.4,5.5-4.654,5.742a5.361,5.361,0,0,1-3.741,1.542l-11.728.054h-.007A1.439,1.439,0,0,1,21,353.1l11.725-.054a2.485,2.485,0,0,0-.01-4.971l-7.563-.015a1.471,1.471,0,0,1-.619-.141,16.24,16.24,0,0,0-17.092,2.021,1.438,1.438,0,0,1-.929.34H0v6.475l7.1.075a4.648,4.648,0,0,1,1.481.261c2.572.9,10.211,3.626,10.211,3.626a4.271,4.271,0,0,0,1.455.255H35.134a4.271,4.271,0,0,0,3.257-1.508l6.836-8.061a2.42,2.42,0,0,0,.387-1.824Z" transform="translate(0 -306.221)" fill="#0085f1"/>
                          <path id="Path_8200" data-name="Path 8200" d="M3.211,18.962l6.158,4.5a1.439,1.439,0,0,0,1.7-2.323l-6.158-4.5a1.439,1.439,0,0,0-1.7,2.323Z" transform="translate(-2.378 -6.905)" fill="#0085f1"/>
                          <path id="Path_8201" data-name="Path 8201" d="M143.657,13.038a1.439,1.439,0,1,0,2.281-1.754L144.42,9.311a1.439,1.439,0,0,0-2.281,1.754Z" transform="translate(-128.646)" fill="#0085f1"/>
                          <path id="Path_8202" data-name="Path 8202" d="M1.175,158.977l3.794.708a1.439,1.439,0,0,0,.528-2.828L1.7,156.148a1.439,1.439,0,0,0-.528,2.828Z" transform="translate(0 -133.665)" fill="#0085f1"/>
                          <path id="Path_8203" data-name="Path 8203" d="M4.725,272.685l-3.541,1.973a1.439,1.439,0,1,0,1.4,2.513L6.125,275.2a1.439,1.439,0,1,0-1.4-2.513Z" transform="translate(-0.404 -239.219)" fill="#0085f1"/>
                          <path id="Path_8204" data-name="Path 8204" d="M413.693,23.743a1.432,1.432,0,0,0,.848-.277l6.158-4.5a1.439,1.439,0,1,0-1.7-2.323l-6.158,4.5a1.439,1.439,0,0,0,.85,2.6Z" transform="translate(-373.904 -6.906)" fill="#0085f1"/>
                          <path id="Path_8205" data-name="Path 8205" d="M323.475,13.3a1.438,1.438,0,0,0,2.017-.263l1.518-1.973a1.439,1.439,0,1,0-2.281-1.754l-1.518,1.973A1.439,1.439,0,0,0,323.475,13.3Z" transform="translate(-292.875 0)" fill="#0085f1"/>
                          <path id="Path_8206" data-name="Path 8206" d="M445.247,156.148l-3.794.708a1.439,1.439,0,1,0,.528,2.828l3.794-.708a1.439,1.439,0,0,0-.528-2.828Z" transform="translate(-399.322 -133.665)" fill="#0085f1"/>
                        </g>
                      </svg>
                    </div>
                    <h4 class="title-item-why">
                      Hoa hồng thấp nhất
                    </h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa…
                    </p>
                  </div>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </div>
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
                    <b-button class="text-left" block v-b-toggle.accordion-1 variant="info">Tôi có rất nhiều tên miền muốn bán, làm sao đăng lên Nhanh nhất </b-button>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
		                                explicabo. Nemo enim ipsam voluptatem quia…
                      </b-card-text>
                      
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button class="text-left" block v-b-toggle.accordion-2 variant="info">Tên miền tôi đăng bán (mua) được giới thiệu qua phương thức nào</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
		                                explicabo. Nemo enim ipsam voluptatem quia…
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button class="text-left" block v-b-toggle.accordion-3 variant="info">Tại sao tôi không thăng phiên đặt giá, khi tôi đặt giá cao nhất</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
		                                explicabo. Nemo enim ipsam voluptatem quia…
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import RangeSlider from '@vueform/slider/dist/slider.vue2.js';
    Vue.use(RangeSlider);  
  export default {
    components:{
        RangeSlider
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
            {key:"date_1", label:"Ngày đăng"},
            {key:"start_price", label:"Giá khởi điểm"},
            {key:"buy_price", label:"Giá mua ngay"},
            {key:"actions", label:"Hành động"},
            
        ],
        items: [
          { domain: 'master-bo.com', year: 1, backlink: 12, date_1: '05/08/2021',start_price : "100.000.000",buy_price: "100.000.000"  },
          { domain: "master-bo.com", year: 1, backlink: 12, date_1: '05/08/2021',start_price : "100.000.000",buy_price: "100.000.000"  },
          { domain: "master-bo.com", year: 1, backlink: 12, date_1: '05/08/2021',start_price : "100.000.000",buy_price: "100.000.000"  },
          { domain: "master-bo.com", year: 1, backlink: 12, date_1: '05/08/2021',start_price : "100.000.000",buy_price: "100.000.000"  },
          { domain: "master-bo.com", year: 1, backlink: 12, date_1: '05/08/2021',start_price : "100.000.000",buy_price: "100.000.000"  },
          { domain: "master-bo.com", year: 1, backlink: 12, date_1: '05/08/2021',start_price : "100.000.000",buy_price: "100.000.000"  },
          { domain: "master-bo.com", year: 1, backlink: 12, date_1: '05/08/2021',start_price : "100.000.000",buy_price: "100.000.000"  },
          { domain: "master-bo.com", year: 1, backlink: 12, date_1: '05/08/2021',start_price : "100.000.000",buy_price: "100.000.000"  },
          { domain: "master-bo.com", year: 1, backlink: 12, date_1: '05/08/2021',start_price : "100.000.000",buy_price: "100.000.000"  },
          
        ]
        
      }
    },
    methods:{
        onChangeCareer(){
            console.log(this.selected_career);
        },
        onChangeExtend(){
            console.log(this.selected_extend);
        },
        
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
</style>