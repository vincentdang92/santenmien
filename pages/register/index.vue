<template lang="">
    <div id="main">
        <b-container>
            <div class="login-register">
                <div class="title-login-register">
					<h3>
						Đăng ký
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
                        
                        <b-button class="btn_login_fogot c_b_s " type="submit" variant="primary">Đăng ký</b-button>
                        <p class="text-center mt-4">
                            Bạn đã có tài khoản Nhân Hòa? <nuxt-link  to="/dang-nhap.html">Đăng nhập ngay</nuxt-link>
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
                username: '',
                password: '',
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
            
            
        }
    }

}
</script>
<style lang="">
    
</style>