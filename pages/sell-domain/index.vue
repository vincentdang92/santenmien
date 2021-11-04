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
                        <b-form class="form_normal">
                            <b-row class="row_form">
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
                                <b-col class="pb-0" cols="12" lg="2" sm="2">
                                    <div class="btn-add">
                                        <b-button @click.prevent="addDomain" ><b-icon  icon="plus-circle-fill" ></b-icon></b-button>
                                    </div>
                                </b-col>
                                
                            </b-row>
                            <b-row>
                                <b-col class="mt-2 text-center" cols="12">
                                    <b-button class="btn-sell-domain-names" type="submit" variant="primary">Đăng tên miền</b-button>
                                </b-col>
                                
                            </b-row>
                        </b-form>
                    </div>
                </div>
                
                
            </b-container>
        </div>
        <div class="bottom-sell-domain-names mt-50">
            <b-container>
                <div class="table-sell-domain-names">
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
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                        {{ data.index + 1 }}
                    </template>
                    <template #cell(actions)="row">
                        <b-button variant="outline-danger" size="sm" class="mr-1">
                            Xóa
                        </b-button>
                        
                    </template>
                    <template #cell(domain)="data">
                        <b-icon icon="globe" variant="info"></b-icon> {{ data.value }} 
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
            </b-container>
        </div>
        <WhyUs />
        <FAQ />
    </div>
</template>
<script>
import FAQ from "@/components/FAQ";
import WhyUs from "@/components/WhyUs";
export default {
    components: { FAQ, WhyUs },
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
          
        ],
        fields: [
        
            {key:"index", label:"STT"},
            {key:"domain", label:"Tên miền"},
            {key:"owner", label:"Chủ thể"},
            {key:"registrar", label:"Nhà đăng ký"},
            {key:"register_date", label:"Ngày đăng ký"},
            {key:"expired_date", label:"Ngày hết hạn"},
            {key:"year_old", label:"Tuổi"},
            {key:"txt_record", label:"Giá trị bản ghi TXT"},
            {key:"actions", label:"Hành động"},
            
        ],
        items: [
          { domain: 'Nhanhoa.com.vn', owner: 'Công ty TNHH Phần mềm Nhân Hòa', registrar: 'Công ty TNHH Phần mềm Nhân Hòa', register_date: '05/08/2021',expired_date: '05/08/2022',year_old: 20,txt_record: 'i2ijjA21cXzB3NneZ5Zj' },
          { domain: 'Nhanhoa.com.vn', owner: 'Công ty TNHH Phần mềm Nhân Hòa', registrar: 'Công ty TNHH Phần mềm Nhân Hòa', register_date: '05/08/2021',expired_date: '05/08/2022',year_old: 20,txt_record: 'i2ijjA21cXzB3NneZ5Zj' },
         
        ]
      }
    },
    methods:{
        addDomain(){

        }
    }
}
</script>
<style lang="">
    
</style>