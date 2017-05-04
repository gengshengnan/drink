<template>
<div class="phone">
    <div class="header">
        <ul>
            <li class="left">
                <a href="#/msite">
                    <i class="iconfont">&#xe67a;</i>
                </a>
            </li>
            <li class="center">
                手机专享
            </li>
            <li class="right">
                <a href="#/msite">
                    <i class="iconfont">&#xe600;</i>
                </a>
            </li>
        </ul>
    </div>
    <div class="nav">
        <ul>
            <li v-on:click='changeone()' class="left">
            <span>综合分类</span>
            </li>
            <li v-on:click='changetwo()' class="center">
                <span>白酒专区</span>
            </li>
            <li v-on:click='changethree()' class="right">
                <span>红洋专区</span>
            </li>
        </ul>
    </div>
    <div class="content-phone" v-if="level=='1'">
        <dl v-for='item in list'>
            <dt>
                <a href="#">
                    <img :src="item.s_img">
                </a>
            </dt>
            <dd>
                <p class="top">
                    {{item.s_description}}
                </p>
                <p class="center">
                    <span>专享价：</span>
                    <span class="money">￥{{item.s_price}}</span>
                </p>
                <p class="bottom">
                    比电脑购买省88.00元
                </p>
                <button id="btn">
                    去抢购
                </button>
            </dd>
        </dl>
    </div>
     <div class="content-phone" v-else-if="level=='2'">
     <dl v-for='item in shopList'>
            <dt>
                <a href="#">
                    <img :src="item.s_img">
                </a>
            </dt>
            <dd>
                <p class="top">
                    {{item.s_description}}
                </p>
                <p class="center">
                    <span>专享价：</span>
                    <span class="money">￥{{item.s_price}}</span>
                </p>
                <p class="bottom">
                    比电脑购买省88.00元
                </p>
                <button id="btn">
                    去抢购
                </button>
            </dd>
        </dl>
    </div>
     <div class="content-phone" v-else-if="level=='3'">
       <dl v-for='item in colorList'>
            <dt>
                <a href="#">
                    <img :src="item.s_img">
                </a>
            </dt>
            <dd>
                <p class="top">
                    {{item.s_description}}
                </p>
                <p class="center">
                    <span>专享价：</span>
                    <span class="money">￥{{item.s_price}}</span>
                </p>
                <p class="bottom">
                    比电脑购买省88.00元
                </p>
                <button id="btn">
                    去抢购
                </button>
            </dd>
        </dl>
    </div>
</div>
</template>
<script type="text/javascript">
        import 'whatwg-fetch'
        export default {
            name:'phone',
                data () {
                    return{
                        level:'1',
                        list:[],
                        shopList:[],
                        colorList:[]
                    }
            },
            methods:{
                changeone:function(){
                    this.level = '1';
                    console.log('1')
                },
                changetwo:function(){
                    this.level = '2'
                    console.log('2')
                },
                changethree:function(){
                    this.level = '3'
                }
            },
            mounted(){
                var that = this;
                fetch("http://10.5.154.49:3000/home",{
                    mode: 'cors',
                    headers:{
                        "content-type":"application/json"
                    },
                    method:'GET'
                })
                .then((res)=>{
                  console.log(res);
                  // console.log(res.data);
                    return res.json();
                })
                .then((data)=>{
                    console.log(data)
                    that.list = data;
                })

                fetch("http://10.5.154.49:3000/spirit/spirit",{
                    mode: 'cors',
                    headers:{
                        "content-type":"application/json"
                    },
                    method:'GET'
                })
                .then((res)=>{
                  console.log(res);
                  // console.log(res.data);
                    return res.json();
                })
                .then((data)=>{
                    console.log(data)
                    that.shopList = data;
                })

                fetch("http://10.5.154.49:3000/putao/putao",{
                    mode: 'cors',
                    headers:{
                        "content-type":"application/json"
                    },
                    method:'GET'
                })
                .then((res)=>{
                  console.log(res);
                  // console.log(res.data);
                    return res.json();
                })
                .then((data)=>{
                    console.log(data)
                    that.colorList = data;
                })
            }
    }
</script>

<style type="text/css">
    .phone{
        font-size: 0.5rem;
    }
    .header{
        height: 2rem;
        line-height: 2rem;
        background: white;
        font-size: 0.5rem;
        border-bottom: 1px solid #ccc;
    }
    .header ul{
        display: flex;
    }
    .header ul li{
        flex: 1;
    }
    .header ul li.left{
        text-align: left;
        padding-left: 1rem;
    }
    .header ul li.center{
        text-align: center;
        padding-right: 0.5rem;
    }
    .header ul li.right{
        text-align: right;
        padding-right: 1rem;
    }
    .nav{
        height: 2rem;
        line-height: 2rem;
        font-size: 0.5rem;
    }
    .nav ul{
        display: flex;
        border-bottom: 1px solid #ccc;
    }
    .nav ul li{
        flex: 1;
        text-align: center;
    }
    .nav ul li:hover span{
       border-bottom:2px solid #f00;
       /*display: block;*/
    }
    .content-phone{
        display: flex;
        flex-direction: column;
    }
    .content-phone dl{
        height: 5.5rem;
        padding-left: 0.5rem;
        padding-right: 0.4rem;
        border-bottom: 1px solid #ccc;
        background: white;
    }
    .content-phone dt{
        width: 2rem;
        height: 4rem;
        float: left;
    }
    .content-phone dt a{
        width: 5rem;
        height: 4rem;
        margin-top: 0.45rem;
    }
    .content-phone dt img{
        width: 5rem;
        height: 4rem;
        margin-top: 0.45rem;
    }
    .content-phone dl dd{
        float: right;
    }
    .content-phone dl dd p.top{
       margin-top: 0.45rem;
       width: 10rem;
    }
    .content-phone dl dd p.center{
        margin-top: 0.65rem;
    }
    .content-phone dl dd p.center span{
        color: #ccc;
    }
    .content-phone dl dd p.center span.money{
        color: red;
    }
    .content-phone dl dd p.bottom{
        width: 6rem;
        border: 1px solid red;
        color: red;
    }
    .content-phone dl dd button{
        width: 2rem;
        height: 0.9rem;
        background: red;
        margin-left: 7.6rem;
    }
</style>