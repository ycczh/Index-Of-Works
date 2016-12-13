<template>
	<div class="box">
		<headers></headers>
		<navbar></navbar>
		<ul class="listbox clearfix">
			<li :class="{selected:$route.path === '/list/momentlist'}"><router-link to="/list/momentlist">正在热映</router-link></li>
			<li :class="{selected:$route.path === '/list/comminglist'}"><router-link to="/list/comminglist">即将放映</router-link></li>
		</ul>
		<router-view></router-view>

	</div>
</template>

<style>
	.listbox{
	border-bottom:solid #fe6e00 1px;
	margin-top:45px;
	}
	.box{
		background:#f9f9f9;
	}
	.listbox>li{
		float:left;
		width:50%;
		text-align:center;
		font-size:14px;
		height:40px;
		line-height:40px;

	}
	.listbox .selected{
		border-bottom:solid #fe6e00 3px;
	}
</style>
<script>
	import headers from './head.vue'
	import navbar from './navbar.vue'
	export default{
		components:{
			headers:headers,
			navbar:navbar
		}
	}
</script>