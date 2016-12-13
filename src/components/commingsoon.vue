<template>
	<div class="comming">
		<div class="title">
			<span>即将上映</span>
		</div>
		<ul class="nowlist">
			 
				<li v-for="commingmovie in commingmovies">
					<router-link :to="{name: 'detail', params: {id: commingmovie.id}}">
					<div class="imgbox"><img :src="commingmovie.cover.origin"></div>
					<div class="nowtext">
						<p class="clearfix scorebox">
							<span class="left moviename">{{commingmovie.name}}</span>
							<span class="right score data-comming">{{getTime(commingmovie.premiereAt)}}</span>
						</p>
					<div>
					</router-link>
				</li>
			
		</ul>
	</div>
</template>

<script>
 import moment from 'moment'
export default{
	name:'comming',
	computed:{
		commingmovies(){
			return this.$store.state.comingSoonFilms 
		}
	},
	created(){
		this.$store.dispatch('fetchComingSoonLists',5, 1)
	},
	methods:{
		
			getTime (date) {
			  return moment(date).format('M月DD日上映')
			}
		
	}
	
}
</script>

<style>
	.title{
		text-align:center;
		margin-bottom:20px;
	}
	.title>span{
		display:inline-block;
		width:140px;
		height:30px;
		border-radius:20px;
		background:#a7a7a7;
		font-size:12px;
		line-height:30px;
		color:#fff;
		position: relative
	}
	.title>span:before{
		content:'';
		display:inline-block;
		width:100px;
		height:1px;
		background:#a7a7a7;
		position:absolute;
		left:-110px;
		top:15px;
	}
	.title>span:after{
		content:'';
		display:inline-block;
		width:100px;
		height:1px;
		background:#a7a7a7;
		position:absolute;
		left:145px;
		top:15px;
	}
	.data-comming{
		font-size:12px;
		letter-spacing:1px;
	}
	.moviename{
		color:#000;
	}
</style>