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
							Nếu Quý khách gặp khó khăn khi phải trỏ bản ghi nhiều tên miền, vui lòng gửi danh sách tên miền về địa chỉ  santenmien@nhanhoa.com để chúng tôi hỗ trợ đăng tên miền.
						</p>
					</div>
                    <div class="info-sell-domain-names">
                        <b-form class="form_normal" @submit.stop.prevent="onSubmit">
                            <b-row class="row_form">
                                <b-col cols="12" lg="5" sm="5">
                                     <b-form-group
                                        label="Tên miền muốn bán"
                                        label-for="input-formatter"
                                        >
                                        <b-form-input
                                            id="input-domain"
                                            v-model="form.domain"
                                            placeholder="Tên miền muốn bán"
                                            
                                        ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" lg="2" sm="2">
                                    <b-form-group
                                        label="Thuộc lĩnh vực"
                                        label-for="select-career"
                                        >
                                        <b-form-select id="select-career"  v-model="form.career" :options="option_career">

                                    </b-form-select>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" lg="2" sm="2">
                                     <b-form-group
                                        label="Giá khởi điểm"
                                        label-for="input-formatter"
                                        >
                                        <b-form-input
                                            type="text"
                                            id="input-start_price"
                                            v-model="form.start_price"
                                            :min="0"
                                            :formatter="formatValueToPrice"
                                        ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" lg="2" sm="2">
                                     <b-form-group
                                        label="Giá mua ngay"
                                        label-for="input-buy_price"
                                        >
                                        <b-form-input
                                            type="text"
                                            id="input-buy_price"
                                            v-model="form.buy_price"
                                            :min="0"
                                            :formatter="formatValueToPrice"
                                        ></b-form-input>
                                    </b-form-group>
                                </b-col>    
                                <b-col class="pb-0" cols="12" lg="1" sm="1">
                                    <div class="btn-add">
                                        <b-button class="text-white ml-2" variant="primary" @click.prevent="addMoreDomain" > <b-icon icon="plus-circle-fill"></b-icon></b-button>
                                    </div>
                                </b-col>
                                <b-col cols="12" md="12" lg="12">
                                    <div class="row_sell">
                                        <b-table head-variant="light" class="mt-4" striped hover :items="item_domains" :fields="field_domains" responsive="sm">
                                            <template #cell(index)="data">
                                                {{ data.index + 1 }}
                                            </template>
                                            <template #cell(start_price)="row">
                                                {{ formatCurrency(row.item.start_price) }}
                                            </template>
                                            <template #cell(buy_price)="row">
                                                {{ formatCurrency(row.item.buy_price) }}
                                            </template>
                                            <template #cell(career)="row">
                                                <b-badge v-if="row.item" pill variant="primary">{{ row.item.career == 1 ? 'Bất động sản' : 'Công nghệ' }}</b-badge>
                                            </template>

                                            <template #cell(actions)="row">
                                                <b-button @click.prevent="handleRemoveRecord(row.item.key)" variant="outline-danger" size="sm" class="mr-1 c_b_s">
                                                    Xóa
                                                </b-button>
                                                
                                            </template>
                                        </b-table>
                                        
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col class="mt-2 text-center" cols="12">
                                    <b-button class="btn-sell-domain-names c_b_s" type="submit" variant="primary">Đăng tên miền</b-button>
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
                    <b-table   :items="items" :fields="fields"  responsive="sm" striped >
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
                    <template #table-colgroup="scope">
                        <col
                        v-for="field in scope.fields"
                        :key="field.key"
                        :style="{ width: field.key === 'index' ? '4%' : ( field.key == 'domain' ? '15%' : (field.key == 'owner' || field.key == 'registrar' || field.key == 'txt_record' ? '15%' : '') ) }"
                        >
                    </template>
                    <template #cell(index)="data">
                        {{ data.index + 1 }}
                    </template>
                    
                    
                    <template #cell(actions)="row">
                        <b-button variant="outline-danger" size="sm" class="mr-1 c_b_s">
                            Xóa
                        </b-button>
                        
                    </template>
                    <template #cell(domain)="data">
                        <b-icon icon="globe" variant="info"></b-icon> {{ data.value }} 
                    </template>
                </b-table>
                <div class="custom_paging">
                    <b-pagination
                        pills 
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="my-table"
                        align="center"
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
import { formatCurrency, formatNumber, checkValidDomain  } from "~/helpers/libs";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
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
        adv_domain_name:'',
        selected_find_type: 1,
        price_range:1000000,
        domain_data: [],
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
            {key:"year_old", label:"Tuổi", class: 'text-center'},
            {key:"txt_record", label:"Giá trị bản ghi TXT", class: 'text-center'},
            {key:"actions", label:"Hành động", class: 'text-center'},
        ],
        items: [
          { domain: 'Nhanhoa.com.vn', owner: 'Công ty TNHH Phần mềm Nhân Hòa', registrar: 'Công ty TNHH Phần mềm Nhân Hòa', register_date: '05/08/2021',expired_date: '05/08/2022',year_old: 20,txt_record: 'i2ijjA21cXzB3NneZ5Zj' }
        ],
        field_domains: [
            {key:"index", label:"STT"},
            {key:"domain", label:"Tên miền"},
            {key:"career", label:"Ngành nghề"},
            {key:"start_price", label:"Giá khởi điểm"},
            {key:"buy_price", label:"Giá mua ngay"},
            {key:"actions", label:"Hành động", class: 'text-center'},
            
        ],
        item_domains: [],
        form:{
            domain: '',
            career: null,
            start_price: this.formatNumber(1000000),
            buy_price: this.formatNumber(5000000),
        },
        selected: [],
        item_domain_length: 0
        
      }
    },
    methods:{
        formatCurrency,
        checkValidDomain,
        formatNumber,
        addMoreDomain(event){
            event.preventDefault();
            let check_domain = checkValidDomain(this.form.domain);
            if(this.form.domain.length == 0 || !check_domain){
                this.$store.dispatch('snackbar/setSnackbar', {type: 'warning', text:'Vui lòng nhập tên miền đúng định dạng'});
                return;
            }
            if(!this.form.career){
                this.$store.dispatch('snackbar/setSnackbar', {type: 'warning', text:'Vui lòng chọn lĩnh vực'});
                return;
            }
            let check_exist_domain = this.item_domains.filter(item => item.domain === this.form.domain);
            if(check_exist_domain.length > 0){
                check_exist_domain = check_exist_domain[0];
                this.$store.dispatch('snackbar/setSnackbar', {type: 'warning', text:`Đã có tên miền ${check_exist_domain.domain}`});
                return;
            }
            
            let key = this.item_domain_length;
            this.item_domains.push(
                {
                    key : key,
                    domain : this.form.domain,
                    career : this.form.career,
                    start_price : this.form.start_price.replace(/\./gi,""),
                    buy_price : this.form.buy_price.replace(/\./gi,""),
                }
            );
            this.item_domain_length++;
            
            this.resetForm();
        },
        async onSubmit(event){
            console.log(this.item_domains);
        },
        resetForm(){
            this.form.domain = '';
            this.form.career = null;
        },
        async handleRemoveRecord(key){
            //let data = this.item_domains;
            console.log(this.item_domains);
            console.log(key);
            let result = this.item_domains.filter(item => item.key != key);
            this.item_domains = result;
        },
        formatValueToPrice(value){
           value = value.replace(/\./g, "");
            //value = parseFloat(value);
            console.log(value, 'test');//
           return this.formatNumber(value);
        }
    }
}
</script>
<style lang="">
    
</style>