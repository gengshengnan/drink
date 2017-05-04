 <template>
    <div class="box">
            <div class="spirit_head">
                <div class="head">
                    <a class="back" href="/#msite" ></a>
                    <h2 class="headTitle">商品详情</h2>
                    <a class="navBar active" href="javascript:;"></a>
                </div>
                <ul class="nav">
                    <li class="home"><i></i><span>首页</span><a id="daohang_home" href="#/msite"></a></li>
                    <li class="topsearch"><i></i><span>搜索</span><a id="daohang_search" href="#"></a></li>
                    <li class="cart"><i></i><span>购物车</span><a id="daohang_gouwuche" href="#/cart"></a></li>
                    <li class="commuser"><i></i><span>我的</span><a id="daohang_wodejiuxian" href="#/profile"></a></li>
                </ul>
           </div>


    <div class="xiaolun">
        <ul class="swiper-wrapper" id="lun">
            <li class="swiper-slide tb-lr-center swiper-slide-active" style="width:100%;text-align:center;background:#fff;">
                <img :src="shopList.s_img" alt="" style="width:60%; " >
            </li>

        </ul>
        <span class="goods-num" id="goods-num"><span id="g-active-num">1</span>/<span id="g-all-num">2</span></span>
    </div>


    <div class="detailsbd">
            <div class="detailsTil">
                                <h4 style="margin: 0;">
                    <img src="https://m.jiuxian.com/mjava_statics/images/goods/jxzy.png" class="jxzy" style="display: true">{{shopList.s_name}}</h4>
                            </div>
                        <div class="detailsTip" style="margin: 0;">{{shopList.s_description}}</div>
            
            <div id="priceAndTag">
                <div class="detailsPrice clearfix">
                    <em>￥</em><b style="color:red;">{{shopList.s_price}}</b><span id="detailsPriceJXJ"><span>酒仙价:<s>{{shopList.s_oriprice}}</s></span></span>
                    <span style="display:none" id="detailsPrice_buy_button" class="oPrice"></span>
                </div>
                <div class="detailsPhone clearfix">
                    <!-- <i class="pubIcon iconZsms" id="tag" style="display: inline;"></i> 
                    <em id="lessPcPrice" style="display: none;"></em>  -->
                    <!-- <strong id="limitLastTime" class="limitLastTime" time="32042" style="">剩余 
                    <span class="hours">08</span>小时 
                    <span class="minus">54</span>分 
                    <span class="seconds">02</span>秒
                    </strong> -->
                    
                </div>
            </div>

        </div>

<div class="detailsbd" style="padding: 10px 10px 0;">
            <div class="detailsDl">
                <div class="detailsDl" id="promo" style="">
                    <div class="dt">优惠</div>
                    <div class="dd"><p><em class="LabelCol4">加价购</em>加49元得209元酒具大礼包</p></div>
                </div>
                <div class="detailsDl" id="gifts" style="display: none;"></div>
                <div class="detailsDl">
                    <div class="dt">金币</div>
                    <div class="dd">
                        <p>
                            赠送<b class="coinNum">{{shopList.s_alcoholic}}</b>个金币
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="detailsbd" style="padding: 10px 10px 0; margin-bottom: 0;">
                    <div class="detailsDl">
                        <div class="detailsDl">
                            <input type="hidden" id="goods_number" value="330"> <input type="hidden" id="single_amount" value="97">
                            <div class="dt">数量</div>
                            <div class="dd">
                                <div class="rsCartItem">
                                    <div class="comAmount">
                                            <a id="decrease_number_goods" class="publicIcon minus on" href="javascript:;" @click="dec">-</a> 
                                            <input type="text" id="prosum" v-model="count"> 
                                            <a class="publicIcon plus " href="javascript:;" id="increase_number_goods" @click="inc">+</a>
                                    </div>
                                </div>
                            </div>
                            <div id="numOver">
                                <p class="limitNumTip" style="display: none">超出限购</p>
                                <p class="numOver" id="number_over_goods" style="display: none">您选择的商品数量已超过库存</p>
                            </div>
                        </div>
                    </div>
                    <!-- 地址start -->
                    
                    <div class="dOrder-city" id="_shdz">
                        <!-- <strong class="pubIcon detailBtn"></strong> -->
                        <div class="set-tit">送至</div>
                        <a href="javascript:;" class="dOrder-city-sel"> <b pid="18">辽宁省</b> <b></b><b></b></a>
                        
                    </div>
                    <p class="addTip">有货</p>
                    <!-- 地址end -->

                    <!-- 运费说明 -->
                    
                    <!-- 提示信息 -->
                    <div class="detailsDl">
                        <div class="detailsDl">
                            <div class="dt" style="top: 1px;">提示</div>
                            <div class="dd">
                                <p id="coupon">此商品不能使用优惠券</p>
                                <p id="handBag"> 此商品无原厂手提袋 </p>
                            </div>
                        </div>
                    </div>
                </div>


<div class="detailsSecurityBox">
            <div class="detailsSecurity">
     <span><i style="background: url('https://img06.jiuxian.com/bill/2016/1129/16d97e874a194b55b347ca1f63a89b58.png') no-repeat 0 0; background-size: 13px 13px;"></i>正品保障</span>
     <span><i style="background: url('https://img09.jiuxian.com/bill/2016/1129/8efeb2432fcf4bd585dee2b6d3e800f1.png') no-repeat 0 0; background-size: 13px 13px;"></i>满百包邮</span>
     <span><i style="background: url('https://img06.jiuxian.com/bill/2016/1129/c625b2a3daf94197810e69579d10e031.png') no-repeat 0 0; background-size: 13px 13px;"></i>7天退换</span>
     <span><i style="background: url('https://img06.jiuxian.com/bill/2016/1129/311cd9577b674fa783222f1c9f373cfd.png') no-repeat 0 0; background-size: 13px 13px;"></i>酒仙发货&amp;售后</span>
            </div>
</div>
           

<div class="detailCommentBD">
    <div class="detailCommentTil">
        <div id="goodsComtTil">
            <i class="pubIcon"></i>好评度<strong id="goodEval">99%</strong>
        </div>
        商品评价<em id="totalEval">(668人评价)</em>
    </div>
    
    <ul class="detailCommentUl">
        <li class="comentLi" onclick="jumpToEvalPage(30681,0,0,2)">
            <div class="userTil">
                <em>2017-04-15 02:23:45</em>
                <strong>enjoyGg</strong>
                <span><i class="pubIcon"></i><i class="pubIcon"></i><i class="pubIcon"></i><i class="pubIcon"></i><i class="pubIcon"></i></span>
            </div>
            <p>还可以喝</p>
            <div class="smallUl">
                <ul class="smallList clearfix">
                    <li>
                        <div class="imgBox">
                            <div class="imgHold"></div>
                            <span>
                            <img class="picToEvalPage" src="https://img10.jiuxian.com/eva/2017/0415/74ce90292fc54206a05edebf39ae2ee62.jpg" data-original="https://img10.jiuxian.com/eva/2017/0415/74ce90292fc54206a05edebf39ae2ee62.jpg" style="display: block;">
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </li>

    </ul>   

</div>


<div class="neirong" style="padding:10px;">
    <div class="prodIntroBox detailInfoBox clearfix" style="height: auto;background:#fff;">
        <div class="clearfix">
            <div class="detailTil">产地</div>
            <div class="detailInfo">{{shopList.s_address}}</div>
        </div>
        <div class="clearfix">
            <div class="detailTil">香型</div>
            <div class="detailInfo">{{shopList.s_odor}}</div>
        </div>
        <div class="clearfix">
            <div class="detailTil">原料</div>
            <div class="detailInfo">{{shopList.s_material}}</div>
        </div>
        <div class="clearfix">
            <div class="detailTil">贮藏条件</div>
            <div class="detailInfo">阴凉、避光、密封保存</div>
        </div>
        <!-- <div class="clearfix">
            <div class="detailTil">酒厂</div>
            <div class="detailInfo">四川水井坊股份有限公司</div>
        </div> -->
        <div class="clearfix">
            <div class="detailTil">箱规</div>
            <div class="detailInfo">{{shopList.s_spec}}</div>
        </div>
        <div class="clearfix">
            <div class="detailTil">酒精度</div>
            <div class="detailInfo">{{shopList.s_alcoholic}}</div>
        </div>
        <div class="clearfix">
            <div class="detailTil">净含量</div>
            <div class="detailInfo">{{shopList.s_capacity}}</div>
        </div>
    </div>

    <div class="prodDet">
        <p class="detialTit">
            <i></i>温馨提示
        </p>
        <p style="font-size: 14px;line-height: 1.5;color: #848484;">根据新修订的《商标法》及国家工商总局最新文件要求，2014年5月1日之后不得将“驰名商标”字样用于商品宣传，酒仙网依法对商品图片中含“驰名商标”字样做马赛克处理；同时，涉及厂家正在按照新规定逐步更换包装，在此期间，我们将对新旧包装货品随机发货，请以实际收到的货物为准。给您带来的不便，敬请谅解。</p>
    </div>

    <div class="prodDet">
        <p class="detialTit">
            <i></i>商品特点
        </p>
        <div class="detailImg" style="margin-bottom:50px;">
            <div style="text-align: center;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/838e489bc66c45259c585bef57e5543a.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/8dd90479f6b345bd89279831a7c4d57e.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/03f973df851b4ec48ebf2925b1050e76.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/778bdb49377446de8d58895f30188bbc.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/cd3a2dd3f5af4cbbb9d40596168da625.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/1de7384117f74e24ab173f9fdcfa2dc0.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/d2099947bad74a7a9c48c2638526cf3f.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/69744e28c7904b888c35c18af57cf0f4.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/a1e5dabe03a44a3b87653371b890ecf5.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/7b364b2dedd94ea69096a04887161e3f.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/b60ed49756894a9bb33b8e9011e85366.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/6e5bebe566a7495bb63f150bad577c1a.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/c800be54afc542a381affc302d1973d1.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/4b9fae0d800e45369ed3139dc923f5de.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/e47ea654293c4f34a4bedef33c6f5575.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/bf99a695374541409f588b11bd9bc331.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/141f69e07a1a484ca6814ce4d1e8fc3f.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/7ece3fd86952466e83ab39f30ff43475.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/1214c257fc6f47a0a81a0265c298db66.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/bc17ad709e58497db7c8c351fef7a4f2.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/f8cb9db668374141acf9d7ea164d7e67.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/66bd3d4fc57040079fa7c52b9f066878.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/67c36634f8b543f98bb8b5d052124371.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/b3506501b1514f8687fb5ea83c84b7e5.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/f8fd66e33c804d1e830cc10701dd672d.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/1047a8d3ceb24b8ebb38400e5b48d32e.jpg" style="width:100%; display:block;">
                <img src="http://img10.jiuxian.com/bill/2015/1111/a7c4a7221973417bb8a16ff0e3da5d84.jpg" style="width:100%; display:block;">
            </div>
        </div>
    </div>


</div>

            <div class="bottomFix">
                <div class="detailBomNav">
                    <ul>
                                <li style="display: true">
                                    <a href="javascript:;" id="zaixiankefu"> 
                                        <i class=" shijiushiIcon " onclick="kefu('jx_1000_1487130596583')"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="javascript:;" class="" id="collect_goods"> 
                                    <i class=" collectIcon " onclick="toggleCollect()"></i>
                                    </a>
                                </li> 
                        
                        <li><em id="cartNums" v-model="gw">{{gw}}</em> 
                        <a id="detail_gouwuche" href="#/order"><i class="cartIcon2"></i></a>
                        </li>
                    </ul>
                </div>
                
                <div class="detailBomRight" id="footerBar"><li class="inCart"><a class="detailLink toCart"  href="javascript:;" id="toCart_goods" @click="addshop">加入购物车</a></li><ul id="canBuy"><li><a class="detailLink detSty buyNow" onclick="good_a(&quot;buy_wap&quot;,&quot;&quot;)" href="javascript:;" id="buyNow_goods">立即购买</a></li></ul></div>
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
    import $ from 'jquery';
    export default {
      data(){
            return{
                shopList:[],
                count: 1,
                gw:0,
                cookie:null
            }
        },
        methods: {
            inc () {
                // console.log('你好')
              this.count++
            },
            dec () {
                if(this.count > 1){
                  this.count--
                }
            },
            addshop(){
               console.log(this.count)
               console.log(this.gw)
              this.gw += parseInt(this.count)
              this.cookie = document.cookie.split(";")[0].split('=')[1]
            fetch("http://localhost:3000/insertcart/insertcart",{  
                  mode: 'cors',
                  method: 'POST',
                  headers: {
                    "content-type":"application/json"
                  },
                  body: JSON.stringify({ 
                      u_id:this.cookie,
                      s_id:this.$route.params.id,
                      b_count: this.gw
                  })
               })
          .then((res) => {
              console.log(res);
              // console.log(res.data);
              return res.json();
           })
          .then( (data) => {
            console.log(data);
            // this.shopList = data[0];
           })


            }
        },
        created(){

        },
        mounted () {
            var that =this;
            var id = this.$route.params.id
          $(function(){
            $('.navBar').click(function(){
              $('.nav').toggle()  
            })
          })

            fetch("http://localhost:3000/detail/detail",{  
              mode: 'cors',
              method: 'POST',
              headers: {
                "content-type":"application/json"
              },
              body: JSON.stringify({
                  id: id
              })
           })
          .then((res) => {
              console.log(res);
              // console.log(res.data);
              return res.json();
           })
          .then( (data) => {
            console.log(data);
            this.shopList = data[0];
           })

        },
        
        mixins: [getImgPath],
        components: {
            headTop,
            footGuide,
        },
        props:[]
    }
</script>
  
<style scoped>

.prodDet {
    margin-bottom: 10px;
}
.detialTit i {
    float: left;
    height: 8px;
    width: 8px;
    overflow: hidden;
    background: #b00000;
    margin: 8px 8px 0 0;
}
.detialTit {
    height: 24px;
    line-height: 24px;
    background: url(https://m.jiuxian.com/mjava_statics/images/prodInfoBg.jpg) 0 0 repeat-x;
    padding: 0 10px;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
}
.prodDet {
    margin-bottom: 10px;
}
.clearfix:after {
    clear: both;
    display: block;
    content: "...";
    visibility: hidden;
    height: 0;
    font-size: 0;
}
.detailInfoBox .detailTil, .detailInfoBox .detailInfo {
    display: inline-block;
    font-size: 13px;
    overflow: hidden;
    line-height: 25px;
    float: left;
}
.detailInfoBox .detailInfo {
    color: #252525;
    width: 70%;
    float: left;
}
.detailInfoBox .detailTil, .detailInfoBox .detailInfo {
    display: inline-block;
    font-size: 13px;
    overflow: hidden;
    line-height: 25px;
    float: left;
}
.detailInfoBox .detailTil {
    width: 28%;
    height: 25px;
    color: #999;
    overflow: hidden;
    float: left;
}
.showCon.showCon1 {
    color: #848484;
    max-width: 780px;
    margin: 0 auto;
    padding: 10px 10px 45px;
}
.detailInfoBox {
    width: 100%;
}
.neirong{
    height: 100px;
}
.detailCommentUl {
    padding: 0 10px;
}
.comentLi {
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    border-width: 0 0 1px;
}
.comentLi .userTil em {
    color: #666;
    font-size: 12px;
    font-weight: normal;
    float: right;
}
.comentLi .userTil strong {
    color: #666;
    font-size: 12px;
    font-weight: normal;
    margin-right: 20px;
}
.comentLi .userTil span i {
    background-position: 0 -70px;
    width: 9px;
    height: 9px;
    display: inline-block;
    margin-right: 2px;
}
.pubIcon {
    background: url(https://m.jiuxian.com/mjava_statics/images/goods/catIcon.png) no-repeat 0 0;
    background-size: 150px;
    background-position: 0 -97px;
    width: 58px;
    height: 14px;
}
.comentLi p {
    padding: 5px 0;
    font-size: 12px;
    color: #252525;
}
.comentLi .smallUl {
    width: 100%;
}

.comentLi ul {
    width: 100%;
}
.comentLi li {
    width: 22%;
    float: left;
    margin: 2% 2% 0 0;
    overflow: hidden;
}
.comentLi li .imgBox {
    padding-bottom: 100%;
    position: relative;
}
.comentLi li .imgHold {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.clearfix:after {
    clear: both;
    display: block;
    content: "...";
    visibility: hidden;
    height: 0;
    font-size: 0;
}
.comentLi li .imgBox span {
    font-size: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    height: 100%;
    overflow: hidden;
    width: 100%;
}
.comentLi li .imgBox img {
    width: 100%;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 2;
}
.detailCommentBD {
    margin-bottom: 8px;
    background-color: #fff;
}
.detailCommentTil {
    border-bottom: 1px solid #f0f0f0;
    border-width: 0 0 1px;
    height: 44px;
    line-height: 44px;
    position: relative;
    padding: 0 10px;
    color: #252525;
    font-size: 14px;
}
.detailCommentTil div {
    display: block;
    float: right;
    color: #666;
    font-size: 12px;
    position: relative;
}
.detailCommentTil em {
    color: #999;
    font-size: 12px;
    padding-left: 5px;
}
.detailCommentTil div i {
    background-position: -130px -40px;
    width: 10px;
    height: 13px;
    overflow: hidden;
    display: block;
    position: absolute;
    top: 16px;
    right: 5px;
}
.pubIcon {
    background: url(https://m.jiuxian.com/mjava_statics/images/goods/catIcon.png) no-repeat 0 0;
    background-size: 150px;
    background-position: 0 -97px;
    width: 58px;
    height: 14px;
}
.detailCommentTil div strong {
    color: #fc5a5a;
    padding-left: 2px;
    font-weight: normal;
    padding-right: 14px;
}
.detailsSecurityBox {
    padding: 10px 12px;
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 8px;
    background: #f9f9f9;
}
.detailsSecurity {
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    position: relative;
}
.detailsSecurity span {
    float: left;
    color: #666;
    font-size: 12px;
    display: block;
    height: 20px;
    margin-right: 15px;
}
.detailsSecurity i {
    width: 13px;
    height: 13px;
    display: block;
    float: left;
    margin: 3px 3px 0 0;
}
.detailsDl {
    width: 100%;
    position: relative;
    margin-bottom: 5px;
}
.detailsDl .dt {
    display: inline-block;
    line-height: 20px;
    height: 20px;
    font-size: 14px;
    color: #666;
    position: absolute;
    top: 1px;
    left: 0;
}
.detailsDl .dd .rsCartItem {
    width: 75px;
    height: 22px;
    border: 1px solid #e8e8e8;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    padding: 0;
}
.detailsDl .dd .comAmount {
    width: 75px;
    height: 22px;
    position: relative;
    padding: 0;
}
.detailsDl .dd .comAmount .minus {
    left: 0;
    border-right: 1px solid #e8e8e8;
}
.detailsDl .dd .comAmount a {
    width: 20px;
    height: 22px;
    position: absolute;
    top: 0;
    overflow: hidden;
    color: #666;
    cursor: pointer;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
}
.detailsDl .dd a {
    display: block;
}
.detailsDl .dd .comAmount input {
    display: inline-block;
    width: 75px;
    height: 22px;
    line-height: 22px;
    text-align: center;
}
input[type=submit], input[type=button], input[type=text], input[type=password] {
    -webkit-appearance: none;
    box-sizing: content-box;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    outline: none;
    font-family: Microsoft YaHei;
}
.detailsDl .dd .comAmount .plus {
    right: 0;
    border-left: 1px solid #e8e8e8;
}
.dOrder-city {
    padding: 10px 0 0;
    color: #252525;
    height: 24px;
    z-index: 3;
}
.pubIcon {
    background: url(../../images/catIcon.png) no-repeat 0 0;
    background-size: 150px;
    background-position: 0 -97px;
    width: 58px;
    height: 14px;
}
.dOrder-city .detailBtn {
    background-position: -130px -40px;
    display: block;
    height: 13px;
    overflow: hidden;
    position: absolute;
    right: 5px;
    top: 18px;
    width: 10px;
}
.set-tit {
    float: left;
    line-height: 24px;
    color: #666;
}
.dOrder-city .dOrder-city-sel {
    color: #252525;
    float: left;
    height: 22px;
    line-height: 22px;
    margin-left: 10px;
    display: inline-block;
    background: #fff;
    padding-left: 5px;
    position: relative;
    z-index: 1;
    display: block;
    width: 80%;
}
.dOrder-city .dOrder-city-sel b {
    color: #252525;
    font-weight: normal;
    padding-right: 5px;
    vertical-align: middle;
}
.addTip {
    color: #fc5a5a;
    margin-left: 42px;
    font-size: 12px;
    padding-bottom: 10px;
    text-align: left;
}

.detailsDl {
    width: 100%;
    position: relative;
    margin-bottom: 5px;
}
.detailsDl {
    width: 100%;
    position: relative;
    margin-bottom: 5px;
}
.detailsDl .dt {
    display: inline-block;
    line-height: 20px;
    height: 20px;
    font-size: 14px;
    color: #666;
    position: absolute;
    top: 1px;
    left: 0;
}
.detailsDl .dd {
    margin: 0 0 5px 42px;
    display: inline-block;
    color: #252525;
    width: 90%;
    font-size: 14px;
    padding-right: 10px;
    position: relative;
}
.detailsDl .dd p {
    line-height: 20px;
    margin-bottom: 5px;
}
.detailsDl .dd p em.LabelCol4 {
    background-color: #ff704f;
}
.detailsDl .dd p em {
    display: block;
    float: left;
    height: 16px;
    line-height: 16px;
    padding: 0 4px;
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    background-color: #fc6a6a;
    color: #fff;
    font-size: 11px;
    margin: 2px 6px 0 0;
}
.detailsDl .dt {
    display: inline-block;
    line-height: 20px;
    height: 20px;
    font-size: 14px;
    color: #666;
    position: absolute;
    top: 1px;
    left: 0;
}
.detailsDl .dd {
    margin: 0 0 5px 42px;
    display: inline-block;
    color: #252525;
    width: 90%;
    font-size: 14px;
    padding-right: 10px;
    position: relative;
}
.detailsDl .dd p {
    line-height: 20px;
    margin-bottom: 5px;
}
.detailsDl .dd p b {
    color: #fc6a6a;
    font-weight: normal;
}
.detailsDl .dd p {
    line-height: 20px;
    margin-bottom: 5px;
}
.detailsbd {
    padding: 10px;
     margin-bottom: 8px;
    background-color: #fff;
    font-size: 14px;
    line-height: 1.5;
}
.detailsTil {
    position: relative;
    margin-bottom: 8px;
}
.detailsTil h4 {
    margin-right: 70px;
    font-size: 15px;
    color: #252525;
    line-height: 35px;
    display: inline-block;
    font-weight: 500;
}
.jxzy {
    width: 38px;
    height: 13px;
    vertical-align: top;
    margin: 9px 5px 0 0;
}
.detailsTip {
    font-size: 13px;
    color: #fc5a5a;
    margin-right: 70px;
}
.detailsPrice {
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    padding: 0 0 5px 0;
    color: #fc5a5a;
    position: relative;
}
.detailsPrice {
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    padding: 0 0 5px 0;
    color: #fc5a5a;
    position: relative;
}
.detailsPrice em {
    font-size: 14px;
    float: left;
    position: relative;
    top: 1px;
    padding-right: 2px;
}
address, cite, dfn, em, var {
    font-style: normal;
}
.detailsPrice b {
    font-weight: normal;
    font-size: 19px;
}
.detailsPrice span {
    font-size: 12px;
    color: #999;
    padding-left: 8px;
}
.detailsPhone {
    line-height: 14px;
    font-size: 12px;
    margin-bottom: 5px;
    position: relative;
}
.detailsPhone i.iconZsms {
    background-position: 0 -132px;
    width: 58px;
    height: 14px;
}
.detailsPhone i {
    background-position: -40px -50px;
    width: 57px;
    height: 14px;
    display: none;
    float: left;
    margin-right: 5px;
}
.pubIcon {
    background: url(../../images/catIcon.png) no-repeat 0 0;
    background-size: 150px;
    background-position: 0 -97px;
    width: 58px;
    height: 14px;
}
.detailsPhone em, .detailsPhone em span {
    color: #fc5a5a;
}
.detailsPhone .limitLastTime {
    font-size: 12px;
    color: #666;
    padding-left: 8px;
    font-weight: normal;
}
.detailsPhone strong {
    margin-left: 5px;
    font-weight: normal;
    color: #999;
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

#lun{
    display: flex;
    overflow: hidden;
}
.xiaolun{
    position: relative;
    width: 100%;
    overflow: hidden;
}
.goods-num {
    position: absolute;
    font-size: 0.27rem;
    color: #fff;
    height: 0.62rem;
    line-height: 0.62rem;
    padding: 0 0.24rem;
    border-radius: 0.3rem;
    right: 0.3rem;
    bottom: 0.3rem;
    background: rgba(0,0,0,0.5);
    z-index: 5;
}

.filter-btn{
    
    background: #fafafc;
}
em{
    font-style: normal;
    font-size: 12px;
    display: inline-block;
}
.iconfont{
    display: inline-block;
    font-size: 12px;
}
.filter-btn{
    padding: 9.6px;
    overflow: hidden;
}

.filter-btn-flow{
    position: relative;
}
#total_number{
    position: absolute;
    top: 2px;
    right: 4px;
    font-size: 12px;
}
.n-iphone5-top1{
    width: 115px;
    float: left;
    font-size: 18px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
}
.filter-btn-a{
    float: left;
}
.btn-cart{
    background: #f4a213;
    padding: 0.2rem;
    margin-right: 10px;
}
.btn-submit {
    background: #1CBB7F;
    padding: 0.2rem;
}
.bottomFix {
    background-color: #fafafa;
    position: fixed;
    height: 45px;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
}
.detailBomNav {
    float: left;
    width: 50%;
    height: 45px;
    position: relative;
}
.detailBomNav ul {
    display: -webkit-box!important;
    display: -moz-box;
    display: box;
    display: -webkit-flex!important;
    display: -moz-flex;
    display: flex!important;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4, h5, h6, i, b, textarea, button, input, select, figure, figcaption {
   
    box-sizing: content-box;
  
}
.detailBomNav li {
    height: 41px;
    padding-top: 3px;
    position: relative;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    flex: 1;
    -webkit-flex-basis: 0;
    -moz-flex-basis: 0;
    flex-basis: 0;
    overflow: hidden;
}
.detailBomNav li a {
    display: block;
    width: 100%;
    height: 41px;
}
.detailBomNav .shijiushiIcon {
    background: url(https://m.jiuxian.com/mjava_statics/images/goods/sjs.png) no-repeat;
    background-size: 41px 41px;
}
.detailBomNav li a i {
    display: block;
    width: 41px;
    height: 41px;
    margin: 0 auto;
}
.detailBomNav li:after {
    border-right: 1px solid #d7d7d8;
    content: "";
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
    width: 1px;
    z-index: 10;
}
.detailBomNav .collectIcon {
    background: url(https://m.jiuxian.com/mjava_statics/images/goods/bottom05.png) no-repeat;
    background-size: 41px 41px;
}
.detailBomNav li em {
    position: absolute;
    top: 3px;
    left: 50%;
    height: 14px;
    line-height: 14px;
    overflow: hidden;
    display: block;
    padding: 0 5px;
    color: #fff;
    border-radius: 7px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    background-color: #fc5a5a;
    font-size: 8px;
}
.detailBomNav .cartIcon2 {
    background: url(https://m.jiuxian.com/mjava_statics/images/goods/bottom06.png) no-repeat;
    background-size: 41px 41px;
}
.detailBomRight {
    margin-left: 50%;
    height: 46px;
    display: -webkit-box!important;
    display: -moz-box;
    display: box;
    display: -webkit-flex!important;
    display: -moz-flex;
    display: flex!important;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.detailBomRight li.inCart {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    flex: 1;
    -webkit-flex-basis: 0;
    -moz-flex-basis: 0;
    flex-basis: 0;
}
.detailBomRight li .detailLink.toCart {
    background-color: #fc5a5a;
}
.detailBomRight li .detailLink {
    display: block;
    width: 100%;
    height: 46px;
    line-height: 46px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    position: relative;
}
.detailBomRight ul {
    height: 46px;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    flex: 1;
    -webkit-flex-basis: 0;
    -moz-flex-basis: 0;
    flex-basis: 0;
}
#canBuy li, #cannotBuy li {
    width: 100%;
}
.detailBomRight li .detailLink.detSty {
    background-color: #3c3f51;
}

</style>
