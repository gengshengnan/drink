 <template>
 <div class="dingdan">

     <header>
        <div class="topHeader">
            <a href="#" class="linkleft" ><i class="hIcon back"></i></a>
            <span class="brand">填写订单</span>
        </div>
    </header>
    <div class="mainBody">
        <div class="oWrap orderAdd">
            <a href="#" >
                <div class="addNew">新建收货地址以确保商品正常派送哦~</div>
                <i class="oIcon addArrow"></i>
            </a>
        </div>
    </div>

    <div class="oWrap orderCom">
            <ul style="height: 86px;">
                <li class="comItem clearfix">
                    <div class="comPic"><img src="https://img10.jiuxian.com/2016/0912/2c4543afe41745099813d51c22a00e4a4.jpg"></div>
                    <div class="comName">【老酒特卖】53°茅台奥运会庆功酒500ml（2012年）</div>
                    <div class="comPri"><p class="pri">¥3080.00</p><p class="num">x9</p></div>
                </li>
            </ul>
    </div>

    <div class="oWrap pd">
        <div class="oItem orderPay">
            <a href="javascript:void(0);">
                <div class="itemName">支付方式</div>
                <div class="itemInfo oneLine">
                        <label class="iiItems selected" id="onLine">
                            <i class="oIcon"></i><span>在线支付</span>
                        </label>
                        
                             <label class="iiItems" id="notOnLine">
                            <i></i><span>货到付款</span>
                        </label>  
                </div>
            </a>
        </div>
        <div class="oItem orderDis noBor">
            <a href="/m_v1/order_inner/nav_list">
            <div class="itemName">发票信息</div>
            <div class="itemInfo oneLine">
                    <p style="font-size:12px;">不需要发票</p>
            </div>
            <i class="oIcon oArrow"></i>
            </a>
        </div>
    </div>

    <div class="oWrap ccb">
        <div class="oItem orderCoupon">
            <a href="#" onclick="favourableBonus()">
                <div class="itemName">优惠券</div>
                <div class="itemInfo">
                    <p>
                    
                    <span>不使用优惠券</span> 
                    </p>
                </div>
                <i class="oIcon oArrow"></i>
            </a>
        </div>
    </div>
<div class="oWrap" style="height:89px;">
    <form name="myform" action=""> 
    <div class="orderMes"><textarea id="message" name="message" onkeydown="textCounter(message,45);" onkeyup="textCounter(message,45);" placeholder="给商家留言，限45个字"></textarea></div>
    <div class="orderGift">
        <label><i></i><em>这是一个礼品订单</em></label>
        <span style="font-size:12px;"><em id="remLen">45</em>字</span>
    </div>
    </form>
</div>

<div class="orderPro" id="giftPro"><i class="oIcon"></i>温馨提示：礼品订单不显示价格，如果礼物直接送给TA，记得 不要选择货到付款喔~</div>

<div class="oWrap settlement" style="margin-bottom:100px;">
    <div class="oItem amo">
        <div class="itemName">商品金额</div>
        <div class="itemInfo red"><p style="font-size:12px; color:red;">￥<span style="font-size:12px; color:red;">27720.00</span></p></div>
    </div>
    <div class="oItemBox">
        <div class="oItem">
            <div class="itemName">运费</div>
            <div class="itemInfo red">
                <p><em style="font-size:12px; color:red;">+</em><span style="font-size:12px; color:red;">￥0.00</span></p>
            </div>
        </div>
    </div>
</div>

<div class="orderSubmits">
    <div class="orderAmount" style="font-size:12px;">实付金额：<span>¥27720.00</span></div><a class="Submits" href="#" onclick="check_order()">提交订单</a>
</div>

    <!-- haha -->
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
                gw:0
            }
        },
        methods: {
            
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

            fetch("http://10.5.154.49:3000/detail/detail",{  
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
          
          fetch("http://localhost:3000/regist/regist", {
              mode: 'cors',
              headers: {
                "content-type":"application/json"
              },
              method: 'POST',
              body: JSON.stringify({
                  u_tel:this.gw,
                  u_pwd:this.$route.params.id
              })
          })
          .then((res) => {
                  console.log(res.status);
                  // console.log(res.data);
                  return res.json();
          })
          .then( (result) => {
                  console.log(result);
                  if (result.status === 'OK') {
                    alert('注册成功')
                  } else {
                    alert('注册失败')
                  }
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

body {
    font-family: "Microsoft YaHei","华文细黑","黑体";
    font-size: 12px;
    color: #333;
}
article, aside, footer, header, hgroup, main, nav, section {
    display: block;
}
.topHeader {
    background: #fafafa;
    height: 30px;
    border-bottom: 1px solid #e8e8e8;
    position: relative;
}
.topHeader .linkleft, .topHeader .linkright {
    width: 30px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 10;
    display: block;
}
.topHeader .linkleft {
    left: 0;
}
.topHeader .brand {
    font-size: 16px;
    color: #252525;
    text-align: center;
    display: block;
    line-height: 30px;
}
.hIcon {
    background: url(https://mtrade.jiuxian.com/statics/images/neworder/headerIcon.png) no-repeat 0 0;
    background-size: 100px 50px;
}
.topHeader .back {
    background-position: 9px 6px;
    width: 30px;
    height: 30px;
    display: inline-block;
}
.oWrap {
    margin-top: 10px;
    padding: 0 12px;
    background: #fff;
}
.orderAdd {
    background: url(https://mtrade.jiuxian.com/statics/images/neworder/orderImg/addBor.png) repeat-x left top #fffef4;
    background-size: 48px 3px;
    border-bottom: 1px solid #ebe7c2;
    padding: 0;
}

.orderAdd a {
    display: block;
    width: 100%;
    padding: 13px 48px 12px 20px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    position: relative;
}
.orderAdd .addNew {
    height: 44px;
    line-height: 44px;
    color: #666;
    text-align: center;
    font-size: 12px;
}
.oIcon {
    background: url(https://mtrade.jiuxian.com/statics/images/neworder/orderImg/orderIcon.png) no-repeat 0 0;
    background-size: 200px 200px;
}
.orderAdd .addArrow {
    display: block;
    width: 7px;
    height: 12px;
    background-position: -20px -24px;
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -4px;
}
.oWrap {
    margin-top: 10px;
    padding: 0 12px;
    background: #fff;
}
.orderCom ul {
    overflow: hidden;
}
.orderCom .comItem {
    padding: 10px 0;
    border-bottom: 1px solid #e8e8e8;
}
.orderCom .comItem .comPic {
    float: left;
    width: 18%;
    font-size: 0;
    line-height: 0;
    border: 1px solid #e8e8e8;
    margin-right: 3%;
    padding-bottom: 18%;
    background-color: #fff;
    position: relative;
    z-index: 1;
}
.orderCom .comItem .comName {
    float: left;
    width: 56%;
    font-size: 14px;
    color: #252525;
    line-height: 16px;
    padding-top: 2px;
}
.orderCom .comItem .comPri {
    float: right;
    width: 22%;
    padding-top: 2px;
    text-align: right;
}
.orderCom .comItem .comPic img {
    width: 100%;
    height: auto;
    left: 0;
    position: absolute;
    top: 0;
    z-index: 20;
}
.orderCom .comItem .comName {
    float: left;
    width: 56%;
    font-size: 14px;
    color: #252525;
    line-height: 16px;
    padding-top: 2px;
}
.orderCom .comItem .comPri .pri {
    color: #ff3333;
    font-size: 12px;
}
.orderCom .comItem .comPri .num {
    color: #999;
    padding-top: 5px;
    font-size: 14px;
}
.clearfix:after {
    clear: both;
    display: block;
    content: "...";
    visibility: hidden;
    height: 0;
    font-size: 0;
}
.oWrap {
    margin-top: 10px;
    padding: 0 12px;
    background: #fff;
}
.oItem {
    position: relative;
    border-bottom: 1px solid #e8e8e8;
}

.oWrap .noBor {
    border-bottom: none;
}
.oItem a {
    display: block;
    padding: 8px 0;
}
.pd .itemName {
    line-height: 36px;
}
.pd .itemInfo.oneLine {
    line-height: 36px;
}
.pd .itemInfo {
    margin-right: 20px;
    line-height: 18px;
    min-height: 36px;
}
.oItem .itemInfo {
    line-height: 28px;
    text-align: right;
}
.pd .itemInfo .iiItems {
    margin-left: 30px;
}
.pd .itemInfo .iiItems {
    margin-left: 30px;
}
.iiItems.selected i, .orderGift label.selected i, .selected .addrRadio i {
    background-position: -15px -1px;
    background-color: #fc5a5a;
    border: 1px solid #fc5a5a;
}
.iiItems i {
    margin-right: 6px;
    vertical-align: middle;
}
.iiItems i, .orderGift label i, .addrRadio i {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 50%;
}
.oIcon {
    background: url(https://mtrade.jiuxian.com/statics/images/neworder/orderImg/orderIcon.png) no-repeat 0 0;
    background-size: 200px 200px;
}
.iiItems span {
    color: #252525;
    font-size: 14px;
    vertical-align: middle;
}
.iiItems i, .orderGift label i, .addrRadio i {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 50%;
}
.iiItems i {
    margin-right: 6px;
    vertical-align: middle;
}
.iiItems span {
    color: #252525;
    font-size: 14px;
    vertical-align: middle;
}
.oWrap .noBor {
    border-bottom: none;
}
.oItem a {
    display: block;
    padding: 8px 0;
}
.oItem .itemName {
    font-size: 14px;
    color: #666;
    position: absolute;
    left: 0;
    top: 8px;
    line-height: 28px;
}
.pd .itemName {
    line-height: 36px;
}
.pd .itemInfo {
    margin-right: 20px;
    line-height: 18px;
    min-height: 36px;
}
.oItem .itemInfo {
    line-height: 28px;
    text-align: right;
}
.pd .itemInfo.oneLine {
    line-height: 36px;
}
.oIcon {
    background: url(https://mtrade.jiuxian.com/statics/images/neworder/orderImg/orderIcon.png) no-repeat 0 0;
    background-size: 200px 200px;
}
.oItem .oArrow {
    display: block;
    width: 7px;
    height: 12px;
    background-position: -20px -24px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -5px;
}
.oWrap {
    margin-top: 10px;
    padding: 0 12px;
    background: #fff;
}
.oItem {
    position: relative;
    border-bottom: 1px solid #e8e8e8;
}
.oItem a {
    display: block;
    padding: 8px 0;
}
.oItem .itemName {
    font-size: 14px;
    color: #666;
    position: absolute;
    left: 0;
    top: 8px;
    line-height: 28px;
}
.oItem .itemInfo {
    line-height: 28px;
    text-align: right;
}
.ccb .itemInfo {
    line-height: 28px;
    margin-right: 20px;
    font-size: 0;
    vertical-align: middle;
}
.oIcon {
    background: url(https://mtrade.jiuxian.com/statics/images/neworder/orderImg/orderIcon.png) no-repeat 0 0;
    background-size: 200px 200px;
}
.oItem .oArrow {
    display: block;
    width: 7px;
    height: 12px;
    background-position: -20px -24px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -5px;
}
.ccb .itemInfo span {
    font-size: 14px;
    color: #333;
    vertical-align: middle;
}
.oWrap {
    margin-top: 10px;
    padding: 0 12px;
    background: #fff;
}
.orderGift {
    width: 100%;
    position: relative;
    height: 16px;
    line-height: 16px;
    padding: 8px 0 10px;
}
.orderMes textarea {
    width: 97%;
    height: 36px;
    resize: none;
    line-height: 1.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1% 1.5%;
    margin-top: 10px;
    font-size: 12px;
}
input, textarea {
    font-family: "华文细黑","Microsoft YaHei","黑体";
}
button, input, select, textarea {
    font-size: 100%;
    outline: none;
    -webkit-tap-highlight-color: transparent;
}
.orderGift label {
    display: block;
    font-size: 0;
    vertical-align: middle;
}
.orderGift label i {
    margin-right: 8px;
    vertical-align: middle;
}
.iiItems i, .orderGift label i, .addrRadio i {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 50%;
}
.orderGift label em {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    color: #666;
}
address, cite, dfn, em, var {
    font-style: normal;
}
.orderGift span {
    display: block;
    color: #ccc;
    position: absolute;
    top: 2px;
    right: 0px;
}
.orderPro {
    color: #ff3333;
    line-height: 16px;
    padding: 0.7% 12px;
    background: #fff4e2;
    border-top: 1px solid #ffe4b8;
    border-bottom: 1px solid #ffe4b8;
    position: relative;
    z-index: 2;
    font-size: 12px;
}
.orderPro i {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-position: -43px -24px;
    margin-right: 6px;
    position: relative;
    top: 1px;
}
.settlement {
    margin-bottom: 83px;
}
.oWrap {
    margin-top: 10px;
    padding: 0 12px;
    background: #fff;
}
.settlement .oItem.amo {
    padding: 8px 0;
}
.settlement .oItemBox {
    padding: 6px 0;
}
.oItem .itemName {
    font-size: 14px;
    color: #666;
    position: absolute;
    left: 0;
    top: 8px;
    line-height: 28px;
}
.settlement .oItem.amo .itemInfo {
    font-size: 14px;
}
.settlement .oItem .red {
    color: #ff3333;
}
.settlement .oItemBox .oItem {
    border-bottom: none;
}
.settlement .oItemBox .oItem .itemName {
    top: 0px;
}
.settlement .oItem .red {
    color: #ff3333;
}
.settlement .oItem .itemInfo em {
    margin-right: 6px;
}
.orderSubmits {
    width: 100%;
    max-width: 640px;
    height: 50px;
    position: fixed;
    bottom: 0;
    z-index: 10;
}
.orderSubmits .orderAmount {
    height: 49px;
    line-height: 48px;
    border-top: 1px solid #ccc;
    background: #f1f1f1;
    color: #666;
    padding-left: 12px;
}
.orderSubmits .Submits {
    display: block;
    height: 50px;
    line-height: 50px;
    width: 100px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background: #fc5a5a;
    position: absolute;
    right: 0;
    top: 0;
}
.orderSubmits .orderAmount span {
    font-size: 18px;
    color: #ff3333;
    font-family: Arial;
    position: relative;
    top: 2px;
}

</style>
