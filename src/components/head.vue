<template>
	<div class="header clearfix">
		<div class="left header-inner">
			<div class="menu-box" @click="showNav">
				<i class="iconfont icon-caidan"></i>
			</div>
			<slot name="menu-txt"><span class="menu-txt">卖座电影</span></slot>

		</div>
		<div class="me-box right">
			<router-link to="/login">
				<i class="iconfont icon-gerenzhongxin1"></i>
			</router-link>
		</div>
	</div>	
</template>

<style>
	.header{
		width:100%;
		height:45px;
		background:#000;
		color:#999;
		line-height:45px;
		position:fixed;
		top:0px;
		left:0px;
		z-index:11111;
	}
	.menu-box{
		display:inline-block;
		width:44px;
		height:44px;
		text-align:center;
		border-right:1px solid #222;
		/*box-shadow: 1px 0 1px #363636;*/
	}
	.menu-txt{
		color:#efefef;
		font-size:14px;
	}
	.header-inner{
		height:45px;
	}
	.me-box{
		margin-right:20px;
		font-size:20px;
	}
	.me-box a{
		color:#999;
	}
</style>

<script>
export default{
	methods: {
	  showNav () {
	    this.$store.dispatch('changeLeftNavState',true)
	    
	  }
	 
	},

}
</script>