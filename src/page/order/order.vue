 <template>
    <div class="order_page">
        <header head-title="订单列表" go-back='true'>
            <a href=""><i class="iconfont">&#xe603;</i></a>
            <span>购物车</span>
            <a href=""><i class="iconfont">&#xe617;</i></a>
        </header>
        <div class="title">
            <p class="title_one">☞自营商品实付满100免运费，偏远地区实付满1000免运费~</p>
        </div>

       <div id="black">
            <div class="middle">
            <div class="container">
                <i class="iconfont">&#xe626;</i>
            </div>
            <p class="p_one">购物车还是空的</p>
            <p class="p_two">快去逛逛吧☺</p>
        </div>
       </div>

        <div class="pucTitle">
            <label>
                    <input type="checkbox"  name="catCheck"  data-type="checkbox" style="margin-left:10px;" v-model="tate">
                    <!-- <i id="0" class="pubIcon tureIcon"></i> -->
            </label>
            <span class="jxzy"><img src="https://mcart.jiuxian.com/statics/images/jx.png"></span>
            <span class="title" style="background:#fff; border:0;">酒仙自营</span>
        </div>
        <!-- 数据层开始 -->
        <ul class="catShopList">
            <li v-for="(item,val,index) in list" class="cartlist">
                <div class="catShopCont" cart_unit="_30764">

                    <a href="javascript:void(0)" id="remove" class="pubIcon delIcon" @click="remove">删除</a>
                    <label>
                    <!-- checkbox -->
                    <input type="checkbox"  name="catCheck"  data-type="checkbox" style="position:absolute; top:45px; left:10px; width:14px; height:14px; " 
                    v-bind:class="{check:item.isChecked}" @click="selectGood(item)">
                    </label>

                    <div class="catShopInfo clearfix">
                        <div class="catImg catImgThr"  style="width:70px; margin-left:10px;">
                            <a href="#">
                                <img :src="item.s_img" style="border:1px solid #ccc;">
                            </a>
                        </div>

                        <div class="catInfo">
                            <a href="#">
                                <h4>{{item.s_name}}</h4>
                                <h5 id="listid" style="display:none">{{item.s_id}}</h5>
                            </a>
                            <p><span>¥{{item.s_price}}.00</span></p>
                            <span style="display:none">总价{{item.s_price * item.b_count}}</span>
                            
                            <div class="rsCartItem">
                                <div class="comAmount" style="display:flex; ">
                                    <a id="decrease_number_goods" class="publicIcon minus on" href="javascript:;" @click="dec(item,val,index)">-</a> 
                                    <input type="text" id="prosum" style="width:73px; height:20px;" v-model="item.b_count"> 
                                    <a class="publicIcon plus " href="javascript:;" id="increase_number_goods" @click="inc(item,val,index)">+</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="catShopLink"></div>  
            </li>
        </ul>

        <!-- 数据层结束 -->
        <div class="catBomAllCheak">
            <label for="bt" data-type="checkallcli"><input type="checkbox"  name="catCheck"  data-type="checkbox" style="position:absolute; top:18px; left:10px; width:14px;height:14px" :class="{check:isSelectAll}" @click="selectAll" v-model="tate">
            <span style="font-size:12px;" id="bt">全选</span>
            </label>
            <div>
                <p><span>合计：</span><em id="total">{{totalPrice | Currency}}</em></p>
                <p class="colorTxt"><span>优惠：</span><strong>￥0</strong></p>
            </div>
            <span><a href="#/dingdan" class="delBtnTwe" @click="go()">去结算</a></span>    
        </div>

        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
       
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import loading from 'src/components/common/loading'
    import $ from 'jquery'

    export default {
      data(){
            return{
                orderList: null, //订单列表
                offset: 0, 
                preventRepeat: false,  //防止重复获取
                showLoading: true, //显示加载动画
                list:[],
                count:null,
                cookie:null,
                listnum:null,
                isSelectAll:false,
                tate:''
            }
        },
        components: {
            loading
        },
        methods: {
            inc (good,val,index) {
                console.log(good)
                console.log(val)
                good.b_count ++;
                console.log(good.b_count)
            },
            dec(good,val,index){
                console.log(good)
                console.log(val)
                console.log(index)
                if(good.b_count >1 ){
                    good.b_count --;
                console.log(good.b_count)
              } 
            },
            selectGood:function(goodObj,index){
                if(goodObj.isChecked == void 0){
                    this.$set(goodObj,"isChecked",true)
                } else {
                    goodObj.isChecked = ! goodObj.isChecked;
                }
                this.isCheckAll();
            },
            selectAll:function(){
                this.isSelectAll = true;
                console.log(this.list)
                this.list.forEach((good)=>{
                    good.isChecked = true;
                });
             },
             go:function(){
                if(this.cookie == ''){
                   alert("请先登录您的账号")
                }  
             },
             isCheckAll:function(){
                var flag = true;
                this.list.forEach(function(good){
                    if(!good.isChecked){
                        flag = false;
                    }
                });
                if(!flag){
                    this.isSelectAll = true;
                } else {
                    this.isSelectAll = false;
                }
            },
            remove(){
                var that = this;
                this.listnum = $('#listid').text()
                console.log(listid)
                this.cookie = document.cookie.split(";")[0].split('=')[1]
                    fetch("http://localhost:3000/deletecart/deletecart", {
                          mode: 'cors',
                          headers: {
                            "content-type":"application/json"
                          },
                          method: 'POST',
                          body: JSON.stringify({
                             u_id:this.cookie,
                             s_id:this.listnum,
                          })
                      })
                      .then((res) => {
                              console.log(res.status);
                              return res.json();
                      })
                      .then( (result) => {
                              console.log(result);
                       })
                $('#remove').parents('.cartlist').remove();
            }
            
        },

        mounted(){
            var that =this;
            this.cookie = document.cookie.split(";")[0].split('=')[1]
             fetch("http://localhost:3000/cart/cart", {
                    mode: 'cors',
                    headers: {
                      "content-type":"application/json"
                    },
                    method: 'POST',
                    body: JSON.stringify({
                      u_id:this.cookie
                     })
                })
                .then((res) => {
                    return res.json();
                })
                .then( (data) => {
                  console.log(data);   
                  console.log(data.length);
                  that.list = data;
                  console.log(this.list)
                  if(data.length !== 0){
                    $('#black').find('.middle').remove(); 
                  }
                })
        },
        computed:{
            totalPrice:function(){
                var total = 0;
                this.list.forEach(function(good){
                    if(good.isChecked){
                        total += good.s_price * good.b_count;
                    }
                });
                if( total !== 0){
                   $('.delBtnTwe').css({'background':'#f00'})
                }else{
                   $('.delBtnTwe').css({'background':'#d9d9d9'})
                }
                return total;
            }
        },
        filters:{
           Currency:function(val){
              return val + " 元";
             }
        }
    }
</script>
  
<style scoped>

.catShopList {
    margin-top: 8px;
    margin-bottom: 50px;
    border-top: 1px solid #e8e8e8;
}
.catShopList li {
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid #e8e8e8;
}
.catShopList li .catShopCont {
    padding: 10px 0;
    position: relative;
}

.pucTitle {
    height: 45px;
    line-height: 45px;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #e8e8e8;
}

.pucTitle i {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    left: 10px;
    display: block;
}
.pubIcon {
    background: url(https://mcart.jiuxian.com/statics/images/cart/catIcon.png) no-repeat 0 0;
    background-size: 150px 150px;
}
.pucTitle .tureIcon {
    background-position: -2px -115px;
}
.jxzy {
    width: 15px;
    height: 15px;
    position: absolute;
    left: 40px;
    top: 15px;
    display: block;
}
.pucTitle .title {
    font-size: 14px;
    color: #252525;
    margin-left: 62px;
    line-height: 45px;
}
.jxzy img {
    width: 100%;
    height: auto;
    display: block;
}
.pucTitle .title {
    font-size: 14px;
    color: #252525;
    margin-left: 62px;
    line-height: 45px;
}
    header{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom:0;
      height:2rem;
      line-height: 2rem;
      background: #ffffff;
    }
    header a i{
        font-size: 20px;
        margin:0 0.3rem;
    }
    header span{
        font-size: 20px
    }
    .title{
        width:100%;
        height:1rem;
        line-height: 1rem;
        background: #fff4e2;
        border-bottom: 1px solid #ccc;
        border-bottom: 1px solid #ccc
    }
    .title p.title_one{
        font-size: 12px;
        letter-spacing: 1px;
        color: #f00;
        margin-left:1rem;
    }
    .middle{
       width:8rem;
       height:8rem;
       position:fixed;
       top:50%;
       left:50%;
       margin-top:-8rem;
       margin-left:-4rem;
       text-align: center;
    }
.middle .p_one{
    font-size:14px;
    margin-top:0.3rem;
}
.middle .p_two{
    font-size:12px;
    margin-top:0.2rem;
    color:#909090;
}
.middle .container{
    width:2.5rem;
    height:2.5rem;
    line-height: 2.5rem;
    border-radius: 50%;
    background: #d7d8da;
    margin:0 auto;
}
.middle .container i{
    color:#ffffff;
    font-size: 36px;
}

    .loading-enter-active, .loading-leave-active {
        transition: opacity .7s
    }
    .loading-enter, .loading-leave-active {
        opacity: 0
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
.catShopList li .catShopCont .delIcon {
    background-position: -50px -70px;
    width: 22px;
    height: 25px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 99;
    text-indent: -9999px;
}
.catShopList li label .tureIcon {
    background-position: 0 -115px;
}
.catShopList li label i {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 42%;
    left: 10px;
    display: block;
}
.catShopList li .catShopInfo {
    margin-left: 20px;
    padding-right: 10px;
    height: 80px;
}
.catShopList li .catShopInfo .catImg.catImgThr {
    top: 10px;
    left: 40px;
}
.catShopList li .catShopInfo .catImg img, .catShopList li .catShopInfo .catImgTwe img {
    width: 100%;
    height: auto;
}
.catShopList li .catShopInfo .catInfo {
    margin-left: 112px;
    position: absolute;
    top: 10px;
}
.catShopList li .catShopInfo .catInfo h4 {
    width: 100%;
    height: 36px;
    line-height: 18px;
    font-size: 14px;
    overflow: hidden;
    color: #333;
    font-weight: 500;
}
.catShopList li .catShopInfo .catInfo p {
    font-size: 13px;
    color: #ff0000;
    padding: 0 0 5px;
    height: 18px;
    line-height: 18px;
}
.catShopList li .catShopInfo .catInfo p span {
    float: left;
    margin-right: 5px;
    color: #ff0000;
}
.rsCartItem {
    width: 75px;
    height: 20px;
    border: 1px solid #d0d0d0;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
}
.comAmount {
    width: 73px;
    height: 20px;
    position: relative;
}
.comAmount .minus.on, .comAmount .plus.on {
    color: #d0d0d0;
}
.comAmount .minus {
    left: 0;
    border-right: 1px solid #d0d0d0;
    line-height: 18px;
}
.comAmount a {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    overflow: hidden;
    color: #666;
    cursor: pointer;
    text-align: center;
    line-height: 20px;
    font-size: 20px;
}
.comAmount .inpVal {
    width: 75px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 0;
}
.comAmount .plus {
    right: 0;
    border-left: 1px solid #d0d0d0;
}
.clearfix:after {
    clear: both;
    display: block;
    content: "...";
    visibility: hidden;
    height: 0;
    font-size: 0;
}
.catShopList li .catShopLink {
    padding: 6px 10px;
    text-align: right;
}
.catShopList li .catShopInfo .catImg {
    width: 80px;
    height: 81px;
}
.catShopList li .catShopInfo .catInfo p {
    font-size: 13px;
    color: #ff0000;
    padding: 0 0 5px;
    height: 18px;
    line-height: 18px;
}

.rsCartItem {
    width: 75px;
    height: 22px;
    border: 1px solid #e8e8e8;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    padding: 0;
}
.comAmount {
    width: 73px;
    height: 22px;
    position: relative;
    padding: 0;
}
.comAmount .minus {
    left: 0;
    border-right: 1px solid #e8e8e8;
}
.comAmount a {
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

.comAmount input {
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
.comAmount .plus {
    right: 0;
    border-left: 1px solid #e8e8e8;
}
.catBomAllCheak {
    height: 50px;
    background-color: #fafafa;
    line-height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #d9d9d9;
    z-index: 999;
}
.catBomAllCheak label, .catBomAllCheak div {
    display: inline-block;
}
.catBomAllCheak label i {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 14px;
    left: 10px;
    display: block;
}
.catBomAllCheak label .falseIcon {
    background-position: -25px -115px;
}
.catBomAllCheak label span {
    padding-left: 40px;
    color: #666;
}
.catBomAllCheak span {
    float: right;
}
.catBomAllCheak div p {
    line-height: 27px;
    font-size: 16px;
    color: #252525;
    position: relative;
}
.catBomAllCheak div p {
    line-height: 27px;
    font-size: 16px;
    color: #252525;
    position: relative;
}
.catBomAllCheak div p span {
    display: block;
    width: 50px;
    float: left;
}
.catBomAllCheak div p em {
    color: #ff3333;
}
.catBomAllCheak div p.colorTxt {
    color: #999;
    font-size: 14px;
    position: relative;
    top: -8px;
}
.catBomAllCheak div p strong {
    font-weight: normal;
    padding: 0 5px 0 0;
}
.catBomAllCheak span {
    float: right;
}
.catBomAllCheak span a {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    width: 98px;
    font-size: 16px;
    background-color: #ddd;
    color: #999;
    text-align: center;
}
.catBomAllCheak span a.delBtnTwe {
    color: #fff;
    background-color: #d9d9d9;
    border-radius: 10%;
    font-weight:bold;
}
address, cite, dfn, em, var {
    font-style: normal;
}

</style>
