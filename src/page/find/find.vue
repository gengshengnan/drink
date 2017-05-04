 <template>
  <div class="discover">
    <div id="header">
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索商家">
      </mt-search>
    </div>
    <div id="section">
      <div class="menu-left">
          <ul>
            <li class="active">白酒</li>
            <li>红酒</li>
            <li>葡萄酒</li>
            <li>泰国酒</li>
            <li>美国酒</li>
            <li>英国酒</li>
            <li>澳大利亚酒</li>
            <li>韩国酒</li>
          </ul>
      </div>
      <div class="menu-right">
          <div class="j-content" style="display:block;">
              <h5>白酒</h5>
              <ul>
                <li class="w-3" v-for="item in whiteList">
                  <a href="#">
                    <img :src="item.s_img">
                    <span class="font">{{item.s_brand}}</span>
                  </a>
                </li>              
              </ul>
          </div>
          <div class="j-content" style="display:none;">
              <h5>红酒</h5>
              <ul>
                <li class="w-3" v-for="item in redList">
                  <a href="#">
                    <img :src="item.s_img">
                    <span class="font">{{item.s_brand}}</span>
                  </a>
                </li>
             
              </ul>
          </div>
          <div class="j-content" style="display:none;">
              <h5>葡萄酒</h5>
              <ul>
                <li class="w-3" v-for="item in putaoList">
                  <a href="#">
                    <img :src="item.s_img">
                    <span class="font">{{item.s_brand}}</span>
                  </a>
                </li>                   
              </ul>
          </div>
          <div class="j-content" style="display:none;">
              <h5>泰国酒</h5>
              <ul>
                <li class="w-3" v-for="item in taiguoList">
                  <a href="#">
                    <img :src="item.s_img">
                    <span class="font">{{item.s_brand}}</span>
                  </a>
                </li>                                                 
              </ul>
          </div>
          <div class="j-content" style="display:none;">
              <h5>美国酒</h5>
              <ul>
                <li class="w-3" v-for="item in usaList">
                  <a href="#">
                    <img :src="item.s_img">
                    <span class="font">{{item.s_brand}}</span>
                  </a>
                </li>                                                
              </ul>
          </div>
          <div class="j-content" style="display:none;">
              <h5>英国酒</h5>
              <ul>
                <li class="w-3" v-for="item in yinguoList">
                  <a href="#">
                    <img :src="item.s_img">
                    <span class="font">{{item.s_brand}}</span>
                  </a>
                </li>                                                 
              </ul>
          </div>
          <div class="j-content" style="display:none;">
              <h5>澳大利亚酒</h5>
              <ul>
                <li class="w-3" v-for="item in aodaliyaList">
                  <a href="#">
                    <img :src="item.s_img">
                    <span class="font">{{item.s_brand}}</span>
                  </a>
                </li>                                                 
              </ul>
          </div>                       
     </div>
    </div>
  </div>
</template>

<script>
import { Search } from 'mint-ui';
import $ from 'jquery';
var obj={};
obj[Search.name]=Search;
// Vue.component(Search.name, Search)
export default {
  name: 'discover',
  data () {
    return {
      whiteList:[],
      redList:[],
      putaoList:[],
      taiguoList:[],
      usaList:[],
      yinguoList:[],
      aodaliyaList:[],
      value: ''
    }
  },
  mounted () {
       var that = this;
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
            that.whiteList = data;
        })


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
            that.redList = data;
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
            that.putaoList = data;
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
            that.taiguoList = data;
        })

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
            that.usaList = data;
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
            that.yinguoList = data;
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
            that.aodaliyaList = data;
        })


      $(function(){
        $('.menu-left ul li').click(function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            // console.log('fdsa')
            var index = $(this).index();
            console.log(index);
            $('.j-content').hide();
            $('.j-content').eq(index).show()
            console.log(index)
        })
      }) 
  },
  components:obj
}

</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
#header{
  height:1.7rem;
  width:100%;
  position: fixed;
  z-index: 1;
}
#section{
  display: flex;
  /*overflow: hidden;*/
}
.menu-left{
    position: fixed;
    top:1.9rem;
    left:0;
    background:#F6F6F9;
    overflow-y:auto;
    width:22%;
    height:15rem;
    z-index: 10
}
.menu-left ul li{
    padding: .5rem .3rem;
    box-sizing: border-box;
    font-size: .7rem;
    text-align: center;
}
.menu-left ul li.active {
    background: #fff;
    color: #1CBB7F;
}
.menu-right{
    width:77%;
    background: #fff;
    position: absolute;
    top:1.7rem;
    left: 3.5rem;
    padding:.5rem;
    overflow-y: auto;
}
.menu-right ul{
  overflow:hidden;
  margin-top:.5rem;
}
.second{
    margin-top:.7rem;
}
.w-3{
  width:3.2rem;
  height:4rem;
  float:left;
  margin-left:.4rem;
  margin-bottom:.7rem;
}
.w-3 a{
  display: block;
  text-decoration: none;
}
.w-3 img{
  width:3.2rem;
  height:3.2rem;
}
.w-3 .font{
    display:block;
    width:100%;
    text-align:center;
    color:black;
    font-size:.5rem;
}
</style>
