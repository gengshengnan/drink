 <template>
    <div class="spirit">
        <div class="spirit_head">
            <div class="head">
                <a class="back" href="/#msite" ></a>
                <h2 class="headTitle">白酒</h2>
                <a class="navBar active" href="javascript:;"></a>
            </div>
            <ul class="nav">
                <li class="home"><i></i><span>首页</span><a id="daohang_home" href="#/msite"></a></li>
                <li class="topsearch"><i></i><span>搜索</span><a id="daohang_search" href="#/msite"></a></li>
                <li class="cart"><i></i><span>购物车</span><a id="daohang_gouwuche" href="#/order"></a></li>
                <li class="commuser"><i></i><span>我的</span><a id="daohang_wodejiuxian" href="#/profile"></a></li>
            </ul>
       </div> 

        <div class="main_pic" style="overflow: hidden;">
            <img class="l" src=" https://img10.jiuxian.com/bill/2017/0411/2d9508d3240744858c4aca13c73c354a.jpg"> 
            <div class="r">
                <img class="pic" src=" https://img09.jiuxian.com/bill/2017/0316/293e4fea00344a648111a14795367634.jpg">
                <img class="pic" src=" https://img07.jiuxian.com/bill/2017/0328/198580fc02c0477d8b51a41d3330e7c0.jpg">
            </div>
        </div>
        
        <div class="main_list">
            <ul class="list">
               <li><a href="">茅台</a></li>
               <li><a href="">五粮液</a></li> 
               <li><a href="">汾酒</a></li>
               <li><a href="">泸州老窖</a></li>
            </ul>
            <ul class="list">
               <li><a href="">酱香</a></li>
               <li><a href="">清香</a></li> 
               <li><a href="">浓香</a></li>
               <li><a class="last" href="">查看全部</a></li>
            </ul>
        </div>
      
        <div class="recommend">
            <div class="title">
                <div></div>
                <div>精品推荐</div>
                <div></div>
            </div>
            
            <div class="con"  v-for="item in list">
               <img class="l" :src="item.s_img">
               <div class="r">
                  <span class="con_name">{{item.s_name}}</span>  
                  <span class="price">￥{{item.s_price}}.00</span>
               </div>
            </div>

           
        </div>
        <!-- <head-top head-title="发现" go-back='true'></head-top> -->
        
        <!-- <foot-guide></foot-guide> -->
    </div>
</template>

<script>
    import headTop from 'src/components/header/head'
    import {getImgPath} from 'src/components/common/mixin'
    import footGuide from 'src/components/footer/footGuide'
    import 'whatwg-fetch'
    import $ from 'jquery';
    export default {
      data(){
            return{
              list:[] 
            }
        },
        mounted(){
          var that = this;
          fetch("http://10.5.154.49:3000/spirit/spirit", {
            mode: 'cors',
            headers: {
              "content-type":"application/json"
            },
            method: 'GET'
       })
        .then((res) => {
            // console.log(res);
            // console.log(res.data);
            return res.json();
        })
        .then( (data) => {
          console.log(data);
          that.list = data;
        })
        $(function(){
            $('.navBar').click(function(){
              $('.nav').toggle()
              
            })
            $('.toTop').click(function() {
              $("html,body").animate({
                scrollTop: 0
              }, 500);
            })
          })
        },
        created(){

        },
        mixins: [getImgPath],
        components: {
            headTop,
            footGuide,
        },
        props:[],
        methods: {
            
        }
    }
</script>
  
<style scoped>
body{
    height:100%;
    width:100%;
}
body,html{
    background-color: #ffffff!important;
}
.spirit{
  background-color: #ffffff!important;
}

.main_pic{
    width:100%;
    height:9rem;
    padding:0.5rem;
}
.title{
  font-size: 16px;
}
.iconfont{
  color:#ffffff;
  font-size:20px;
  padding-right:0.3rem;
}
.main_pic img.l{
    width:55%;
    float:left;
    height:100%;
}
.main_pic .r{
    width:45%;
    float:right;
}
.main_pic .r img.pic{
    width:100%;
    height:4rem;
}
.main_list{
    width:100%;
    height:4rem;
}
.main_list ul.list{
  width:100%;
  height:1rem;
}
.main_list ul.list li{
    font-size: 14px;
    float:left;
    width:25%;
    text-align: center;
}
.main_list ul.list li a{
    border:0.1rem solid #cecece;
    padding:0.1rem 0.13rem;
    display: block;
}
.main_list ul.list li a.last{
    color:#f00;
}
.list li{
  border-bottom:0;
}
.recommend{
    width:100%;
    padding:0 0.9rem;
    min-height:8rem;

    margin-top:1rem;
}
.recommend .title{
    width:100%;
    height:1.5rem;
}
.recommend .title div:nth-child(1),.recommend .title div:nth-child(3){
    width:33%;
    height:50%;
    float: left;
    border-bottom:0.1rem solid #ccc;
}
.recommend .title div:nth-child(2){
    width:33%;
    height:100%;
    float: left;
    font-size: 16px;
    text-align: center;
    margin-top:0.2rem;
}
.recommend .con{
  width:100%;
  height:5.7rem;
  margin-top:0.3rem;
  border-bottom:2px solid #ccc;
}
.recommend .con .l{
    float:left;
    width:38%;
    margin-right:0.2rem;
}
.recommend .con .l img{
    width:100%;

}
.recommend .con .r{
    width:58%;
    float:left;
}
.recommend .con .r .con_name{
  display: block;
  font-size: 14px;
  margin-top:1rem;
}
.recommend .con .r .price{
  display: block;
  color:#e15853;
  margin-top:1.4rem;
  font-weight: bold;
  font-size:18px;
}
.spirit_head{
    width:100%;
    height:40px;
    background: #de4943
  }
  .nav span{
    font-size: 14px;
    color: #848d96;
  }
.head{
    display: flex;
    justify-content:space-around;
}
.headTitle{
    color: #fff;
    font-size: 16px;
    font-style: normal;
    line-height: 40px;
    width: 220px;
    text-align: center;
}
.nav {
    height: 45px;
    background-color: #efefef;
    color: #848d96;
    top: 40px;
    border-bottom: 1px solid #ccc;
    display: block; 
    display: none;
}
.nav li {
    width: 25%;
    height: 45px;
    float: left;
    position: relative;
}
.nav .home i {
    background-position: -3px -5px;
}
.nav li i {
    width: 26px;
    height: 20px;
    display: block;
    margin: 5px auto 0;
}
.head .navBar, .nav li i {
    background: url(../../images/headIcon.png) no-repeat;
}
.head .navBar {
    background-position: -150px 6px;
    right: 10px;
}
.head .back, .head .navBar {
    width: 30px;
    height: 40px;
    position: absolute;
    top: 0;
    display: block;
}
.head .back {
    left: 10px;
}
.head .back {
    background: url(../../images/headBack.jpg) no-repeat;
}
.nav li span {
    width: auto;
    height: 18px;
    line-height: 18px;
    display: block;
    text-align: center;
}
.nav li a {
    width: 100%;
    height: 45px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    opacity: 0;
}
.nav .topsearch i {
    background-position: -37px -5px;
}
.nav .cart i {
    background-position: -72px -5px;
}
.nav .commuser i {
    background-position: -113px -5px;
}
</style>
