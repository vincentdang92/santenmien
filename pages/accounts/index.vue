<template lang="">
    <div id="main">
        <div class="session-user pt-50 pb-50">
            <b-container>
                <b-row>
                    <b-col class="" cols="12">
                        <b-card  class="tab_account" no-body>
                            
                            <b-tabs nav-wrapper-class="avatar_section" pills card vertical v-model="tabIndex">
                                <b-tab  active lazy>
                                    <template #title>
                                        <span>
                                            <b-avatar class="account_avatar" src="user.jpg" badge badge-variant="success" size="5rem"></b-avatar> 
                                            <h4 class="cus_name">Lê Na</h4>
                                        </span>
                                        
                                        <span class="section_first_title">
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
                                             Thông tin cá nhân</span>
                                    </template>
                                    <b-card-text>
                                        <div class="information-user infor_section">
                                            <div class="title-information">
                                                <p class="info_section__title">Thông tin cá nhân</p>
                                                <b-button  @click.prevent="handleEditInfo" class="float-right btn_account_edit c_b_s text-primary" variant="light"><b-icon icon="vector-pen"></b-icon> Sửa thông tin</b-button>
                                            </div>
                                            <div class="info-information">
                                                <b-overlay :show="busy" rounded="lg" opacity="1" @hidden="onHidden">
                                                    <template #overlay>
                                                        <div class="d-flex align-items-center">
                                                        <b-spinner variant="primary" label="Spinning"></b-spinner>
                                                        
                                                        <span class="sr-only">Please wait...</span>
                                                        </div>
                                                    </template>
                                                    <b-list-group>
                                                        <b-list-group-item><strong>Họ và tên:</strong> Lê Na</b-list-group-item>
                                                        <b-list-group-item><strong>Username:</strong> Lê Na</b-list-group-item>
                                                        <b-list-group-item><strong>Số điện thoại:</strong> +84 123456789</b-list-group-item>
                                                        <b-list-group-item><strong>Email:</strong> lena6996@gmail.com</b-list-group-item>
                                                        <b-list-group-item><strong>Mật khẩu:</strong> ****</b-list-group-item>
                                                        <b-list-group-item><strong>Tài khoản Facebook:</strong> facebook.com/lena6995</b-list-group-item>
                                                        <b-list-group-item><strong>Thống kê giao dịch:</strong> 2</b-list-group-item>
                                                        <b-list-group-item><strong>Số dư quỹ:</strong> 1.000.000đ</b-list-group-item>
                                                        <b-list-group-item><strong>Mã khách hàng:</strong> ADD9001NH00</b-list-group-item>
                                                        
                                                    </b-list-group>
                                                </b-overlay>    
                                            </div>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab lazy>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
											  <g id="money-send" transform="translate(-428 -444)">
											    <g id="Group">
											      <path id="Vector" d="M0,5.26A1.711,1.711,0,0,0,1.67,7.01H3.55A1.489,1.489,0,0,0,5,5.48a1.321,1.321,0,0,0-.99-1.45L1,2.98A1.314,1.314,0,0,1,.01,1.53,1.5,1.5,0,0,1,1.46,0H3.34A1.711,1.711,0,0,1,5.01,1.75" transform="translate(437.5 452.49)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-2" data-name="Vector" d="M0,0V9" transform="translate(440 451.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											    </g>
											    <path id="Vector-3" data-name="Vector" d="M20,10A10,10,0,1,1,10,0" transform="translate(430 446)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											    <path id="Vector-4" data-name="Vector" d="M4,4V0H0" transform="translate(446 446)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											    <path id="Vector-5" data-name="Vector" d="M0,5,5,0" transform="translate(445 446)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											    <path id="Vector-6" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(428 444)" fill="none" opacity="0"/>
											  </g>
											</svg> Tên miền bạn đăng bán
                                    </template>
                                    <b-card-text>
                                        <template>
                                            <div class="information-user">
                                                <div class="title-information">
                                                   
                                                    <p class="info_section__title"> Tên miền bạn đăng bán</p>
                                                </div>
                                                <b-table :items="items" :fields="fields"   striped  responsive="sm">
                                                    <template #table-colgroup="scope">
                                                        <col
                                                        v-for="field in scope.fields"
                                                        :key="field.key"
                                                        :style="{ width: field.key === 'domain' ? '180px' : '' }"
                                                        >
                                                    </template>
                                                    <template #head(record_status)="data">
                                                        Trạng thái  bảng ghi
                                                    </template>

                                                    <template #cell(actions)="row">
                                                        
                                                        <b-dropdown
                                                            variant="primary"
                                                            class="dropdown-left-custom action_dropdown"
                                                             
                                                            size="xs"
                                                        >
                                                            <template #button-content>
                                                                <b-icon icon="three-dots"></b-icon>
                                                            </template>
                                                            <b-dropdown-item href="#">Xóa</b-dropdown-item>
                                                            <b-dropdown-item href="#">Lịch sử đấu giá</b-dropdown-item>
                                                            <b-dropdown-item href="#">Lịch sử bình luận</b-dropdown-item>
                                                        </b-dropdown>
                                                        
                                                    </template>
                                                    <template #cell(price)="row">
                                                        {{ formatCurrency(row.item.price) }}
                                                    </template>
                                                    <template #cell(status)="row">
                                                        <b-badge class="c_b_s custom_badge_success" v-if="row.item.status == 1"  variant="success">Đã xác nhận</b-badge>
                                                        <b-badge class="c_b_s custom_badge_info" v-else  variant="info">Chờ xác nhận</b-badge>
                                                    </template>
                                                    <template #cell(record_status)="row">
                                                        <b-badge class="c_b_s custom_badge_success" v-if="row.item.record_status == 1"  variant="success">Đã xác nhận</b-badge>
                                                        <b-badge class="c_b_s custom_badge_warning" v-else  variant="warning">Chờ xác nhận</b-badge>
                                                    </template>
                                                    <template #cell(domain)="row">
                                                        <span class="cell_domain">{{ row.item.domain }}</span>
                                                    </template>
                                                    
                                                    
                                                    <template #row-details="row">
                                                        <b-card class="card-table-description">
                                                        <ul class="list-description" v-html="filterRercord(row.item)">
                                                        
                                                        </ul>
                                                        </b-card>
                                                    </template>
                                                    
                                                    
            
                                                </b-table>
                                                <div class="custom_paging mt-3">
                                                    <b-pagination
                                                        v-model="currentPage"
                                                        :total-rows="rows"
                                                        :per-page="perPage"
                                                        aria-controls="my-table"
                                                    ></b-pagination>
                                                </div>
                                            </div>
                                        </template>
                                    </b-card-text>
                                    
                                </b-tab>
                                <b-tab lazy>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
											  <g id="money-send" transform="translate(-428 -444)">
											    <g id="Group">
											      <path id="Vector" d="M0,5.26A1.711,1.711,0,0,0,1.67,7.01H3.55A1.489,1.489,0,0,0,5,5.48a1.321,1.321,0,0,0-.99-1.45L1,2.98A1.314,1.314,0,0,1,.01,1.53,1.5,1.5,0,0,1,1.46,0H3.34A1.711,1.711,0,0,1,5.01,1.75" transform="translate(437.5 452.49)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-2" data-name="Vector" d="M0,0V9" transform="translate(440 451.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											    </g>
											    <path id="Vector-3" data-name="Vector" d="M20,10A10,10,0,1,1,10,0" transform="translate(430 446)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											    <path id="Vector-4" data-name="Vector" d="M4,4V0H0" transform="translate(446 446)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											    <path id="Vector-5" data-name="Vector" d="M0,5,5,0" transform="translate(445 446)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											    <path id="Vector-6" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(428 444)" fill="none" opacity="0"/>
											  </g>
											</svg> Tên miền bạn cho thuê
                                    </template>
                                    <b-card-text>
                                        <template>
                                            <div class="information-user">
                                                <div class="title-information">
                                                   
                                                   <p class="info_section__title"> Tên miền bạn cho thuê</p>
                                                </div>
                                                <b-table :items="items" :fields="fields"  responsive="sm" striped  >
                                                    <template #table-colgroup="scope">
                                                        <col
                                                        v-for="field in scope.fields"
                                                        :key="field.key"
                                                        :style="{ width: field.key === 'domain' ? '180px' : '' }"
                                                        >
                                                    </template>
                                                    <template #head(record_status)="data">
                                                        Trạng thái <br /> bảng ghi
                                                    </template>

                                                    <template #cell(actions)="row">
                                                        
                                                        <b-dropdown
                                                            variant="primary"
                                                            class="dropdown-left-custom action_dropdown"
                                            
                                                            size="xs"
                                                        >
                                                            <template #button-content>
                                                                <b-icon icon="three-dots"></b-icon>
                                                            </template>
                                                            <b-dropdown-item href="#">Xóa</b-dropdown-item>
                                                            <b-dropdown-item href="#">Lịch sử đấu giá</b-dropdown-item>
                                                            <b-dropdown-item href="#">Lịch sử bình luận</b-dropdown-item>
                                                        </b-dropdown>
                                                        
                                                    </template>
                                                    <template #cell(price)="row">
                                                        {{ formatCurrency(row.item.price) }}
                                                    </template>
                                                    <template #cell(status)="row">
                                                        <b-badge class="c_b_s custom_badge_success" v-if="row.item.status == 1"  variant="success">Đã xác nhận</b-badge>
                                                        <b-badge class="c_b_s custom_badge_info" v-else  variant="info">Chờ xác nhận</b-badge>
                                                    </template>
                                                    <template #cell(record_status)="row">
                                                        <b-badge class="c_b_s custom_badge_success" v-if="row.item.record_status == 1"  variant="success">Đã xác nhận</b-badge>
                                                        <b-badge class="c_b_s custom_badge_warning" v-else  variant="warning">Chờ xác nhận</b-badge>
                                                    </template>
                                                    <template #cell(domain)="row">
                                                        <span class="cell_domain">{{ row.item.domain }}</span>
                                                    </template>
                                                    
                                                    
                                                    <template #row-details="row">
                                                        <b-card class="card-table-description">
                                                        <ul class="list-description" v-html="filterRercord(row.item)">
                                                        
                                                        </ul>
                                                        </b-card>
                                                    </template>
                                                    
                                                    

                                                </b-table>
                                                
                                                <div class="custom_paging mt-3">
                                                    <b-pagination
                                                        v-model="currentPage"
                                                        :total-rows="rows"
                                                        :per-page="perPage"
                                                        aria-controls="my-table"
                                                    ></b-pagination>
                                                </div>
                                            </div>
                                        </template>
                                    </b-card-text>
                                </b-tab>
                                <b-tab lazy>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
											  <g id="vuesax_linear_coin" data-name="vuesax/linear/coin" transform="translate(-684 -444)">
											    <g id="coin">
											      <path id="Vector" d="M0,4.2A1.371,1.371,0,0,0,1.33,5.6h1.5A1.194,1.194,0,0,0,3.99,4.38,1.057,1.057,0,0,0,3.2,3.22L.8,2.38A1.055,1.055,0,0,1,0,1.22,1.194,1.194,0,0,1,1.16,0h1.5A1.379,1.379,0,0,1,4,1.4" transform="translate(692 451.2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-2" data-name="Vector" d="M0,0V.74" transform="translate(694 456.85)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-3" data-name="Vector" d="M0,0V.78" transform="translate(694 450.41)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-4" data-name="Vector" d="M15.98,7.99A7.99,7.99,0,1,1,7.99,0,7.99,7.99,0,0,1,15.98,7.99Z" transform="translate(686 446)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-5" data-name="Vector" d="M0,6.88A4.952,4.952,0,1,0,6.93,0" transform="translate(696.98 457)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-6" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(684 444)" fill="none" opacity="0"/>
											    </g>
											  </g>
											</svg>

											Tên miền bạn muốn mua
                                    </template>
                                    <b-card-text>
                                        <template>
                                            <div class="information-user">
                                                <div class="title-information">
                                                    
                                                    <p class="info_section__title"> Tên miền bạn muốn mua</p>
                                                </div>
                                                <b-table :items="items" :fields="fields"  responsive="sm" striped  >
                                                    <template #table-colgroup="scope">
                                                        <col
                                                        v-for="field in scope.fields"
                                                        :key="field.key"
                                                        :style="{ width: field.key === 'domain' ? '180px' : '' }"
                                                        >
                                                    </template>
                                                    <template #head(record_status)="data">
                                                        Trạng thái <br /> bảng ghi
                                                    </template>

                                                    <template #cell(actions)="row">
                                                        
                                                        <b-dropdown
                                                            variant="primary"
                                                            class="dropdown-left-custom action_dropdown"
                                            
                                                            size="xs"
                                                        >
                                                            <template #button-content>
                                                                <b-icon icon="three-dots"></b-icon>
                                                            </template>
                                                            <b-dropdown-item href="#">Xóa</b-dropdown-item>
                                                            <b-dropdown-item href="#">Lịch sử đấu giá</b-dropdown-item>
                                                            <b-dropdown-item href="#">Lịch sử bình luận</b-dropdown-item>
                                                        </b-dropdown>
                                                        
                                                    </template>
                                                    <template #cell(price)="row">
                                                        {{ formatCurrency(row.item.price) }}
                                                    </template>
                                                    <template #cell(status)="row">
                                                        <b-badge class="c_b_s custom_badge_success" v-if="row.item.status == 1"  variant="success">Đã xác nhận</b-badge>
                                                        <b-badge class="c_b_s custom_badge_info" v-else  variant="info">Chờ xác nhận</b-badge>
                                                    </template>
                                                    <template #cell(record_status)="row">
                                                        <b-badge class="c_b_s custom_badge_success" v-if="row.item.record_status == 1"  variant="success">Đã xác nhận</b-badge>
                                                        <b-badge class="c_b_s custom_badge_warning" v-else  variant="warning">Chờ xác nhận</b-badge>
                                                    </template>
                                                    <template #cell(domain)="row">
                                                        <span class="cell_domain">{{ row.item.domain }}</span>
                                                    </template>
                                                    
                                                    
                                                    <template #row-details="row">
                                                        <b-card class="card-table-description">
                                                        <ul class="list-description" v-html="filterRercord(row.item)">
                                                        
                                                        </ul>
                                                        </b-card>
                                                    </template>
                                                    
                                                    

                                                </b-table>
                                                <div class="custom_paging">
                                                    <b-pagination
                                                        v-model="currentPage"
                                                        :total-rows="rows"
                                                        :per-page="perPage"
                                                        aria-controls="my-table"
                                                    ></b-pagination>
                                                </div>
                                            </div>
                                        </template>
                                    </b-card-text>
                                </b-tab>
                                <b-tab lazy>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
											  <g id="notification-status" transform="translate(-360 -188)">
											    <path id="Vector" d="M6,3A3,3,0,1,1,3,0,3,3,0,0,1,6,3Z" transform="translate(376 190)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											    <path id="Vector-2" data-name="Vector" d="M0,0H5" transform="translate(367 201)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											    <path id="Vector-3" data-name="Vector" d="M0,0H9" transform="translate(367 205)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											    <path id="Vector-4" data-name="Vector" d="M12,0H7C2,0,0,2,0,7v6c0,5,2,7,7,7h6c5,0,7-2,7-7V8" transform="translate(362 190)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											    <path id="Vector-5" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(360 188)" fill="none" opacity="0"/>
											  </g>
											</svg>

											Theo dõi tên miền mới nhất
                                    </template>
                                    <b-card-text>
                                        <template>
                                            <div class="information-user">
                                                <div class="title-information">
                                                    
                                                    <p class="info_section__title"> Theo dõi tên miền mới nhất</p>
                                                </div>
                                                <b-table :items="items" :fields="fields"  responsive="sm" striped  >
                                                    <template #table-colgroup="scope">
                                                        <col
                                                        v-for="field in scope.fields"
                                                        :key="field.key"
                                                        :style="{ width: field.key === 'domain' ? '180px' : '' }"
                                                        >
                                                    </template>
                                                    <template #head(record_status)="data">
                                                        Trạng thái <br /> bảng ghi
                                                    </template>

                                                    <template #cell(actions)="row">
                                                        
                                                        <b-dropdown
                                                            variant="primary"
                                                            class="dropdown-left-custom action_dropdown"
                                            
                                                            size="xs"
                                                        >
                                                            <template #button-content>
                                                                <b-icon icon="three-dots"></b-icon>
                                                            </template>
                                                            <b-dropdown-item href="#">Xóa</b-dropdown-item>
                                                            <b-dropdown-item href="#">Lịch sử đấu giá</b-dropdown-item>
                                                            <b-dropdown-item href="#">Lịch sử bình luận</b-dropdown-item>
                                                        </b-dropdown>
                                                        
                                                    </template>
                                                    <template #cell(price)="row">
                                                        {{ formatCurrency(row.item.price) }}
                                                    </template>
                                                    <template #cell(status)="row">
                                                        <b-badge class="c_b_s custom_badge_success" v-if="row.item.status == 1"  variant="success">Đã xác nhận</b-badge>
                                                        <b-badge class="c_b_s custom_badge_info" v-else  variant="info">Chờ xác nhận</b-badge>
                                                    </template>
                                                    <template #cell(record_status)="row">
                                                        <b-badge class="c_b_s custom_badge_success" v-if="row.item.record_status == 1"  variant="success">Đã xác nhận</b-badge>
                                                        <b-badge class="c_b_s custom_badge_warning" v-else  variant="warning">Chờ xác nhận</b-badge>
                                                    </template>
                                                    <template #cell(domain)="row">
                                                        <span class="cell_domain">{{ row.item.domain }}</span>
                                                    </template>
                                                    
                                                    
                                                    <template #row-details="row">
                                                        <b-card class="card-table-description">
                                                        <ul class="list-description" v-html="filterRercord(row.item)">
                                                        
                                                        </ul>
                                                        </b-card>
                                                    </template>
                                                    
                                                    

                                                </b-table>
                                                <div class="custom_paging">
                                                    <b-pagination
                                                        v-model="currentPage"
                                                        :total-rows="rows"
                                                        :per-page="perPage"
                                                        aria-controls="my-table"
                                                    ></b-pagination>
                                                </div>
                                            </div>
                                        </template>
                                    </b-card-text>
                                </b-tab>
                                <b-tab lazy>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
											  <g id="vuesax_linear_setting-3" data-name="vuesax/linear/setting-3" transform="translate(-364 -188)">
											    <g id="setting-3">
											      <path id="Vector" d="M7,20h6c5,0,7-2,7-7V7c0-5-2-7-7-7H7C2,0,0,2,0,7v6C0,18,2,20,7,20Z" transform="translate(366 190)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-2" data-name="Vector" d="M0,3.9V0" transform="translate(379.57 202.6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-3" data-name="Vector" d="M0,1.95V0" transform="translate(379.57 193.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-4" data-name="Vector" d="M5.2,2.6A2.6,2.6,0,1,1,2.6,0,2.6,2.6,0,0,1,5.2,2.6Z" transform="translate(376.97 195.45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-5" data-name="Vector" d="M0,1.95V0" transform="translate(372.43 204.55)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-6" data-name="Vector" d="M0,3.9V0" transform="translate(372.43 193.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-7" data-name="Vector" d="M5.2,2.6A2.6,2.6,0,1,1,2.6,0,2.6,2.6,0,0,1,5.2,2.6Z" transform="translate(369.83 199.35)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-8" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(364 188)" fill="none" opacity="0"/>
											    </g>
											  </g>
											</svg>

											Cài đặt thông báo
                                    </template>
                                    <b-card-text>
                                        <template>
                                            <div class="information-user">
                                                <div class="title-information">
                                                    Cài đặt thông báo <br />
                                                    <p>(Gửi lúc 8h00 sáng hàng ngày)</p>
                                                </div>
                                                <b-list-group class="notify_config_list">
                                                    <b-list-group-item>
                                                        <p> Nhận thông báo qua điện thoại</p>
                                                        <b-form-checkbox class="float-right"  name="notify-checkbox" switch></b-form-checkbox>
                                                    </b-list-group-item>
                                                    <b-list-group-item>
                                                        <p>[Backorder] Danh sách tên miền mới đưa vào đặt giá</p>
                                                        <b-form-checkbox class="float-right"  name="notify-backorder-new" switch></b-form-checkbox>
                                                    </b-list-group-item>
                                                    <b-list-group-item>
                                                        <p>[Backorder] Danh sách tên miền chốt phiên trong ngày</p>
                                                        <b-form-checkbox class="float-right"  name="notify-backorder-sell" switch></b-form-checkbox>
                                                    </b-list-group-item>
                                                    <b-list-group-item>
                                                        <p>[Sàn tên miền] Danh sách tên miền đăng bán hàng ngày</p>
                                                        <b-form-checkbox class="float-right"  name="notify-sell-daily-stock" switch></b-form-checkbox>
                                                    </b-list-group-item>
                                                    <b-list-group-item>
                                                        <p>[Sàn tên miền] Danh sách tên miền đăng mua hàng ngày</p>
                                                        <b-form-checkbox class="float-right"  name="notify-buy-daily-stock" switch></b-form-checkbox>
                                                    </b-list-group-item>
                                                    <b-list-group-item>
                                                        <p>[Backorder] Danh sách tên miền tự do chưa được đăng ký</p>
                                                        <b-form-checkbox class="float-right"  name="notify-register-daily-stock" switch></b-form-checkbox>
                                                    </b-list-group-item>
                                                    
                                                </b-list-group>
                                            </div>
                                        </template>
                                    </b-card-text>
                                </b-tab>
                                <b-tab lazy>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
											  <g id="vuesax_linear_card-pos" data-name="vuesax/linear/card-pos" transform="translate(-428 -508)">
											    <g id="card-pos">
											      <path id="Vector" d="M0,11.95,11.95,0" transform="translate(431.93 511.929)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-2" data-name="Vector" d="M0,1.2,1.2,0" transform="translate(439.101 525.079)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-3" data-name="Vector" d="M0,2.39,2.39,0" transform="translate(441.793 521.199)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-4" data-name="Vector" d="M1.6,8.238,8.241,1.6c2.12-2.12,3.18-2.13,5.28-.03l4.91,4.91c2.1,2.1,2.09,3.16-.03,5.28l-6.64,6.64c-2.12,2.12-3.18,2.13-5.28.03l-4.91-4.91C-.529,11.418-.529,10.368,1.6,8.238Z" transform="translate(430 510.001)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-5" data-name="Vector" d="M0,0H20" transform="translate(430 529.999)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
											      <path id="Vector-6" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(428 508)" fill="none" opacity="0"/>
											    </g>
											  </g>
											</svg>

											Nạp quỹ
                                    </template>
                                    <b-card-text>
                                        <template>
                                            <div class="information-user">
                                                <div class="title-information">
                                                    Nạp quỹ <br />
                                                    <p>Nạp quỹ qua hình thức chuyển khoản ngân hàng Số dư: 1.000.000đ</p>
                                                </div>
                                                <b-container>
                                                    <b-row>
                                                        <b-col cols="12">
                                                            <p class="mt-3">Quý khách vui lòng chuyển khoản theo nội dung <b>ACCxxxx</b> (đây là mã của khách hàng) tới Nhanhoa theo một trong các danh sách ngân hàng dưới đây. Khi chúng tôi nhận được tiền chuyển khoản của Quý khách sẽ tiến hành nạp quỹ vào hệ thống.</p>
                                                        </b-col>
                                                        <b-col v-for="item in list_bank" :key="item.id" cols="12" sm="4" md="4" lg="4" class="mb-3">
                                                            <b-card
                                                                
                                                                :img-src="item.bank_logo"
                                                                :img-alt="item.bank_name"
                                                                img-top
                                                                tag="article"
                                                                class=" item-payment"
                                                            >
                                                                <b-card-text>
                                                                    <template>
                                                                    <div class="">
                                                                        
                                                                            <div class="title-payment">
                                                                                {{ item.bank_name }}
                                                                            </div>
                                                                            <p>
                                                                                Chi nhánh: <strong> {{ item.bank_branch }}</strong>
                                                                            </p>
                                                                            <p>
                                                                                Số tài khoản: <strong>{{ item.bank_code }}</strong>
                                                                            </p>
                                                                            <p>
                                                                                Chủ tài khoản: <strong>Công ty TNHH phần mềm Nhân Hòa</strong>
                                                                            </p>
                                                                        </div>
                                                                    </template>
                                                                </b-card-text>
                                                                <a href="#" class="c_b_s btn btn-primary float-right"><b-icon icon="cash"></b-icon> Nạp ngay</a>
                                                            </b-card>
                                                        </b-col>
                                                        

                                                    </b-row>
                                                </b-container>
                                            </div>
                                        </template>
                                    </b-card-text>
                                </b-tab>
                                
                            </b-tabs>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <b-modal
        id="modal-prevent-closing"
        ref="account-edit-modal"
        title="Chỉnh sửa thông tin cá nhân"
        
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
        >
        <form @submit.stop.prevent="onSubmitInfoAccount">
            <b-form-group
            label="Họ và tên"
            label-for="name-input"
            invalid-feedback="Vui lòng nhập họ tên"
            
            >
                <b-form-input
                    id="name-input"
                    v-model="$v.form_account_info.fullname.$model"
                    
                    :state="validateState('fullname')"
                    required
                ></b-form-input>
            </b-form-group>
            <b-form-group
            label="Email"
            label-for="email-input"
            invalid-feedback="Vui lòng nhập email"
            
            >
                <b-form-input
                    id="email-input"
                    v-model="$v.form_account_info.email.$model"
                    
                    :state="validateState('email')"
                    required
                ></b-form-input>
            </b-form-group>
            <b-form-group
            label="Số điện thoại"
            label-for="phone-input"
            invalid-feedback="Vui lòng nhập số điện thoại"
            
            >
                <b-form-input
                    id="phone-input"
                    v-model="$v.form_account_info.phone.$model"
                    
                    :state="validateState('phone')"
                    required
                ></b-form-input>
            </b-form-group>
            


        </form>
        <template #modal-footer>
            <div class="w-100">
                <b-button
                    
                   
                    class="float-right"
                    
                >
                    Đóng
                </b-button>
                <b-button
                    variant="primary"
                    
                    class="float-right mr-3"
                    
                >
                    Lưu thông tin
                </b-button>
                
            </div>
        </template>
        </b-modal>
    </div>
</template>
<script>
import { formatCurrency, formatNumber } from "~/helpers/libs";
import Vue from 'vue';
import { validationMixin } from "vuelidate";
import { required, minLength, email, maxLength } from "vuelidate/lib/validators";
export default {
    middleware: 'router-auth',
    mixins: [validationMixin],
    data(){
        return{
            busy: false,
            tabIndex:0,
            perPage: 3,
            currentPage: 1,
            items: [
				{ id: 1,domain: 'diendandoanhnhan.net213123', status:1, record_status:1, publish_date: '11/11/2021', price:10000000 },
				{ id: 2,domain: 'gocmilu.net', status:1, record_status:1, publish_date: '30/11/2021', price:25000000 },
				{ id: 3,domain: 'gocmilu.net', status:0, record_status:1, publish_date: '30/11/2021', price:25000000 },
				{ id: 4,domain: 'gocmilu.net', status:1, record_status:0, publish_date: '30/11/2021', price:25000000 },
				{ id: 5,domain: 'gocmilu.net', status:0, record_status:2, publish_date: '30/11/2021', price:25000000 },
				{ id: 6,domain: 'gocmilu.net', status:1, record_status:0, publish_date: '30/11/2021', price:25000000 },
				{ id: 7,domain: 'gocmilu.net', status:1, record_status:2, publish_date: '30/11/2021', price:25000000 },
				{ id: 8,domain: 'gocmilu.net', status:1, record_status:2, publish_date: '30/11/2021', price:25000000 },
				
			],
			fields: [
				
				{ key: 'domain', label: 'Tên miền' },
                { key: 'price', label: 'Giá khởi điểm' },
                { key: 'status', label: 'Trạng thái' },
                { key: 'record_status', label: 'Trạng thái bản ghi' },
				{ key: 'publish_date', label: 'Ngày đăng' },
                { key: "actions", label:"Hành động" },
			
			],
            name: '',
            nameState: null,
            submittedNames: [],
            form_account_info:{
                fullname: '',
                phone: '',
                email: '',
                
            },
            list_bank:[
                {id:1, bank_name:'Ngân hàng ACB', bank_code: "157775139", bank_logo:'https://upload.wikimedia.org/wikipedia/vi/8/85/ACB_Logo.png', bank_branch:'Hà Nội'},
                {id:2, bank_name:'Ngân hàng Techcombank', bank_code: "11110137258015", bank_logo:'https://upload.wikimedia.org/wikipedia/vi/7/7c/Techcombank_logo.png', bank_branch:'Hà Nội'},
                {id:3, bank_name:'Ngân hàng Maritime Bank', bank_code: "03101010133663", bank_logo:'https://vaytienonline.vn/wp-content/uploads/2020/07/msb-logo.png', bank_branch:'Đống Đa'},
                {id:4, bank_name:'Ngân hàng Maritime Bank', bank_code: "03101010133663", bank_logo:'https://vaytienonline.vn/wp-content/uploads/2020/07/msb-logo.png', bank_branch:'Đống Đa'},
                {id:5, bank_name:'Ngân hàng Maritime Bank', bank_code: "03101010133663", bank_logo:'https://vaytienonline.vn/wp-content/uploads/2020/07/msb-logo.png', bank_branch:'Đống Đa'},
                {id:6, bank_name:'Ngân hàng Maritime Bank', bank_code: "03101010133663", bank_logo:'https://vaytienonline.vn/wp-content/uploads/2020/07/msb-logo.png', bank_branch:'Đống Đa'},
                
            ]
        }
    },
    validations: {
        form_account_info: {
            fullname: {
                required,
                minLength: minLength(5)
            },
            phone: {
                required,
                minLength: minLength(10),
                maxLength: minLength(15),
            },
            email: {
                required,
                email
            },
        }
    },
    beforeDestroy() {
      this.clearTimeout()
    },
    computed: {
      state() {
        return this.domain_name.length >= 4
      },
      rows() {
        return this.items.length
      }
      
    },
    mounted(){
        this.onClick();
    },
    methods:{
        formatCurrency,
        validateState(name) {
            const { $dirty, $error } = this.$v.form_account_info[name];
            return $dirty ? !$error : null;
            },
            async loadTabData(idx){
                console.log(idx);
            },
            //overlay demo
            clearTimeout() {
            if (this.timeout) {
            clearTimeout(this.timeout)
            this.timeout = null
            }
        },
        setTimeout(callback) {
            this.clearTimeout()
            this.timeout = setTimeout(() => {
            this.clearTimeout()
            callback()
            }, 1000)
        },
        onHidden() {
            // Return focus to the button
            
        },
        onClick() {
            this.busy = true
            // Simulate an async request
            this.setTimeout(() => {
            this.busy = false
            })
        },
        async handleEditInfo(){
            this.$refs['account-edit-modal'].show()
        },
        resetModal() {
            this.form_account_info.fullname = ''
            this.nameState = null
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            //this.onSubmitInfoAccount()
        },
        async onSubmitInfoAccount(){
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

        },
        async getDataTab(tab){
            console.log(tab);

        },
        
    }
}
</script>
<style lang="scss">
    .col-auto{
        min-width: 250px;
        min-height: 250px;
    }
    .information-user{
        min-height: 500px;
    }
</style>