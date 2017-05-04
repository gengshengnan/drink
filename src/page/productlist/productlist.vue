<template>
<div class="productlist" style="overflow:hidden;">
    <div class="head clearfix" style="position:fixed;">
        <a class="back" name="search_fanhui" href="#/msite"></a>
        <h2>商品列表</h2>
        <a class="filterBtn" name="__search_shaixuan" href="javascript:;">筛选</a>
    </div>

    <div class="tabBar clearfix" style="display:flex; margin-top:40px;">
        <a id="saleHref" class="tab tab1  on" name="search_xiaoliang" href="javascript:;" @click="changeone" style="border-right:1px solid #ccc;">
            <span>销量</span>
        </a> 
        <a id="priceHref" class="tab tab2" name="search_jiage" href="javascript:;" @click="changetwo" style="border-right:1px solid #ccc;">
            <span>价格</span>
            <span id="priceSort" class="sort prodPrice"></span>
        </a> 
        <a id="markHref" class="tab tab3" name="search_renqi" href="javascript:;" @click="changethree">
            <span>人气</span>
        </a>

    </div>
    <div class="bai" style="background:#fff;">
       <div v-if="level=='1'">
           <ul class="clearfix list" id="thelist" v-for="items in list">
               <li class="clearfix">
                    <a class="prodLink" href="#"></a> 
                    <img class="prodImg" :src="items.s_img">
                    <div class="prodInfo">
                        <div class="prodName">
                            <p class="name"><a href="#">{{items.s_name}}</a></p>
                            <!-- <p class="slogan">促销语促销语促销语促销语促销语</p> -->
                            <p class="sName"><i class="listIcon"></i><span>醉华夏官方旗舰店</span></p>
                        </div>
                        <div class="price">
                            <strong class="nowPrice_37599" goodid="37599">￥{{items.s_price}}</strong>
                        </div>
                        <div class="pro">
                             <span class="t">{{items.s_evaluate}}分</span>
                            <span class="t">总销量{{items.s_counts}}</span>
                        </div>
                    </div>
                </li>
           </ul>
        </div>
        <div v-if="level=='2'">
           <ul class="clearfix list" id="thelist" v-for="items in shoplist">
               <li class="clearfix">
                    <a class="prodLink" href="#"></a> 
                    <img class="prodImg" :src="items.s_img">
                    <div class="prodInfo">
                        <div class="prodName">
                            <p class="name"><a href="#">{{items.s_name}}</a></p>
                            <!-- <p class="slogan">促销语促销语促销语促销语促销语</p> -->
                            <p class="sName"><i class="listIcon"></i><span>醉华夏官方旗舰店</span></p>
                        </div>
                        <div class="price">
                            <strong class="nowPrice_37599" goodid="37599">￥{{items.s_price}}</strong>
                        </div>
                        <div class="pro">
                             <span class="t">{{items.s_evaluate}}分</span>
                            <span class="t">总销量{{items.s_counts}}</span>
                        </div>
                    </div>
                </li>
           </ul>
        </div>
        <div v-if="level=='3'" >
            <ul class="clearfix list" id="thelist" v-for="items in evaluatelist">
               <li class="clearfix">
                    <a class="prodLink" href="#"></a> 
                    <img class="prodImg" :src="items.s_img">
                    <div class="prodInfo">
                        <div class="prodName">
                            <p class="name"><a href="#">{{items.s_name}}</a></p>
                            <!-- <p class="slogan">促销语促销语促销语促销语促销语</p> -->
                            <p class="sName"><i class="listIcon"></i><span>醉华夏官方旗舰店</span></p>
                        </div>
                        <div class="price">
                            <strong class="nowPrice_37599" goodid="37599">￥{{items.s_price}}</strong>
                        </div>
                        <div class="pro">
                            <span class="t">{{items.s_evaluate}}分</span>
                            <span class="t">总销量{{items.s_counts}}</span>
                        </div>
                    </div>
                </li>
           </ul>
        </div> 
    </div>
    
  


</div>
</template>
<script type="text/javascript">
        export default {
            name:'productlist',
            data () {
                return{
                    level:'1',
                    search:'',
                    list:[],
                    shoplist:[],
                    evaluatelist:[]
                }
            },
        methods:{
            changeone:function(){
                this.level = '1'
            },
            changetwo:function(){
                this.level = '2'
            },
            changethree:function(){
                this.level = '3'
            }
        },
        mounted(){
             this.search = document.cookie.split(';')[1].split('=')[1]
               fetch("http://10.5.154.49:3000/pricecount/pricecount", {
                      mode: 'cors',
                      headers: {
                        "content-type":"application/json"
                      },
                      method: 'POST',
                      body: JSON.stringify({
                          searchVal:this.search
                      })
                  })
                  .then((res) => {
                          console.log(res.status);
                          // console.log(res.data);
                          return res.json();
                  })
                  .then( (result) => {
                          console.log(result);
                          this.shoplist=result;
              }),         
               fetch("http://10.5.154.49:3000/salecount/salecount", {
                      mode: 'cors',
                      headers: {
                        "content-type":"application/json"
                      },
                      method: 'POST',
                      body: JSON.stringify({
                          searchVal:this.search
                      })
                  })
                  .then((res) => {
                          console.log(res.status);
                          // console.log(res.data);
                          return res.json();
                  })
                  .then( (result) => {
                          console.log(result);
                          this.list=result;
              }),
                fetch("http://10.5.154.49:3000/ordercount/ordercount", {
                      mode: 'cors',
                      headers: {
                        "content-type":"application/json"
                      },
                      method: 'POST',
                      body: JSON.stringify({
                          searchVal:this.search
                      })
                  })
                  .then((res) => {
                          console.log(res.status);
                          // console.log(res.data);
                          return res.json();
                  })
                  .then( (result) => {
                          console.log(result);
                          this.evaluatelist=result;
              })   

        }
    }
</script>

<style type="text/css">
body {
    font-family: "华文细黑","Microsoft YaHei","黑体",sans-serif;
    font-size: 14px;
    line-height: 1.5;
    outline: none;
    color: #666;
}
.head {
    width: 100%;
    height: 40px;
    background-color: #de4943;
    color: #fff;
    z-index: 100;
}
.head .back {
    background: url(https://mlist.jiuxian.com/mjava_statics/images/headBack.jpg) no-repeat 0 0;
    width: 30px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 10px;
    display: block;
}
.head h2 {
    font-size: 16px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-weight: 500;
    color: #fff;
}
.head .filterBtn {
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    color: #fff;
}
.clearfix:after {
    clear: both;
    display: block;
    content: "...";
    visibility: hidden;
    height: 0;
    font-size: 0;
}
.prodList .tabBar {
    width: 100%;
    height: 32px;
    line-height: 32px;
    background-color: #F3F5F6;
    position: relative;
}
.tabBar .tab {
    width: 100%;
    height: 32px;
    line-height: 32px;
    float: left;
    display: inline-block;
    text-align: center;
    color: #000;
    overflow: hidden;
}
.tabBar .tab.on {
    color: #de4943;
}
.sort.prodPrice, .sort.popular {
    display: none;
}
.listTab, .picTab {
    width: 15px;
    height: 15px;
    margin: 9px auto;
}
.picTab.on {
    background-position: -45px 0;
    display: block;
}
.tab .sort.on, .listTab, .picTab, .close span, .resultList li a, .option li i, .select .title p i {
    background: url(https://mlist.jiuxian.com/mjava_statics/images/listIcon.png) no-repeat;
}
.tabBar .line {
    width: 1px;
    height: 32px;
    background-color: #e4e4e4;
    position: absolute;
    /*top: 0;*/
    display: block;
}
.tabBar .line.line1 {
    left: 25%;
}
.tabBar .line.line2 {
    left: 50%;
}
.tabBar .line.line3 {
    left: 75%;
}
.list li {
    /*height: 100px;*/
    padding: 10px 10px 10px 15px;
    border-bottom: 1px solid #e8e8e8;
    position: relative;
}
.prodLink {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: #fff;
    opacity: 0;
}
.list .prodImg {
    float: left;
}
.prodImg {
    width: 100px;
    height: 100px;
    display: block;
}
.list .prodInfo {
    display: block;
    margin: 0 0 0 110px;
}
.prodInfo .prodName {
    height: 54px;
}
.prodInfo .name {
    max-height: 36px;
    line-height: 18px;
    overflow: hidden;
}
.prodInfo .name a {
    color: #000000;
}
.prodInfo .sName {
    height: 18px;
}
.prodInfo .sName i {
    vertical-align: middle;
    display: inline-block;
    width: 13px;
    height: 13px;
    background-position: -69px 1px;
    margin-right: 4px;
}
.listIcon {
    background: url(https://mlist.jiuxian.com/mjava_statics/images/listIcon.png) no-repeat;
    background-size: 100px 40px;
}
.prodInfo .pro span, .prodInfo .sName span {
    color: #aaa;
    font-size: 12px;
    vertical-align: middle;
    margin-right: 8px;
}
.prodInfo .price {
    color: #df4a44;
    height: 20px;
    line-height: 20px;
    margin-top: 8px;
}
.prodInfo .price strong {
    font-size: 18px;
    font-weight: bold;
}
.prodInfo .pro {
    height: 18px;
    line-height: 18px;
}
.prodInfo .pro span, .prodInfo .sName span {
    color: #aaa;
    font-size: 12px;
    vertical-align: middle;
    margin-right: 8px;
}

</style>