
<template>
    <div class="loginArea">
       <el-card class="box-card">
           <div class="logo_area">
               <!-- <svg-icon icon-class="home"></svg-icon> -->
               <span>后台</span>
           </div>
            <el-form autoComplete="on" ref="loginForm" label-position="left">
                <el-form-item prop="username">
                    <el-input name="username"
                                type="text"
                                v-model="username"
                                autoComplete="on"
                                placeholder="请输入用户名">
                        <span slot="prefix">
                            <svg-icon icon-class="user" class="color-main"></svg-icon>
                        </span>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input name="password"
                                :type="pwdType"
                                v-model="password"
                                autoComplete="on"
                                placeholder="请输入密码">
                        <span slot="prefix">
                            <svg-icon icon-class="password" class="color-main"></svg-icon>
                        </span>
                        <span slot="suffix" @click="showPwd" style="cursor:pointer">
                            <svg-icon icon-class="eye" class="color-main"></svg-icon>
                        </span>
                    </el-input>
                </el-form-item>
                <!-- 验证码 -->
                <el-form-item prop="code">
                    <el-input name="code"
                                type="text"
                                v-model="code"
                                autoComplete="on"
                                placeholder="请输入验证码">
                        <span slot="suffix" @click="getCode">
                        <img style="height:32px;cursor:pointer;" :src="codeImgUrl" alt="点击刷新" title="点击刷新">
                        <!-- <svg-icon icon-class="eye" class="color-main"></svg-icon> -->
                        </span>
                    </el-input>
                </el-form-item>  
                <!-- 验证码 -->
                <el-form-item style="margin-bottom: 40px">
                    <!-- <router-link to="/home"> -->
                    <el-button style="width: 100%;" type="primary" :loading="loading" @click="goLogin">
                        登录
                    </el-button>
                <!-- </router-link> -->
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
  import md5 from 'js-md5';
  // import {isvalidUsername} from '@/utils/validate';
  // import {setSupport,getSupport,SupportUrl} from '@/utils/support';
//   import login_center_bg from './imgs/login_center_bg.png'

  export default {
    name: 'login',
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        username:null,//账号
        password:null,//密码
        code:null,//验证码
        codeImgUrl:'http://47.99.201.159:9025/api/Auto?',//验证码获取地址192.168.84.170:9005
        codeId:null,//codeId

        num:1,//验证码初始url拼接数据
        loading: false,
        pwdType: 'password',
        // login_center_bg,
        dialogVisible:false
      }
    },
    created () {
    //   this.getInitCode()
      
    },
    methods: {
    //   初始化拿到验证码
      getInitCode:function(){
           this.$axios({  
            url: '/api/Auto',
            method: 'get',
          //params参数必写 , 如果没有参数传{}也可以
            data:{ 
            }
          })
          .then((res)=>{
            this.codeImgUrl="data:image/png;base64,"+res.data.msg;
            this.codeId=res.data.code;
          })
          .catch((err)=>{
            console.log(err)
          })
      },
      getCode:function(){
        this.$axios({  
            url: '/api/Auto',
            method: 'get',
          //params参数必写 , 如果没有参数传{}也可以
            data:{ 
            }
          })
          .then((res)=>{
            this.codeImgUrl="data:image/png;base64,"+res.data.msg;
            this.codeId=res.data.code;
          })
          .catch((err)=>{
            console.log(err)
          })

      },
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      goLogin() {
        this.$axios({  
          url: '/api/Auto',
          method: 'post',
        //params参数必写 , 如果没有参数传{}也可以
          data:{  
            account:this.username,
            passwd:md5(this.password),
            code:this.code,
            codeId:this.codeId,
          }
        })
        .then((res)=>{
          // console.log(res.data)
          // console.log(res.data.code)
          // console.log(res.data.token)
          if(res.data.code==1){ 
            localStorage.setItem("g_id",res.data.count[0].id);
            localStorage.setItem("g_token",res.data.token);
            localStorage.setItem("g_userName", this.username);
            localStorage.setItem("g_router", JSON.stringify(res.data.data));
            this.$router.push({path: '/'});
          }else if(res.data.code==-1){
            // localStorage.setItem("g_token",res.data.token);
            // localStorage.setItem("g_userName", 'admin');
            // this.$router.push({path: '/'});
            this.$message(res.data.msg);
          }else if(res.data.code==-2){
            this.$message(res.data.msg);
          }
        })
        .catch((err)=>{
          console.log(err)
        })
      },
      dialogConfirm(){
        this.dialogVisible =false;
        setSupport(true);
        window.location.href=SupportUrl;
      },
      dialogCancel(){
        this.dialogVisible = false;
        setSupport(false);
      }
    }
  }
</script>

<style lang="scss">
.svg-icon{
    width:20px;
    height: 40px;
}
.loginArea{
    width: 100%;
    height: 100%;
    background-image: url('../../assets/img/login-bg.jpg');
    background-size: cover;
    background-position: center;
    .box-card {
        width: 320px;
        position: absolute;
        left:50%;
        top:30%;
        .logo_area{
            display: flex;
            justify-content: center;
            align-items: center;
            .svg-icon{
                width:40px;
                height: 40px;
            }
        }
        .el-form{
            margin-top:10px;
        }
    }
}



</style>












