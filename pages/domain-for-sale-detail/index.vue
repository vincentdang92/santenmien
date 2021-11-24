<template lang="">
    <div id="main">
        <div class="session-details-domain-names pt-50 pb-50">
			
            <b-container>
                <b-row>
                    <b-col sm="6" cols="12">
                        <div class="item-details-domain-names details-domain-names-left">
							<div class="title-item-details-domain-names">
								Thông tin tên miền
							</div>
							<div class="info-details-domain-names">
								<p class="name">
									Thông tin tên miền: <strong>noidung.net</strong>
								</p>
								<p>
									Nhà đăng ký: <strong>Nhân Hòa</strong>
								</p>
								<p>
									Chủ thể:<strong> Công ty TNHH Phần mềm Nhân Hòa</strong>
								</p>
								<p>
									Tài khoản bán: <strong>Công ty TNHH Phần mềm Nhân Hòa</strong>
								</p>
								<p>
									Giá khởi điểm: <strong>20,000,000 ₫</strong>
								</p>
								<p>
									Lượt xem:<strong> 4</strong>
								</p>
								<p>
									Tuổi:
								</p>
								<p>
									Backlink:
								</p>
								<p>
									DA(Domain Authority):
								</p>
								<p>
									<strong>Mô tả: #noidung </strong>
								</p>
							</div>
							<div class="btn-update-information-follow">
								<div class="btn-update-information">
									<a class="b_r_2 c_b_s" href="">
										<b-icon icon="check-circle-fill"></b-icon>
										Cập nhật thông tin
									</a>
								</div>
								<div class="btn-follow ">
									<a class="b_r_2 c_b_s" href="">
										<b-icon icon="heart-fill"></b-icon>
										Theo dõi
									</a>
								</div>

							</div>
						</div>
                    </b-col>
                    <b-col sm="6" cols="12">
						<div class="item-details-domain-names details-domain-names-right">
							<div class="title-item-details-domain-names">
								Tên miền cùng Người bán
							</div>
							<div class="item-mid-domain-names">
								<b-table :items="items" :fields="fields" responsive="xs" >
                                    <template #cell(price)="data">
                                      {{ formatCurrency(data.item.price) }}
                                    </template>
                                </b-table>
							</div>

						</div>
                    </b-col>
                    
                </b-row>
            </b-container>
        </div>
		<div class="session-comment">
			<b-container>
				<div class="item-comment">
					<div class="title-comment">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						  <g id="vuesax_bold_messages" data-name="vuesax/bold/messages" transform="translate(-556 -316)">
						    <g id="messages">
						      <path id="Vector" d="M0,0H24V24H0Z" transform="translate(556 316)" fill="none" opacity="0"/>
						      <path id="Vector-2" data-name="Vector" d="M11.19,0H4.79a6.065,6.065,0,0,0-.75.04C1.35.27,0,1.86,0,4.79v4c0,4,1.6,4.79,4.79,4.79h.4a.924.924,0,0,1,.64.32l1.2,1.6a1.132,1.132,0,0,0,1.92,0l1.2-1.6a.805.805,0,0,1,.64-.32h.4c2.93,0,4.52-1.34,4.75-4.04a6.065,6.065,0,0,0,.04-.75v-4Q15.98,0,11.19,0ZM4.5,8a1,1,0,1,1,1-1A1,1,0,0,1,4.5,8ZM7.99,8a1,1,0,1,1,1-1A1,1,0,0,1,7.99,8Zm3.5,0a1,1,0,1,1,1-1A1,1,0,0,1,11.49,8Z" transform="translate(558 322)" fill="#003cb5"/>
						      <path id="Vector-3" data-name="Vector" d="M15.351,4.79v4c0,2-.62,3.36-1.86,4.11a.438.438,0,0,1-.65-.41l.01-3.7c0-4-2.29-6.29-6.29-6.29l-6.09.01a.438.438,0,0,1-.41-.65C.811.62,2.171,0,4.161,0h6.4Q15.346,0,15.351,4.79Z" transform="translate(562.629 318)" fill="#003cb5"/>
						    </g>
						  </g>
						</svg>
						Bình luận cho tên miền này
					</div>

					<div class="info-comment">
						<div class="content-comment">
							<span>Chưa có bình luận</span>
						</div>
						<div class="comment-input">

							<b-form>
								<div class="form-group">
								    <b-form-input
										id="textarea"
										v-model="comment_text"
										placeholder="Viết bình luận tại đây..."
										rows="3"
										max-rows="6"
										></b-form-input>
								</div>
								<button type="submit" class="btn btn-submit b_r_2 c_b_s"><b-icon icon="cursor-fill"></b-icon> Gửi</button>
							</b-form>
						</div>
					</div>
				</div>
			</b-container>
		</div>
		
		<FAQ />
    </div>
</template>
<script>
import FAQ from "@/components/FAQ";
import WhyUs from "@/components/WhyUs";
import { formatCurrency, formatNumber } from "~/utils/libs";
export default {
    components:{
		FAQ,
		WhyUs
    },
	data(){
		return{
			params: '',
			comment_text:'',
			items: [
				{ id: 1,domain: 'diendandoanhnhan.net', year: 11, backlink: 100, da: 123123, price:10000000 },
				{ id: 2,domain: 'thebeauty.vn', year: 5, backlink: 100, da: 123123, price:50000000 },
			
			],
			fields: [
				
				{ key: 'domain', label: 'Tên miền' },
				{ key: 'year', label: 'Năm' },
				{ key: 'backlink', label: 'Backlink' },
				{ key: 'da', label: 'DA' },
				{ key: 'price', label: 'Giá khởi điểm' },
				
			
			]
		}
	},
	created() {
		this.params = this.$route.params;
		console.log(this.$route.params)
	
	},
	methods: {
		formatCurrency
	},
}
</script>
<style lang="">
    
</style>