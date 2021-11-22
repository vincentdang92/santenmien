<template>
  <div>
      <b-container>
          <b-row>
              <b-col cols="12">
                <div id="notfound">
                  <div class="notfound">
                    <div class="notfound-404">
                      <h1>4<span>0</span>4</h1>
                    </div>
                    <h2>Chúng tôi không tìm thấy trang </h2>
                    <p class="highlighted_path"><span>{{$config.baseURL}}{{ $route.path }}</span></p>
                    
                    <b-form class="notfound-search">
                      <b-form-group>
                          
                          <nuxt-link class="btn btn-submit btn_search c_b_s btn-primary" to="/"><b-icon icon="house-door-fill"></b-icon>  Trang chủ</nuxt-link>
                      </b-form-group>
                    </b-form>
                  </div>
                </div>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="scss">
p.highlighted_path span {
  background: #058ffe4d;
  padding: 5px 10px;
  /* color: #fff; */
  font-size: 20px;
  /* border-radius: 3px; */
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
}
  #notfound {
  position: relative;
  height: 100vh;
  background: #f6f6f6;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.notfound {
  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  padding: 110px 40px;
  text-align: center;
  background: #fff;
  -webkit-box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.1);
          box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.1);
}

.notfound .notfound-404 {
  position: relative;
  height: 180px;
}

.notfound .notfound-404 h1 {
  font-family: 'Roboto', sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  font-size: 165px;
  font-weight: 700;
  margin: 0px;
  color: #002F8A;
  text-transform: uppercase;
}

.notfound .notfound-404 h1>span {
  color: #058FFE;
}

.notfound h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 400;
  text-transform: uppercase;
  color: #151515;
  margin-top: 0px;
  margin-bottom: 25px;
}

.notfound .notfound-search {
  position: relative;
  max-width: 320px;
  width: 100%;
  margin: auto;
}

.notfound .notfound-search>input {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 50px;
  padding: 3px 65px 3px 30px;
  color: #151515;
  font-size: 16px;
  background: transparent;
  border: 2px solid #c5c5c5;
  border-radius: 40px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.notfound .notfound-search>input:focus {
  border-color: #00b7ff;
}

.notfound .notfound-search>button {
  position: absolute;
  right: 15px;
  top: 5px;
  width: 40px;
  height: 40px;
  text-align: center;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.notfound .notfound-search>button>span {
  width: 15px;
  height: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
      -ms-transform: translate(-50%, -50%) rotate(-45deg);
          transform: translate(-50%, -50%) rotate(-45deg);
  margin-left: -3px;
}

.notfound .notfound-search>button>span:after {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  left: 0px;
  top: 0px;
  border-radius: 50%;
  border: 4px solid #c5c5c5;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.notfound-search>button>span:before {
  position: absolute;
  content: '';
  width: 4px;
  height: 10px;
  left: 7px;
  top: 17px;
  border-radius: 2px;
  background: #c5c5c5;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.notfound .notfound-search>button:hover>span:after {
  border-color: #00b7ff;
}

.notfound .notfound-search>button:hover>span:before {
  background-color: #00b7ff;
}

@media only screen and (max-width: 767px) {
  .notfound h2 {
    font-size: 18px;
  }
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 h1 {
    font-size: 141px;
  }
}
</style>