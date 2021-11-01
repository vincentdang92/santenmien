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
									<a href="dangky.html">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										  <g id="vuesax_linear_message-edit" data-name="vuesax/linear/message-edit" transform="translate(-236 -378)">
										    <g id="message-edit">
										      <path id="Vector" d="M14,0H6Q0,0,0,6V19a1,1,0,0,0,1,1H14q6,0,6-6V6Q20,0,14,0Z" transform="translate(238 380)" fill="none" stroke="#002f8a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
										      <g id="Group">
										        <path id="Vector-2" data-name="Vector" d="M5.913.838.723,6.028a1.788,1.788,0,0,0-.43.87l-.28,1.98A.939.939,0,0,0,1.133,10l1.98-.28a1.789,1.789,0,0,0,.87-.43L9.173,4.1a2,2,0,0,0,0-3.25A2,2,0,0,0,5.913.838Z" transform="translate(242.997 385.002)" fill="none" stroke="#002f8a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
										        <path id="Vector-3" data-name="Vector" d="M0,0A4.688,4.688,0,0,0,3.25,3.25" transform="translate(248.17 386.58)" fill="none" stroke="#002f8a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
										      </g>
										      <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(236 378)" fill="none" opacity="0"/>
										    </g>
										  </g>
										</svg>
										Đăng ký
									</a>
								</li>
								<li class="login">
									<a href="dangnhap.html">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										  <g id="vuesax_linear_user-tag" data-name="vuesax/linear/user-tag" transform="translate(-556 -188)">
										    <g id="user-tag">
										      <path id="Vector" d="M15,16.85h-.76a2.988,2.988,0,0,0-2.12.87l-1.71,1.69a2.022,2.022,0,0,1-2.83,0L5.87,17.72a3,3,0,0,0-2.12-.87H3a2.983,2.983,0,0,1-3-2.97V2.97A2.983,2.983,0,0,1,3,0H15a2.983,2.983,0,0,1,3,2.97V13.88A2.99,2.99,0,0,1,15,16.85Z" transform="translate(559 190.01)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
										      <g id="Group">
										        <path id="Vector-2" data-name="Vector" d="M4.66,2.33A2.33,2.33,0,1,1,2.33,0,2.33,2.33,0,0,1,4.66,2.33Z" transform="translate(565.67 193.34)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
										        <path id="Vector-3" data-name="Vector" d="M8,3.26C8,1.46,6.21,0,4,0S0,1.46,0,3.26" transform="translate(564 200.4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
										      </g>
										      <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(556 188)" fill="none" opacity="0"/>
										    </g>
										  </g>
										</svg>
										Đăng nhập
									</a>
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
									<nuxt-link class="nav-link" to="/tim-kiem-ten-mien.html">Tìm tên miền</nuxt-link>
				              	</li>
				                <li class="nav-list-item">
				                  <nuxt-link class="nav-link" to="/mua-ten-mien.html">Mua tên miền</nuxt-link>
				              	</li>
				                <li class="nav-list-item">
				                    
									<nuxt-link class="nav-link" to="/ban-ten-mien.html">Bán tên miền</nuxt-link>
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