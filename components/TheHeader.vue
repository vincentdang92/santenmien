<template lang="">
    <div id="header">
        <div class="header-top">
            <b-container>
                <b-row>
                    <b-col  sm="3">
						<nuxt-link to="/">
							<b-img src="@/assets/images/logo.png" fluid-grow alt="Logo"></b-img>
						</nuxt-link>
                    </b-col>
                    <b-col  sm="9">
                        <div class="btn-login">
							<ul>
								<li class="login  ">
									<a class="c_b_s btn_support" href="#">
									<b-icon icon="headset"></b-icon> Hỗ trợ
									</a>
								</li>
							</ul>
						</div>
						<div class="btn-login">
							<ul>
								<li v-if="!isAuthenticated " class="register">
									<a class="c_b_s" :href="`${$config.baseURL}/dang-ky.html`"><b-icon  icon="person-circle"></b-icon>  Đăng ký</a>
								</li>
								<li v-if="!isAuthenticated "  class="login">
									<a class="c_b_s" @click.prevent="handleLogin"><b-icon  icon="person-bounding-box"></b-icon>  Đăng nhập</a>
								</li>
								
								<li v-if="isAuthenticated">
									<b-dropdown
									 	id="dropdown-right"
										split-variant="outline-primary"
										variant="default"
										class="m-2 authenticated_user"
									>
										<template #button-content>
											<b-avatar badge  badge-variant="success" src="user.jpg"></b-avatar> Lê Thị Bé Na Na
										</template>
										<b-dropdown-item href="/tai-khoan.html"><b-icon icon="gear"></b-icon> Thông tin cá nhân</b-dropdown-item>
										<b-dropdown-item href="#" @click.prevent="handleLogout"><b-icon variant="danger" icon="power"></b-icon> Đăng xuất</b-dropdown-item>
										
									</b-dropdown>
								</li>
							</ul>
						</div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="header-menu">
            <div class="container">
				<div class="vmenu_link">
				    <nav  id="click_show" class="nav-bar">
				        <div class="toggle-menu">
				            <div class="line line1"></div>
				            <div class="line line2"></div>
				            <div class="line line3"></div>
				        </div>
				        
				        <div class="target_show">
				        	<button class="close_show">
						        x
						    </button>
				            <ul class="nav-list">
				                 <li class="nav-list-item">
								  <nuxt-link to="/" class="nav-link">Trang chủ</nuxt-link>
				              	</li>
				                <li class="nav-list-item">
									<nuxt-link class="nav-link" to="/ten-mien-rao-ban.html">Tên miền rao bán</nuxt-link>
				              	</li>
				                <li class="nav-list-item">
				                  <nuxt-link class="nav-link" to="/mua-ten-mien.html">Tên miền muốn mua</nuxt-link>
				              	</li>
				                <li class="nav-list-item">
									<a class="nav-link" style="cursor:pointer">Cho thuê tên miền</a>
				                </li>
				                <li class="nav-list-item">
				                  <a href="" class="nav-link">Chính sách</a>
				              	</li>
				                <li class="nav-list-item">
				                    <a href="" class="nav-link">Hướng dẫn giao dịch</a>
				                </li>
				                
				            </ul>
				        </div>
				    </nav>
				</div>
			</div>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
		isAuthenticated() {
			return this.$store.getters['auth/isAuthenticated']
		}
	},
	methods:{
		async handleLogout() {
			if( this.$config.logoutURL ){
				const doLogout = await this.$store.dispatch('auth/logout');
				if( doLogout ) {
					this.$cookies.set('returnUrl','santenmien.nhanhoa.com',{
						path:'/',
						domain:'.nhanhoa.com',
						maxAge: 60 * 60 * 24 * 7,
						sameSite: 'strict'
						
					});
					if( this.$cookies.get('returnUrl') == 'santenmien.nhanhoa.com' ){
						window.location = this.$config.logoutURL;
					}
					// this.$router.push('/');
				}
			}
    	},
		async handleLogin(){
			if( this.$config.loginURL ){
				let returnURL = this.$cookies.get('returnUrl');
				if( returnURL == undefined || returnURL == null  ){
					this.$cookies.set('returnUrl','santenmien.nhanhoa.com',{
						path:'/',
						domain:'.nhanhoa.com',
						maxAge: 60 * 60 * 24 * 7,
						sameSite: 'strict'
						
					});
					if( this.$cookies.get('returnUrl') ){
						window.location = this.$config.loginURL;
					}
					else{
						console.log('invalid return url');
					}
				}else{
					console.log('valid return url');
				}
			}
			else{
				window.location = this.$config.loginURL;
			}
		}

	}
}
</script>
<style lang="">
    
</style>