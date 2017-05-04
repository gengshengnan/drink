<template>
  <div class="profile_page">
        <!-- <head-top go-back='true' :head-title="profiletitle"></head-top> -->
        <div class="header_profile_page">
            <dl>
                <dt>
                    <a href="javascript:;">
                        <img src="../../images/1.jpg">
                    </a>
                   <!--  <form id="frm" method="post" action="regest4submit" enctype="multipart/form-data">
                        <input type="file" id="header" name="header"><br>
                   </form> -->
                </dt>
                <dd>
                    <h3>{{this.cookie}}</h3>
                    <span>关注<b>0</b></span>
                    <span>粉丝<b>0</b></span>
                </dd>
            </dl>
            <i></i>
        </div>
        <div class="header_bottom">
            <ul>
                <li>
                    <a href="#">
                        <i class="iconfont">&#xe637;</i>
                        <span>关注</span>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <i class="iconfont">&#xe64d;</i>
                        <span>收藏</span>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <i class="iconfont">&#xe62b;</i>
                        <span>足迹</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="nav_profile_page">
            <ul>
                <li>
                    <a href="">
                        <i class="iconfont">&#xe662;</i>
                        <span>待付款</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="iconfont">&#xe627;</i>
                        <span>待收货</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="iconfont">&#xe7df;</i>
                        <span>待评价</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="iconfont">&#xe638;</i>
                        <span>售后</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i class="iconfont">&#xe622;</i>
                        <span>全部订单</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="content-page">
           <dl>
               <dt>
                   <i></i>
                   <span>我的钱包</span>
               </dt>
               <dd>
                   <span class="pay-day">白付美分期商城 在这里</span> 
                   <i></i>
               </dd>
           </dl>
           <dl>
               <dt>
                   <i></i>
                   <span>优惠券</span>
               </dt>
               <dd>
                   <i></i>
               </dd>
           </dl>
           <dl>
               <dt>
                   <i></i>
                   <span>会员中心</span>
               </dt>
               <dd>
                   <i></i>
               </dd>
           </dl>
           <dl>
               <dt>
                   <i></i>
                   <span>蘑豆商城</span>

               </dt>
               <dd>
                   <span class="pay-day">领蘑豆</span>
                   <i></i>
               </dd>
           </dl>
           <dl>
               <dt>
                   <i></i>
                   <span>分享有礼</span>
               </dt>
               <dd>
                   <span class="pay-day">轻松赚1000元</span>
                   <i></i>
               </dd>
           </dl>
           <dl>
               <dt>
                   <i></i>
                   <span>体验新版</span>
               </dt>
               <dd>
                   <i></i>
               </dd>
           </dl>
        </div>
        <div class="content-page-other">
            <dl>
                <dt>
                    <i></i>
                    <span><a href="#/regist" style="color:#00f">注册</a></span>
                </dt>
                <dd>
                    <i></i>
                </dd>
            </dl>
            <dl>
                <dt>
                    <i></i>
                    <span><a href="#/login" style="color:#00f">登录</a></span>
                </dt>
                <dd>
                    <i></i>
                </dd>
            </dl>
        </div>

        <foot-guide></foot-guide>
   </div>
</template>

<script>
import headTop from 'src/components/header/head'
import footGuide from 'src/components/footer/footGuide'
import {mapState, mapMutations} from 'vuex'
import {imgBaseUrl} from 'src/config/env'
import {getImgPath} from 'src/components/common/mixin'

export default {
    data(){
        return{
            profiletitle: '我的',
            getUserinfo: {},        //得到数据
            username: '登录/注册',           //用户名
            resetname: '',
            mobile: '登录后享受更多特权',             //电话号码
            balance: 0,            //我的余额
            count : 0,             //优惠券个数
            pointNumber : 0,       //积分数
            avatar: '',             //头像地址
            imgBaseUrl,
            cookie:null,
        }
    },
   components: {
            footGuide
        },
    mounted(){
         this.cookie = document.cookie.split(";")[0].split('=')[1]
         console.log(this.cookie)
    }

    
}

</script>

<style scoped>
    .profile_page{
        width: 16rem;
    }
    .header_profile_page{
        width:16rem;
        height: 2.5rem;
        background: white;
        background: rgb(255,245,247);
    }
    .header_profile_page dl{
        width:16rem;
        height: 2.5rem;
    }
    .header_profile_page dl dt{
        width: 3rem;
        height: 2.5rem;
        float: left;
    }
    .header_profile_page dl dt img{
        width: 2rem;
        height: 2rem;
        padding: 0.25rem 0 0 0.5rem;
    }
    .header_profile_page dl dd{
        float: left;
        width: 10rem;
        height: 2.5rem;
        margin-left: 0.2rem;
        padding-top: 0.2rem;
    }
    .header_profile_page dl dd h3{
        font-size: 0.6rem;
    }
    .header_profile_page dl dd span{
        font-size: 0.5rem;
    }
    .header_bottom{
        width: 16rem;
        height: 2rem;
    }
    .header_bottom ul{
        width: 16rem;
        height: 2rem;
        line-height: 2rem;
    }
    .header_bottom ul li{
        float: left;
        font-size: 0.6rem;
        width: 5rem;
        height: 2rem;
        text-align: center;
    }
    .nav_profile_page{
        width: 16rem;
        height: 3rem;
        font-size: 0.5rem;
        line-height: 3rem;
        background: rgb(137,190,178);
    }
    .nav_profile_page ul{
        width: 16rem;
        height: 3rem;
        font-size: 0.6rem;
    }
    .nav_profile_page ul li{
        float: left;
        border: none;
        padding-left: 0.4rem;
    }
    .nav_profile_page ul li span{
    }
    .content-page{
        width: 16rem;
        height: 12rem;
        margin-top: 1rem;
        font-size: 0.6rem;
        background: white;
    }
    .content-page dl{
        width: 16rem;
        height: 2rem;
        line-height: 2rem;
        border-bottom: 1px solid #ccc;
    }
    .content-page dl dt{
        float: left;
        padding-left: 0.5rem;
        width: 7rem;
    }
    .content-page dl dd{
        float: right;
        padding-right: 0.5rem;
        width: 6rem;
        text-align: center;
    }
    .content-page dl dd .pay-day{
        font-size: 0.2rem;
    }
    .content-page-other{
        width: 16rem;
        height: 4rem;
        margin-top: 1rem;
        font-size: 0.6rem;
    }
    .content-page-other dl{
        width: 16rem;
        height: 2rem;
        line-height: 2rem;
        border-bottom: 1px solid #ccc;
    }
    .content-page-other dl dt{
        width: 7rem;
        height: 2rem;
        float: left;
        padding-left: 0.5rem;
    }
    .content-page-other dl dd{
        float: right;
        padding-right: 0.5rem;
        width: 5rem;
        text-align: center;
    }
</style>
