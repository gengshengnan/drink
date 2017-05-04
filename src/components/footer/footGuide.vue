<template>
    <footer>
          <ul>
              <li  id="home_bottom" class="l">
                <a class="common" href="#msite">
                    <i class="iconfont">&#xe6e6;</i>
                    <span class="home">首页</span>
                  </a>
               </li>
              <li  id="home_bottom" class="l">
                <a class="common" href="#find">
                    <i class="iconfont">&#xe612;</i>
                    <span class="home">分类</span>
                </a> 
              </li>
              <li  id="home_bottom" class="l">
                <a class="common" href="#order">
                   <i class="iconfont">&#xe626;</i>
                   <span class="home">购物车</span>
                </a>
              </li>
              <li  id="home_bottom" class="l">
                <a class="common" href="#profile">
                   <i class="iconfont">&#xe636;</i>
                   <span class="home">我的</span>
                  </a>
              </li>
          </ul>
    </footer>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
    	data(){
            return{
                
            }
        },
        created(){
           
        },
        mounted(){
            
        },
        computed: {
            ...mapState([
                'geohash'
            ]),
        },
        methods: {
        	gotoAddress(path){
        		this.$router.push(path)
        	}
        },

    }

</script>

<style scoped>
html, body {
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
footer {
  height: 2.15rem;
  width: 100%;
  background:#3e3e3e;
  z-index: 10;
  position: fixed;
  bottom: 0;
  overflow-x:hidden ;
 
}
footer ul{
  width:100%;
   display: flex;
  justify-content:space-between;
}
footer #home_bottom{
  margin-right: 1rem;
  margin-left: 1.2rem;
  text-align: center;
}
footer li .iconfont{
  font-size:20px;
  margin-left:0.03rem;
  color:#fff;
}
footer li span.home{
  display: block;
  color:#fff;
  font-size: 14px;
}
footer li:hover span.home,footer li:hover i{
  color: blue;
}


</style>
