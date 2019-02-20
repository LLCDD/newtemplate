<template>
	 <div class="allcontent">
		 <div class="all">
        <div class="content">
         <img src="../../../public/image/logo.png" alt="" class="logoimg">
				 <p class="entry">
					 <span class="phone"></span>
					 <input type="text" placeholder="手机号/账号" v-model="phone">
				 </p>
				 <p class="entry">
					 <span class="passwordsuo"></span>
					 <input type="password" placeholder="密码" v-model="pass">
				 </p>
				 <p class="login" @click="configlogin">登录</p>
				 <p class="func">
					 <router-link tag="span" to="/newuser">新用户注册</router-link>
					 <router-link tag="span" to="/forgetpassword">忘记密码</router-link>
				 </p>
		 </div>
		 </div>
	 </div>
</template>

<script>
export default {
  data(){
		return{
			phone:'',
			pass:'',
		}
	},
	methods:{
	async	configlogin(){
		try{
      if(!this.phone || !this.pass){
				this.$toasted.error('请输入完善信息').goAway(1500)
				return
			}
			let res = await this.http.post('/api/login',{
				phone:this.phone,
				password:this.pass
			})
			if(res.code==200){
        this.$store.dispatch('login',res.data)
				this.$toasted.success('登录成功').goAway(1500)
				this.$router.replace({name:'home'})
			}
		  }catch(error){

		  } 
		}
	}
}
</script>

<style scoped lang="scss">
   .allcontent{
			min-height: 100%;
			min-height:100vh;
			width: 100%;
			background: url("../../../public/image/bigbg.png") no-repeat;
			background-size: 100% 100%;
	 }
	 .all{
		 display: flex;
		 padding: 0rem .55rem;
	 }
	 .content{
		 width: 100%;
		 margin-top: 1.7rem;
		 display: flex;
		 flex-direction: column;
		 align-items: center;
		 .entry{
			 width: 100%;
			 height: 1rem;
			 border-bottom: 1px solid #ffffff;
			 display: flex;
			 align-items: center;
			 span{
				 width: .42rem;
				 height: .42rem;
				 margin-left: .24rem;
				 margin-right: .21rem;
			 }
			 input{
				 width: 70%;
				 height: 80%;
				 background: none;
				 color:#ffffff;
			 }
		 }
		 .login{
			  width: 100%;
				height: 0.91rem;
				line-height: .91rem;
				color: #f1941d;
				font-size: 0.36rem;
				background-color: #ffffff;
				border-radius: 0.1rem;
				margin-top: .9rem;
		 }
		 .func{
			 height: 1rem;
			 display: flex;
			 align-items: center;
			 justify-content: space-between;
			 width: 100%;
			 span{
				 font-size: 0.3rem;
	       color: #ffffff;
			 }
		 }
	 }
	 .entry input::input-placeholder{color:#ffffff !important;} 
	 .entry  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
    color: #ffffff !important; 
} 
	.logoimg{
		width: 2.1rem;
		height: 2.1rem;
		margin-bottom: 1.2rem;
	}

</style>

