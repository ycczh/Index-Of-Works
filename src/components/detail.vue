<template>
	<div class="detail">
		<headers>
			<span class="menu-txt" slot="menu-txt">{{film.name}}</span>
		</headers>
		<navbar></navbar>
		<div class="topImg">
			<img :src="coverimg">
		</div>

		<div class="detail-content">
			<h3>影片简介</h3>
			<div class="detail-box">
				<p class="group">
					<span class="title">影片</span>
					<span class="text">
						{{film.name}}
					</span>
				</p>
				<p class="group">
					<span class="title">类型</span>
					<span class="text">{{film.category}}</span>
				</p>
				<p class="group">
					<span class="title">导演</span>
					<span class="text">{{film.director}}</span>
				</p>
				<p class="group">
					<span class="title">语言</span>
					<span class="text">{{film.language}}</span>
				</p>
				<p class="dis">
					{{film.synopsis}}
				</p>
			</div>
		</div>
		
	</div>
</template>

<script>
import headers from './head.vue'
import navbar from './navbar.vue'
export default{
	beforeCreate(){
		this.$store.dispatch('fetchFilmDetail',this.$route.params.id)
	},
	computed:{
		film(){
			return this.$store.state.detail
		},
		coverimg(){
			return this.$store.state.coverimg
		}
	},
	components:{
		headers:headers,
		navbar:navbar
	}
}
</script>

<style>
	.topImg{
		margin-top:45px;
	}
	.topImg>img{
		width:100%;
	}
	.detail-content{
		width:100%;
		background:#e9e9e9;
		padding-bottom:200px;
	}
	.group{
		margin-left:5%;
		font-size:12px;
		padding:5px 0;
	}
	.detail-content>h3{
		height:30px;
		line-height:30px;
		padding-top:20px;
		padding-left:5%;
	}
	.dis{
		width:90%;
		margin:0 auto;
		font-size:12px;
		text-indent: 24px;
		line-height:2;
		margin-top:10px;
	}
</style>