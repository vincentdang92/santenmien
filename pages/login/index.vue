<template lang="">
    <div id="main">
        <b-container>
            <div class="login-register">
                <div class="title-login-register">
					<h3>
						đăng nhập
					</h3>
					<p>
						Một tài khoản sử dụng cho tất cả các dịch vụ của Nhanhoa
					</p>
				</div>
                <div class="info-login-register">
                    <b-form @submit="onSubmit">
                        <b-form-group
                            id="input-group-1"
                            label="Tên đăng nhập:"
                            label-for="input-1"
                            
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.username"
                            type="text"
                            placeholder="Nhập email hoặc tên đăng nhập"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-2"
                            label="Mật khẩu:"
                            label-for="input-2"
                            
                        >
                            <b-form-input
                            id="input-2"
                            v-model="form.password"
                            type="password"
                            placeholder="Nhập mật khẩu"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-remember" v-slot="{ ariaDescribedby }">
                            <b-form-checkbox-group
                                class="checkbox-login"
                                v-model="form.checked"
                                id="checkboxes-4"
                                :aria-describedby="ariaDescribedby"
                                >
                                <b-form-checkbox value="rememberme">Duy trì đăng nhập</b-form-checkbox>
                                <nuxt-link class="float-right" to="/quen-mat-khau.html">Quên mật khẩu?</nuxt-link>
                            </b-form-checkbox-group>
                        </b-form-group>
                        <b-button class="btn_login_fogot c_b_s " type="submit" variant="primary">Đăng nhập</b-button>
                        <p class="text-center mt-4">
                            Bạn chưa có tài khoản để sử dụng dịch vụ của Nhanhoa? <nuxt-link  to="/dang-ky.html">Đăng ký ngay</nuxt-link>
                        </p>
                    </b-form>
                </div>
            </div>
        </b-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                username: 'huynhvanbaoguitar@gmail.com',
                password: 'computers123@123',
                checked: []
            }
        }
    },
    methods:{
        async onSubmit(event){
            event.preventDefault();
            console.log(this.form);
            if(this.form.username.length <= 3 || this.form.password.length <= 6){
                this.$store.dispatch('snackbar/setSnackbar', {type: 'warning', text:'Tên đăng nhập hoặc mật khẩu không đúng định dạng!'});
            }
            await this.$axios.$post('https://id.nhanhoa.com/login/do',this.form).
             then((response) => {        
                console.log(response);
            })
            .catch(({ response: err }) => {
                
                console.log(err);
                
            })
            
        }
    }

}
</script>
<style lang="">
    
</style>