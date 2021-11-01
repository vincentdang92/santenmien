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
                <div class="input-search-domain">
                    <b-form >
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
                            <b-col lg="1" sm="3" cols="12">
                                <b-form-group>
                                    <b-form-select @change="onChangeExtend" v-model="selected_extend" :options="option_extend"></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col lg="2" sm="7" cols="12">
                                <b-form-group>
                                    <b-form-select @change="onChangeExtend" v-model="selected_extend" :options="option_extend"></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col lg="2" sm="2" cols="12">
                                <b-form-group>
                                    <b-button class="btn btn-submit" variant="primary">  Tìm kiếm</b-button>
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
                                        <div class="btn-submit domain-names">
											<a href="">
												Đăng bán tên miền
											</a>
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
        
    </div>
</template>
<script>
import Vue  from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

  export default {
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
        perPage: 3,
        currentPage: 1,
        domain_name: '',
        filter_selected:[],
        selected_career: null,
        selected_extend: "COM",
        option_career: [
          { value: null, text: 'Ngành nghề' },
          { value: 1, text: 'Bất động sản' },
          { value: 2, text: 'Công nghệ' },

        ],
        option_extend: [
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
<style lang="">
    
</style>