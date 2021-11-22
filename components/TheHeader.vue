<template lang="">
    <div id="header">
        <div class="header-top">
            <b-container>
                <b-row>
                    <!-- <b-col  sm="3">
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
								<li v-if="isAuthenticated "  class="notify_menu">
									<b-dropdown
									 	id="dropdown-right"
										split-variant="outline-primary"
										variant="default"
										class="m-2 authenticated_user"
									>
										<template #button-content>
											<b-icon icon="bell-fill"></b-icon>
										</template>
										<b-dropdown-item href="/tai-khoan.html"><b-icon icon="gear"></b-icon> Thông tin cá nhân</b-dropdown-item>
										<b-dropdown-item href="#" @click.prevent="handleLogout"><b-icon variant="danger" icon="power"></b-icon> Đăng xuất</b-dropdown-item>
										
									</b-dropdown>
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
                    </b-col> -->
					<b-col cols="12" lg="12" md="12">
						<b-navbar class="top_menu" toggleable="sm"  type="light" >
							<b-navbar-brand class="home_brand">
								<nuxt-link to="/">
									<b-img src="@/assets/images/logo.png" fluid-grow alt="Logo"></b-img>
								</nuxt-link>
							</b-navbar-brand>
							
							<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

							<b-collapse id="nav-collapse" is-nav>
								<!-- Right aligned nav items -->
								<b-navbar-nav class="ml-auto ">
									<b-nav-item v-if="!isAuthenticated " class="btn_top_menu register c_b_s" href="/">
										<b-icon icon="person-circle"></b-icon> Đăng ký
									</b-nav-item>
									<b-nav-item v-if="!isAuthenticated " class="btn_top_menu c_b_s" href="/dang-nhap.html">
										<b-icon icon="person-bounding-box"></b-icon> Đăng nhập
									</b-nav-item>
									
									<!-- <b-nav-item class="btn_top_menu c_b_s" href="/supports">
										<b-icon icon="headset"></b-icon> Hỗ trợ
									</b-nav-item> -->
									<b-nav-item-dropdown v-if="isAuthenticated " class="notify_menu ml-2" right>
										<template #button-content>
											<b-icon  icon="bell-fill"></b-icon>
											<b-badge class="badge_notify" variant="danger">12</b-badge>
										</template>
										<b-dropdown-item class="notify_list notify_list_title " href="/">
											<div class="notify_list_content">
												<div class="notify_list_content_icon">
													Thông báo
												</div>
												<div class="notify_list_content_time">
													<a class="mark_all_read">Đánh dấu tất cả đã đọc</a>
												</div>
												
											</div>
										</b-dropdown-item>
										<b-dropdown-item  class="notify_list notify_list_main" href="/">
											<div class="notify_list_content">
												<div class="notify_list_content_icon">
													<b-icon variant="primary" class="mr-2" icon="chat-right-dots-fill"></b-icon>
												</div>
												<div class="notify_list_content_middle">
													<strong style="margin-bottom:5px; font-size:14px;">Sàn tên miền</strong>
													<p>Tên miền nhanhoa.com chưa xác nhận bản ghi.Tên miền nhanhoa.com chưa xác nhận bản ghi</p>
												</div>
												<div class="notify_list_content_time">
													 11/14/21 9:01 AM
												</div>
												
											</div>
											
										</b-dropdown-item>
										<b-dropdown-item  class="notify_list notify_list_main" href="/">
											<div class="notify_list_content">
												<div class="notify_list_content_icon">
													<b-icon variant="primary" class="mr-2" icon="chat-right-dots-fill"></b-icon>
												</div>
												<div class="notify_list_content_middle">
													<strong style="margin-bottom:5px; font-size:14px;">Sàn tên miền</strong>
													<p>Tên miền nhanhoa.com chưa xác nhận bản ghi.Tên miền nhanhoa.com chưa xác nhận bản ghi</p>
												</div>
												<div class="notify_list_content_time">
													 11/14/21 9:01 AM
												</div>
												
											</div>
											
										</b-dropdown-item>
										<b-dropdown-item  class="text-center">
											<nuxt-link  to="/">Xem tất cả</nuxt-link>
										</b-dropdown-item>
										
									</b-nav-item-dropdown>

									<b-nav-item-dropdown v-if="isAuthenticated " right>
										<!-- Using 'button-content' slot -->
										<template #button-content>
											<b-avatar badge  badge-variant="success" src="user.jpg"></b-avatar> Lê Thị Bé Na Na
										</template>
										<b-dropdown-item href="/tai-khoan.html"><b-icon icon="gear"></b-icon> Thông tin cá nhân</b-dropdown-item>
										<b-dropdown-item href="#" @click.prevent="handleLogout"><b-icon variant="danger" icon="power"></b-icon> Đăng xuất</b-dropdown-item>
									</b-nav-item-dropdown>
								</b-navbar-nav>
							</b-collapse>
						</b-navbar>
						<!-- <b-sidebar id="sidebar-1"  shadow>
							<div class="" id="sidebar_mobile_menu">
								<ul>
									<li>
										<nuxt-link to="/">Trang chủ</nuxt-link>
									</li>
									<li>
										<nuxt-link to="/ten-mien-rao-ban.html">Tên miền rao bán</nuxt-link>
									</li>
									<li>
										<nuxt-link to="/mua-ten-mien.html">Tên miền muốn mua</nuxt-link>
									</li>
									<li>
										<nuxt-link to="/">Cho thuê tên miền</nuxt-link>
									</li>
									<li>
										<nuxt-link to="/chinh-sach.html">Chính sách</nuxt-link>
									</li>
									
								</ul>
							</div>
						</b-sidebar> -->
					</b-col>
                </b-row>
            </b-container>
        </div>
        <div class="header-menu">
            <b-container>
				<b-row>
					<b-col cols="12">
						<b-navbar class="main_menu" toggleable="sm" type="dark" variant="primary">
							<b-navbar-toggle target="nav-collapse11">
								<b-button v-b-toggle.sidebar-1>
									<b-icon icon="justify"></b-icon>
								</b-button>
							</b-navbar-toggle>
							<b-collapse id="nav-collapse1" is-nav>
								<b-navbar-nav>
									<b-nav-item to="/">Trang chủ</b-nav-item>
									<b-nav-item to="/ten-mien-rao-ban.html">Tên miền rao bán</b-nav-item>
									<b-nav-item href="/mua-ten-mien.html">Tên miền muốn mua</b-nav-item>
									<b-nav-item style="cursor:pointer">Cho thuê tên miền</b-nav-item>
									<b-nav-item href="/chinh-sach.html">Chính sách</b-nav-item>
									<b-nav-item href="#">Hướng dẫn giao dịch</b-nav-item>
									<!-- <b-nav-item href="#">Đăng nhập</b-nav-item>
									<b-nav-item href="#">Đăng ký</b-nav-item> -->
									
								</b-navbar-nav>
							</b-collapse>
						</b-navbar>
					</b-col>
				</b-row>
			</b-container>
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
					window.location = this.$config.loginURL;
				}
			}
			else{
				console.log('invalid loginURL');
			}
		}

	}
}
</script>
<style lang="">
    
</style>