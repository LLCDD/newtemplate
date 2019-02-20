<template>
  <div id="wx-nav">
	<nav id="nav">
        <router-link to="/home">
            <img src="../../../public/image/homepage.png" alt="">
            <img src="../../../public/image/homepage-x.png" alt="">
            <span>首页</span>
        </router-link>
        <router-link to="/friend" exact>
            <img src="../../../public/image/coupons.png" alt="">
            <img src="../../../public/image/coupons-x.png" alt="">
            <span>钱包</span>
        </router-link>
		<router-link to="/explore" > 
         <img src="../../../public/image/qrcode.png" alt="">
              <img src="../../../public/image/qrcode-x.png" alt="">
              <span class="redpacket">商城</span>
        </router-link>
		<router-link to="/personal">
             <img src="../../../public/image/people.png" alt=""> 
             <img src="../../../public/image/people-x.png" alt="">  
              <span>个人</span> 
        </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
@import "../../assets/css/wx-nav.css";
#wx-nav{
    width: 100%;
    height: 1rem;
}
</style>
