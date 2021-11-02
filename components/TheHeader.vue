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
                        <div class="menu-top">
							<ul>
								<li>
									<a href="#">
										Hỗ trợ
									</a>
								</li>
							</ul>
						</div>
						<div class="btn-login">
							<ul>
								<li class="register">
									<nuxt-link to="/dang-ky.html"><b-icon  icon="person-circle"></b-icon>  Đăng ký</nuxt-link>
								</li>
								<li class="login">
									<nuxt-link to="/dang-ky.html"><b-icon  icon="person-bounding-box"></b-icon>  Đăng nhập</nuxt-link>
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
									<nuxt-link class="nav-link" to="/tim-kiem-ten-mien.html">Tên miền đang bán</nuxt-link>
				              	</li>
				                <li class="nav-list-item">
				                  <nuxt-link class="nav-link" to="/mua-ten-mien.html">Tên miền muốn mua</nuxt-link>
				              	</li>
				                <li class="nav-list-item">
									<nuxt-link class="nav-link" to="/ban-ten-mien.html">Cho thuê tên miền</nuxt-link>
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
    
}
</script>
<style lang="">
    
</style>