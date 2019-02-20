
<template>
  <div id="app">
    <main id="panel">
      <!-- 顶部导航 -->
      <div class="hometitle titles" v-show="$store.state.titleshow==1">
       <span class="backs onespan" @click="back_s">
         
       </span>
       <p class="onep">
         <span class="titlewz">
           {{this.$store.state.title}}
         </span>
       </p>
      <span class="onespan">

      </span>
        
     </div>
    <!-- 首页导航 -->
    <div class="hometitle titles" v-show="$store.state.titleshow==2">
       <span>
         
      </span>
       <p>
         <span class="titlepng">

         </span>
         <span class="titlewz">
           DTR
         </span>
       </p>
      <router-link tag="span" to="/announcementlist" class="bgright">

      </router-link>
        
     </div>
     <div class="hometitle titles" v-show="$store.state.titleshow==3">
       <span>
         
      </span>
       <p>
         <span class="titlewz">
          {{this.$store.state.title}}
         </span>
       </p>
      <span class="wzright" @click="updatedjilu">
          {{this.$store.state.titleright}}
      </span>
        
     </div>

     <div class="hometitle titles bgt" v-show="$store.state.titleshow==4">
       <span>
         
       </span>
       <p>
         <span class="titlewz">
           {{this.$store.state.title}}
         </span>
       </p>
      <span>

      </span>
        
     </div>

     <div class="hometitle titles" v-show="$store.state.titleshow==5">
       <span  class="backs" @click="back_s">
         
      </span>
       <p>
         <span class="titlewz rightspan">
          {{this.$store.state.title}}
         </span>
       </p>
      <router-link to="/addsub" tag="span" class="wzright">
         {{this.$store.state.titleright}}
      </router-link>
        
     </div>

      <!--中间内容部分-->
      <div id="com" :class="$store.state.navshow?'':'navhide'">
        <pull-to :top-load-method="topload" :bottom-load-method="bottomload" :is-top-bounce="$store.state.PullTo.topbounce"
          :is-bottom-bounce="$store.state.PullTo.bottombounce" :top-config="$store.state.PullTo.topConfig"
          :bottom-config="$store.state.PullTo.bottomConfig">
		  
          <router-view></router-view>

        </pull-to>
      </div>
      <div id="nav" class="clearfix" v-show="$store.state.navshow">
         <wx-nav></wx-nav>
      </div>

    </main> 
  </div>
</template>

<script>
import mixin from "./mixin"; // 混合被单独放在 mixin.js 中管理
window.mixin = mixin; // 将 混合/mixin 暴露在窗口对象中，某些组件需要时，直接提取 window.mixin
import WxNav from "@/components/common/wx-nav";
import PullTo from "vue-pull-to";

//计算中间内容区域高度
const setcom = function(_this) {
  var store = _this.$store.state;
  //首先计算整个页面的高度
  var html = document.getElementsByTagName("html")[0];
  //把页面的高度给最大的盒子
  document.getElementById("app").style.height = html.clientHeight + "px";
  var titlesh;
  //计算顶部的高度
  if (store.titleshow >= 0) {
    titlesh = document.getElementsByClassName("titles")[store.titleshow - 1]
      .clientHeight;
  }

  //底部的高度
  const navh = document.getElementById("nav").clientHeight;
  if (store.navshow) {
    //footer存在
    if (store.titleshow >= 0) {
      //header存在
      document.getElementById("com").style.height =
        html.clientHeight - navh - titlesh + "px";
    } else {
      //header不存在
      document.getElementById("com").style.height =
        html.clientHeight - navh + "px";
    }
  } else {
    //footer不存在
    if (store.titleshow >= 0) {
      //header存在
      document.getElementById("com").style.height =
        html.clientHeight - titlesh + "px";
    } else {
      //header不存在
      document.getElementById("com").style.height = html.clientHeight + "px";
    }
  }
};

  export default {
    name: "App",
    data() {
      return {};
    },
   computed:{
      userimg:function(){
         return this.$store.state.userimg?this.$store.state.userimg:localStorage.getItem('userimg')
      },
      username:function(){
        return this.$store.state.username?this.$store.state.username:localStorage.getItem('username')
      },
      vip:function(){
        return this.$store.state.vip?this.$store.state.vip:localStorage.getItem('vip')
      }
    },
    watch: {},
    methods: {
      back_s: function () {
        this.$router.go(-1);
      },
      bottomload(loaded) {
        this.$store.state.PullTo.bottomload(loaded);
      },
      topload(loaded) {
        this.$store.state.PullTo.topload(loaded);
      },
      gopersonal(){
        this.$router.push({name:'personal'})
      },
      updatedjilu(){
        this.$store.commit('shuaxinjilu')
      }
    },
  components: {
    PullTo,
    WxNav
  },
  mounted() {
    var $$this = this;
    setcom($$this);
    var reEvt = "orientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(
      reEvt,
      function() {
        setcom($$this);
      },
      false
    );
  },
  beforeUpdate() {
    var $$this = this;
    setcom($$this);
    var reEvt = "orientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(
      reEvt,
      function() {
        //监听手机屏幕是否旋转，重新计算页面高度
        setcom($$this);
      },
      false
    );
  },
  updated() {
    var $$this = this;
    setcom($$this);
    var reEvt = "orientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(
      reEvt,
      function() {
        setcom($$this);
      },
      false
    );
  },
  activated() {
    var $$this = this;
    setcom($$this);
    var reEvt = "orientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(
      reEvt,
      function() {
        setcom($$this);
      },
      false
    );
  }
};
</script>
<style scoped>
@import "./assets/css/toast.css";
#app {
  background-color: #fafafa;
  text-align: center;
  position: relative;
  overflow: hidden;
}

#com {
  overflow: hidden;
   background-color:#fafafa;
   
}
.backs{
  /* background: url('../public/image/return.png') no-repeat .3rem center;
  background-size: .22rem .4rem; */
}
.hometitle{
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #f1941d;
}
.hometitle .onespan{
  width: 10%;
}
.hometitle>span{
  width:25%;
  height: .88rem;
  line-height: .88rem;
}
.hometitle p{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.hometitle p .titlepng{
 width: 0.82rem;
 height: 0.62rem;
 /* background: url('../public/image/logo-n.png') no-repeat center center;
 background-size: .62rem .62rem; */
}
.hometitle p .titlewz{
	font-size: 0.4rem;
	color: #ffffff;
}
.bgright{
  /* background: url('../public/image/interactive.png') no-repeat 80% center;
  background-size: .44rem .44rem; */
}
.wzright{
	font-size: 0.3rem;
	color: #ffffff;
}
/* title设置 */

</style>

