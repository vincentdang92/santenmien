<template>
  <div id="main">
      <div class="session-01">
        <b-container>
          <b-row>
            <b-col  sm="8" xs="12">
              <div class="title-search">
                  Nhập tên miền cần tìm kiếm
                </div>
                <div class="search-input">
                  <b-form @submit.stop.prevent="onSubmit">
                    
                    <b-form-group  v-slot="{ ariaDescribedby }">
                        
                        <b-form-input
                            id="search-domain-input"
                            name="search-domain-input"
                            v-model="$v.form.search.$model"
                            placeholder="Nhập tên miền cần tìm kiếm"
                           
                            :state="validateState('search')"
                            data-vv-as="Tên miền"
                            aria-describedby="input-search-domain-feedback"
                            
                        ></b-form-input>
                        <b-form-invalid-feedback v-if="!$v.form.search.required" id="input-search-domain-feedback">Bạn chưa nhập tên miền</b-form-invalid-feedback>
                        <b-form-invalid-feedback v-if="!$v.form.search.minLength" id="input-search-domain-feedback-min">Độ dài tối thiểu {{$v.form.search.$params.minLength.min}} ký tự.</b-form-invalid-feedback>
                        
                    </b-form-group>
                    <b-button type="submit" variant="primary"><b-icon icon="search" ></b-icon> Tìm kiếm</b-button>
                  </b-form>
                </div>
                <div class="title-com-vn">
                  .com  /  .vn  /  .net  /  .org
                </div>
            </b-col>
            <b-col  sm="4" xs="12">
              <div class="img-right">
                <b-img src="@/assets/images/banner-right.png" fluid-grow alt="Banner" ></b-img>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="session-02 pt-50 pb-50">
        <b-container>
          <b-row>
            <b-col v-for="n in 3" :key="n"  sm="4" xs="12">
              <div class="box-domain">
                  <h3 class="title-domain">
                    Tên miền đang rao bán
                  </h3>
                  <div class="info-domain">
                    <ul>
                      <li>
                        <span>
                          master-bo.com
                        </span>
                        <span>
                          1,000,000 ₫
                        </span>
                      </li>
                      <li>
                        <span>
                          master-bo.com
                        </span>
                        <span>
                          1,000,000 ₫
                        </span>
                      </li>
                      <li>
                        <span>
                          master-bo.com
                        </span>
                        <span>
                          1,000,000 ₫
                        </span>
                      </li>
                      <li>
                        <span>
                          master-bo.com
                        </span>
                        <span>
                          1,000,000 ₫
                        </span>
                      </li>
                      <li>
                        <span>
                          master-bo.com
                        </span>
                        <span>
                          1,000,000 ₫
                        </span>
                      </li>
                      <li>
                        <span>
                          master-bo.com
                        </span>
                        <span>
                          1,000,000 ₫
                        </span>
                      </li>
                      <li>
                        <span>
                          master-bo.com
                        </span>
                        <span>
                          1,000,000 ₫
                        </span>
                      </li>
                      <li>
                        <span>
                          master-bo.com
                        </span>
                        <span>
                          1,000,000 ₫
                        </span>
                      </li>
                      <li>
                        <span>
                          master-bo.com
                        </span>
                        <span>
                          1,000,000 ₫
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="btn-seemore">
                    <a href="">
                      Xem thêm
                      <svg xmlns="http://www.w3.org/2000/svg" width="11.805" height="7.873" viewBox="0 0 11.805 7.873">
                        <path id="Icon_ionic-ios-arrow-round-back" data-name="Icon ionic-ios-arrow-round-back" d="M12.159,11.4a.536.536,0,0,1,0,.754l-2.489,2.5h9.484a.533.533,0,0,1,0,1.066H9.674l2.493,2.5a.54.54,0,0,1,0,.754.531.531,0,0,1-.75,0l-3.379-3.4h0a.6.6,0,0,1-.111-.168.509.509,0,0,1-.041-.205.534.534,0,0,1,.152-.373l3.379-3.4A.522.522,0,0,1,12.159,11.4Z" transform="translate(19.687 19.125) rotate(180)" fill="#fff"/>
                      </svg>
                    </a>
                  </div>

                </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      
      
  </div>
</template>

<script>
import Vue from 'vue';
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
// import { BootstrapVueIcons } from 'bootstrap-vue';
// import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        search: null
      }
    };
  },
  validations: {
    form: {
      search: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods:{
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        search: null,
        
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert(this.form.search);
    }
  }
}
</script>
