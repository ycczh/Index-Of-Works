<template>
	<div class="container">
		<heads></heads>
		<navbar></navbar>
		<div class="swiper-container swiper1">
			<div class="swiper-wrapper  ">
			    <div v-for="banner in banners" class="swiper-slide">
			    	<a :href="banner.url">
			    		<img :src="banner.imageUrl">
 					</a>
			    </div>
			</div>
		</div>
		<div class="movies">
			<moment></moment>
			<router-link to="/list/momentlist"><more>更多热映电影</more></router-link>
			<comming></comming>
			<router-link to="/list/comminglist"><more>更多即将上映电影</more></router-link>
		</div>
	</div>
</template>

<script>
		import Moment from './moment.vue'
		import Comming from './commingsoon.vue'
		import More from './more-button.vue'
		import Head from './head.vue'
		import NavBar from './navbar.vue'
		$(document).ready(function(){
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 5000,//可选选项，自动滑动
				loop:true,
				pagination : '.swiper-pagination',
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
			})
		})
		
	
	export default{
		name:'index',
		computed:{
			banners(){
				return this.$store.state.billboards
			}
		},
		beforeCreated(){
			this.$store.dispatch('fetchBillboards')
			
		},
		components:{
			moment:Moment,
			more:More,
			comming:Comming,
			heads:Head,
			navbar:NavBar
		}


	}
</script>
<style>
		*{
			margin:0px;
			padding:0px;
		}
		a{
			text-decoration: none;
		}
		body{
			overflow-x:hidden;
		}
		.swiper1{
			margin-top:45px;
		}
		.swiper1 img{
			width:100%;
		}
		.swiper1 a{
			display:block;
			width:100%;
		}
		.movies{
			padding-top:20px;
			background:#e1e1e1;
			padding-bottom:100px;
		}
		.container{
			padding-bottom:50px;
			width:100%;
		}
		
</style>

