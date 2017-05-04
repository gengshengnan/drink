<template>
     <div class="loginContainer">
           <div class='header'>
                <a href="#" class="a1">
                    <i class="iconfont">&#xe603;</i>
                </a>
                    <h2 class="login">登录</h2>
                <a href="#/regist" class="a2">
                    注册
                </a>
            </div>
            <div class='login-user'>
                <form>
                    <input id="tel" type="tel"  @blur="blur_tel()" ref="ipt1" placeholder="用户名/手机号" class="userNumber"/>
                    <input type="password" id="pwd"  @blur="blur_pwd()" ref="ipt2" placeholder="请输入密码" class="identifying-code"/>
                </form>
            </div>
            <div class='check'>
                <input type='checkbox'>
                <span>记住本次登陆</span>
            </div>
             <div class='login-btn'>
                <button @click="login()">立即登陆</button>
            </div>
            <ul class='way'>
                <li class='forget'>
                    <a href='#' >忘记密码</a>
                </li>
                <li>
                    <a href='#'>免费注册</a>
                </li>
            </ul>
            <div class='cooperate'>
                <p>使用合作账号登陆</p>
                <p>
                    <a href='#'>
                        <img src="../../images/qq.png">
                    </a>
                    <a href='#'>
                        <img src="../../images/weixin.png" class='img2'/>
                    </a>
                </p>
            </div>
    </div>
</template>

<script>
    import headTop from '../../components/header/head'
    import alertTip from '../../components/common/alertTip'
    import {mapState, mapMutations} from 'vuex'
    import $ from 'jquery'
    export default {
        data(){
            return {
                loginWay: true, //登录方式，默认短信登录
                userAccount: null, //用户名
                passWord: null, //密码
            }
        },
        created(){
        },
        components: {
            headTop,
            alertTip,
        },
        computed: {
         
        },
        methods: {
            blur_tel:function(){
               var tel_val = this.$refs.ipt1.value
               var tel =  /^1\d{10}$/;     
               if (tel_val =="") { 
                     alert("手机号不能为空")        
                      return;
                }else if(!tel.test(tel_val)) {
                    alert("手机号由13位数字组成")
                    return;
                 }  
            },
            blur_pwd:function(){
                var pwd_val = this.$refs.ipt2.value 
                var pwd_check = /^[a-zA-Z\d]\w{3,11}[a-zA-Z\d]$/
                  if (pwd_val =="") { 
                     alert("密码不能为空")        
                      return;
                }else if(!pwd_check.test(pwd_val)) {
                    alert("建议密码由字母、数字组成,且至少为5位字符")
                    return;
                 }  
            },
            login:function(){
              fetch("http://localhost:3000/login/login", {
                  mode: 'cors',
                  headers: {
                    "content-type":"application/json"
                  },
                  method: 'POST',
                  body: JSON.stringify({
                      u_tel:this.$refs.ipt1.value,
                      u_pwd:this.$refs.ipt2.value
                  })
              })
              .then((res) => {
                      console.log(res.status);
                      return res.json();
              })
              .then( (result) => {
                      console.log(result);
                      if (result.status === 'OK') {
                        alert('登录成功');
                        var phone;
                        this.setCookie('tel',$('#tel').val());
                        location.href="#/msite"
                      } else {
                        alert('您未注册账号，请注册账号后登录')
                      }
                    })
            },
            setCookie (name, value) {
                document.cookie = name + '=' + value;
            }
        }
    }

</script>

<style scoped>
    .header{
        width:16rem;
        background:#1CBB7F;
        height:2rem;
        line-height:2rem;
        font-size:0.6rem;
        
    }
    .header .a1{
        height: 2rem;
        float: left;
        width: 2.10rem;
        text-align: center;
        color:white;
    }
    .header .a1 h1 i{
        height: 2rem;
        width: 1.10rem;
    }
    .header .login{
        height: 2rem;
        float: left;
        width: 9.42rem;
        text-align: center;
        padding-left: 2rem ;
        color:white;
    }
    .header .a2{
        height:2rem;
        float:left;
        width: 4.4rem;
        text-align: right;
        color:white;
        padding-right: 1rem;
    }
    .login-user{
        width:16rem;
        height:4rem;
        background:white;
        padding-left:0.8rem;
        margin-top:0.5rem;
    }
    .login-user form{
        width:16rem;
        height:4rem;
    }
    .login-user input{
        display:block;
        outline:none;
    }
    .userNumber{
        width:16rem;
        height:2rem;
        border-bottom:1px solid #ccc;
    }
    .identifying-code{
        width:16rem;
        height:2rem;
    }
    .check{
        width:16rem;
        height:2rem;
        background:#f7f7f7;
        padding-left:0.9rem;
        font-size:0.6rem;
        font-weight:blod;
        line-height:2rem;
    }
    .check input{
        width:0.8rem;
        height:1rem;
        line-height:1rem;
        display:block;
        float:left;
        margin-top:0.55rem;
    }
    .checke span {
        dispaly:block;
        width:0.8rem;
        height:1rem;
        line-height:0.5rem;
        float:left;
        margin-left:1rem;
    }
    .login-btn{
        height: 2rem;
        padding-left:1rem;
    }
    .login-btn button{
        height: 2rem;
        line-height:2rem;
        width: 14rem;
        border-radius: 0.2rem;
        background: #1CBB7F;
        color: white;
        font-size:0.6rem;
    }
    .way{
        width:16rem;
        height:2rem;
        padding-left:1rem;
        font-size:0.6rem;
        line-height:2rem;
        padding-left:9.9rem;
    }
    .way li{
        float:left;
        width:2.4rem;
    }
    .way li a{
        float:left;
        width:2.4rem;
    }
    .way li.forget {
        margin-right:0.3rem;
    }
    .cooperate{
        padding-left: 1rem;
        font-size: 0.6rem;
    }
    .cooperate img{
        margin-top: 0.5rem;
        width: 2rem;
        height: 2rem;
    }
    .cooperate .img2{
        margin-left: 0.2rem;
    }
</style>
