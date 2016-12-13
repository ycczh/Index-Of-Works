<template>
	<div class="cinemaDetail">
		<headers>
			<span class="menu-txt" slot="menu-txt">{{cinemadetail.name}}</span>
		</headers>
		<navbar></navbar>
		<div class="banner">
			<img src="/src/assets/66461d1a02a9eaa64876c90952c42aed.png">
		</div>
		<ul class="cinemadetail">
			<li class="clearfix">
				<span class="left left-icon">
					<i class="iconfont icon-chair color1"></i>
				</span>
				<div class="left cinema-right">
					<p class="clearfix">
						<span class="titles left">定座票</span>
						<span class="button1 right">立即订座</span>
					</p>
					<p class="txt">选好场次及座位，到影院自助取票</p>
				</div>
			</li>
			<li class="clearfix">
				<span class="left left-icon">
					<i class="iconfont icon-jingdianmenpiaodingpiao color2"></i>
				</span>
				<div class="left cinema-right">
					<p class="clearfix">
						<span class="titles left">通兑票</span>
						<span class="button2 right">立即订票</span>
					</p>
					<p class="txt">有效期内到影院兑换纸质票</p>
				</div>
			</li>
			
			<li class="clearfix">
				<span class="left left-icon">
					<i class="iconfont icon-dizhi1 color2"></i>
				</span>
				<div class="left cinema-right">
					
					<p class="txt2">{{cinemadetail.address}}</p>
				</div>
			</li>
			<li class="clearfix">
				<span class="left left-icon">
					<i class="iconfont icon-dianhua color2"></i>
				</span>
				<div class="left cinema-right">
					
					<p class="txt2" v-for="telphone in cinemadetail.telephones">{{telphone}}</p>
				</div>
			</li>
			
		</ul>
		<div class="jiange">

		</div>
		<ul class="service-list clearfix">
			<li v-for="(services,$index) in service" :class="{selected:iscur==$index}" @click="iscur=$index,name=services.name">
					<span>
						<i :class="services.icon"></i>
					</span>
					<p>{{services.name}}</p>
			</li>
		</ul>
		<ul class="service-conetent">
			<li v-for="(service,index) in cinemadetail.services" >
				<p v-if="name === service.name">{{service.description}}</p>
			<!-- 	<p v-else>haha</p> -->
			</li>
		</ul>
	</div>
</template>	

<script>
import headers from './head.vue'
import navbar from './navbar.vue'
export default{
	data(){
		let service=[{icon:'iconfont icon-jingdianmenpiaodingpiao',name:'取票'},{icon:'iconfont icon-tubiao',name:'3D'},{icon:'iconfont icon-tingche',name:'停车'},{icon:'iconfont icon-24',name:'优惠'},{icon:'iconfont icon-jiaotong',name:'公交'}]
		return {service:service,iscur:0,name:'取票'}
	},
	computed:{
		cinemadetail(){
			return this.$store.state.cinemadetail
		}
	},
	created(){
		this.$store.dispatch('fetchCinemaDetail',this.$route.params.id)
	},
	components:{
		headers:headers,
		navbar:navbar
	},
	methods:{
		name(){
			// var iscur={{$index}}
		}
	}
	
}
</script>

<style scoped>
	.banner{
		margin-top:45px;
	}
	.banner>img{
		width:100%;
	}
	.cinemadetail>li{
		width:90%;
		margin:0 auto;
		
	}
	.left-icon{
		display:block;
		width:50px;
		text-align:center;
		height:70px;
		overflow:hidden;
		margin-top:30px;
	}
	.left-icon>i{
		font-size:30px;
	}
	.color1{
		color:#ff8160
	}
	.cinemadetail .titles{
		font-size: 15px;
    	color: #000;
    	display:block;
    	height:30px;
    	line-height:30px;
    	font-weight:690;
 
	}
	.cinemadetail .button1{
		display:block;
		width: 94px;
		border-radius: 38px;
		height: 30px;
		border: none;
		font-size: 13px;
		background-color: #fe8233;
		color: #fff;
		text-align:center;
		line-height:30px;
	}
	.cinemadetail .button2{
		display:block;
		width: 94px;
		border-radius: 38px;
		height: 30px;
		border: none;
		font-size: 13px;
		/*background-color: #fe8233;*/
		border:1px solid #fe8233;
		color: #fe8233;
		text-align:center;
		line-height:30px;
	}
	.cinemadetail .txt{
		font-size:12px;
		color:#737373;
		margin-top:5px;
	}
	.cinema-right{
		width:80%;
		padding:30px 0px;
		border-bottom:1px #d6d6d6 dotted;
	}
	.color2{
		color:#40b5b5;
	}
	.jiange{
		width:100%;
		height:20px;
		background:#ebebeb;
	}
	.service-list{
		width:90%;
		margin:0 auto;
	}
	.service-list>li{
		float:left;
		width:20%;
		text-align:center;	
		padding:20px 0;
		overflow:hidden;

	}
	.service-list{
		border-bottom:1px solid #999;
		margin-bottom:20px;
	}
	.service-list .selected{
		border-bottom:3px solid #ff8032;
	}
	.service-list .selected span{
		border:1px solid #ff8032;
		color:#ff8032;
	}
	.service-list .selected p{
		color:#ff8032;
	}
	.service-list>li>span{
		width:40px;
		height:40px;
		border-radius:20px;
		line-height:45px;
		overflow:hidden;
		border:1px solid #737373;
		display:block;
		margin:0 auto;
		margin-bottom:5px;
	}
	.service-list>li>p{
		font-size:12px;
	}
	.service-conetent{
		width:90%;
		margin:0 auto;
		padding-bottom:30px;
		font-size:12px;
	}
	.txt2{
		font-size:13px;
	}
</style>