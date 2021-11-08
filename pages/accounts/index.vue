<template lang="">
    <div id="main">
        <div class="session-user pt-50 pb-50">
            <b-container>
                <b-row>
                    <b-col class="" cols="12">
                        <b-card  class="tab_account" no-body>
                            
                            <b-tabs nav-wrapper-class="avatar_section" pills card vertical >
                                <b-tab  active >
                                    <template #title>
                                        <div>
                                            <b-avatar class="account_avatar" src="user.jpg" badge badge-variant="success" size="5rem"></b-avatar> 
                                            <h4 class="cus_name">Lê Na</h4>
                                        </div>
                                        
                                        <span class="section_first_title"><b-icon icon="person-bounding-box"></b-icon> Thông tin cá nhân</span>
                                    </template>
                                    <b-card-text>
                                        <div class="information-user">
                                            <div class="title-information">
                                                Thông tin cá nhân
                                            </div>
                                            <div class="info-information">
                                                <ul>
                                                    <li>
                                                        <p>
                                                            <strong>Họ và tên:</strong> <span>Lê Na</span>
                                                        </p>
                                                        <a href="">Chỉnh sửa</a>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <strong>ID:</strong> <span>Lê Na</span>
                                                        </p>
                                                        <a href="">Chỉnh sửa</a>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <strong>Số điện thoại:</strong> <span>+84 123456789 </span>
                                                        </p>
                                                        <a href="">Chỉnh sửa</a>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <strong>Email:</strong> <span>lena6996@gmail.com </span>
                                                        </p>
                                                        <a href="">Chỉnh sửa</a>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <strong>Mật khẩu:</strong> <span>****</span>
                                                        </p>
                                                        <a href="">Chỉnh sửa</a>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <strong>Tài khoản liên kế:</strong> <span>facebook.com/lena6995</span>
                                                        </p>
                                                        <a href="">Chỉnh sửa</a>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <strong>Thống kê giao dịch:</strong> <span>2  </span>
                                                        </p>
                                                        <a href="">Chỉnh sửa</a>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <strong>Số dư quỹ:</strong> <span>1.000.000đ</span>
                                                        </p>
                                                        <a href="">Chỉnh sửa</a>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            <strong>Mã khách hàng: ADD9001NH00</strong>
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab>
                                    <template #title>
                                        <b-icon icon="credit-card"></b-icon> Tên miền bạn đăng bán
                                    </template>
                                    <b-card-text>
                                        <template>
                                            <div class="information-user">
                                                
                                            </div>
                                        </template>
                                    </b-card-text>
                                    
                                </b-tab>
                                <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
                                </b-tabs>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
<script>
export default {
    middleware: 'router-auth',
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