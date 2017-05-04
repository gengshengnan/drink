<template>
  <div class="grab" >
    <div id="header">
      <a href="#/msite"><span>〈</span></a>
      <span class="ft">掌上秒拍</span>
      <span class="rtft">☰</span>
    </div>
    <div id="section">
      <div id="group">
        <ul class="group-ul">
          <li @click="Changeone()" >10点场</li>
          <li @click="Changetwo()">15点场</li>
          <li @click="Changethree()">19点场</li>
          <li @click="Changefour()">7点场</li>
        </ul>
      </div>
      <div class="grabing">
        <h4>抢购中</h4>
        <div class="time">
          <span>距结束</span>
          <span>
            <i id="h"></i>
            <span>:</span>
            <i id="m"></i>
            <span>:</span>
            <i id="s"></i>
          </span>
        </div>
      </div>
      <div id="list" v-if="level=='1'">
        <ul class="ulList">
          <li v-for="item in shopList">
            <a href="#">
              <div class="img">
                <img :src="item.s_img">
              </div>
              <div class="info">
                <h4>{{item.s_name}}</h4>
                <p>秒拍价:<strong>{{item.s_price}}</strong></p>
                <div>
                  <span>已售{{item.s_alcoholic}}% </span>
                  <div class="zhe">
                    <div class="zhekuang" :style="{width:item.s_alcoholic+'%'}"></div>
                  </div>
                </div>
                <div class="button">
                  <a href="#">去抢购</a>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div id="list" v-else-if="level=='2'">
        <ul class="ulList" >
          <li v-for="item in secondList">
            <a href="#">
              <div class="img">
                <img :src="item.s_img">
              </div>
              <div class="info">
                <h4>{{item.s_name}}</h4>
                <p>秒拍价:<strong>{{item.s_price}}</strong></p>
                <div>
                  <span>已售{{item.s_alcoholic}}% </span>
                  <div class="zhe">
                    <div class="zhekuang" :style="{width:item.s_alcoholic+'%'}"></div>
                  </div>
                </div>
                <div class="button">
                  <a href="#">去抢购</a>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div id="list" v-else-if="level=='3'">
        <ul class="ulList" >
          <li v-for="item in threeList">
            <a href="#">
              <div class="img">
                <img :src="item.s_img">
              </div>
              <div class="info">
                <h4>{{item.s_name}}</h4>
                <p>秒拍价:<strong>{{item.s_price}}</strong></p>
                <div>
                  <span>已售{{item.s_alcoholic}}% </span>
                  <div class="zhe">
                    <div class="zhekuang" :style="{width:item.s_alcoholic+'%'}"></div>
                  </div>
                </div>
                <div class="button">
                  <a href="#">去抢购</a>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div id="list" v-else="level=='4'">
        <ul class="ulList" >
          <li v-for="item in fourList">
            <a href="#">
              <div class="img">
                <img :src="item.s_img">
              </div>
              <div class="info">
                <h4>{{item.s_name}}</h4>
                <p>秒拍价:<strong>{{item.s_price}}</strong></p>
                <div>
                  <span>已售{{item.s_alcoholic}}% </span>
                  <div class="zhe">
                    <div class="zhekuang" :style="{width:item.s_alcoholic+'%'}"></div>
                  </div>
                </div>
                <div class="button">
                  <a href="#">去抢购</a>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>                
    </div>
  </div>
</template>

<script>
import 'whatwg-fetch'
export default {
  name: 'grab',
  data () {
    return {
      shopList:[],
      threeList:[],
      secondList:[],
      fourList:[],
      level:"1"
    }
  },
  methods:{
    Changeone:function()
    {
      this.level="1"
      console.log(this.$refs.myDiv)
      console.log("1")
    },
    Changetwo:function()
    {
      this.level="2"
      console.log("2")
    },
    Changethree:function()
    {
      this.level="3"
      console.log("3")
    },
    Changefour:function()
    {
      this.level="4"
      console.log("4")
    }
  }, 
  mounted () {
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
                    that.shopList = data;
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
                    that.threeList = data;
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
                    that.secondList = data;
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
                    that.fourList = data;
                })

    // console.log('这是created')
    // fetch('/static/grab.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(typeof data)
    //     this.shopList = data
    //   })
    function newTime(){
      // 当前时间
      var startTime = new Date();
      // console.log(startTime);
      //定义结束时间
      var endTime=new Date("2017/04/19,13:36:20");
      // console.log(endTime);
      var leftTime = parseInt((endTime.getTime()-startTime.getTime())/1000);
      // console.log(leftTime);
      var d = parseInt(leftTime/(24*60*60));
      // console.log(d);
      var h = parseInt((leftTime/3600)%24);
      console.log(h)
      var m = parseInt((leftTime/60)%60);
      var s = parseInt(leftTime%60);
      document.getElementById("h").innerHTML= h;
      document.getElementById("m").innerHTML= m;
      document.getElementById("s").innerHTML= s;
      if(leftTime<=0){
        document.getElementById("h").innerHTML= "早";
        document.getElementById("m").innerHTML= "没";
        document.getElementById("s").innerHTML= "了";
        clearInterval(sh);
      }      
    }
    newTime();
    var sh = newTime();
    sh = setInterval(newTime,1000);    
      
  }
  
}

</script>

<style scoped>
#grab{
  display:flex;
  flex-direction: column;
}
.ft{
  font-size:.8rem;
  line-height: 1.6rem;
}
.rtft{
  margin-right:.4rem;
}
#header{
  height:1.6rem;
  background:#de4943;
  color:#fff;
  display:flex;
  justify-content:space-between;
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  z-index: 99;
}
#header span{
  color:#fff;
}
#section{
  margin-top:1.6rem;
  overflow-x: auto;
  flex:1;
}
#group{
  height:1.6rem;
  background:#ccc;
}
.group-ul{
  height:1.6rem;
  display:flex;
  justify-content: space-between;
  font-size:.7rem;
}
.group-ul li{
  padding:.4rem .6rem;

}
.grabing{
  height:1.6rem;
  overflow:hidden;
  background:#fff;
  border-bottom:1px solid #ccc;
  font-size:.7rem;
}
.grabing h4{
  background:#fc4646;
  height:1.6rem;
  line-height:1.6rem;
  width:4rem;
  padding-left:1rem;
  color:#fff;
  float:left;
}
.grabing .time{
  width:7rem;
  float:right;
  padding-top:.4rem;
}
.grabing .time i{
  background:#4d4d4d;
  color:#fff;
}
.ulList{
  width:100%;
  background:#fff;
}
.ulList li{
  border-bottom: 1px solid #e8e8e8;
  padding: .5rem 0;
  overflow: hidden;
}
.img{
  width:30%;
  float:left;
}
.img img{
  width:100%;
}
.info{
  position:relative;
  float:left;
  width:68%;
  font-size:.7rem;
}
.info h4{
  width:100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info strong{
  font-size:.8rem;
  font-weight:blod;
  color:#ff5252;
}
.info span{
  display:inline-block;
}
.zhe{
  display:inline-block;
  width:3rem;
  height:.4rem;
  border:1px solid #ffcccc;
  border-radius:.2rem;
}
.zhekuang{
  height:100%;
  background:#ffcccc;
  border-radius:.1rem 0 0 .1rem;
}
.button{
  position:absolute;
  top:2.1rem;
  right:0;
  width:2.5rem;
  height:1rem;
  border-radius:.2rem;
  background:#fc4646;
}
.button a{
  display:block;
  text-align:center;
  color:#fff;
}
</style>
