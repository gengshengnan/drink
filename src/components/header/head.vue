<template>
    <header id='head_top'>
        <ul class="h_2">
            <li><a href=""><i class="iconfont">&#xe612;</i></a></li>
            <li>
                <input type="text" id="search" ref="ipt" placeholder="搜索商品"/> 
            </li>
            <!-- <li><a href="#/food"><i class="iconfont">&#xe66b;</i></a></li> -->
              <!-- <router-link :to="'/msite'+this.searchVal">        -->
                  <button id="tab" @click="search()">搜索</button>               
               <!-- </router-link> -->
        </ul>
 
         

    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import $ from 'jquery'
    export default {
    	data(){
            return{
                // searchVal:""
            }
        },
        mounted(){ 
           
        },
        props: ['signinUp', 'headTitle', 'goBack'],
        computed: {
          
        },
        methods: {
           search:function(){
                  // this.searchVal = this.$refs.ipt.value
                  // console.log(this.searchVal)
                   this.setCookie('search',$('#search').val())
                   location.href="#/productlist"
            },
              setCookie (name, value) {
                document.cookie = name + '=' + value;
            }
        },
    }

</script>

<style scoped>
ul.h_2{
    display: flex;
    justify-content: space-between;
    margin-top:0.5rem;
}
#head_top{
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width:100%;
    height:2.6rem;
    background:rgba(28,187,127,0.5);
    background: #909090;
}
#search{
  width: 11rem;
  height: 1.7rem;
  display: block;
  border-radius: 1rem;
  border:0;
  text-align: center
 }
 #tab{
    background: #909090;
    color:#ffffff;
    margin-right:0.6rem;
 }
 ul.h_2 li i{
 font-size: 20px;
  color:#fff;
  margin:0 .5rem;
 }
</style>
