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
                    
                    <b-form-group :class="{ 'form-group--error': $v.form.search.$error }"  v-slot="{ ariaDescribedby }">
                        
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
                    <a class="btn-primary c_b_s" href="">
                      Xem thêm
                      <b-icon icon="arrow-right"></b-icon>
                    </a>
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
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import FAQ from "@/components/FAQ";
import WhyUs from "@/components/WhyUs";


export default {
  mixins: [validationMixin],
  components: { FAQ, WhyUs },
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
      this.$v.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      //send data
      //alert('success');
      this.$store.dispatch('snackbar/setSnackbar', {type: 'success', text:this.form.search});
      
    }
  }
}
</script>
