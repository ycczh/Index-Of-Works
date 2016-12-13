<template>
	<div class="momentlist">
		<ul class="list-box">
			<li v-for="noemovie in nowmovies" class="clearfix">
			<router-link :to="{name: 'detail', params: {id: noemovie.id}}">
				<div class="left img-box">
					<img :src="noemovie.poster.thumbnail">
				</div>
				<div class="left message">
					<div class="clearfix gradebox">
						<h3 class="left moviename">{{noemovie.name}}</h3>
						<span class="right grade">{{noemovie.grade}}</span>
					</div>
					<p class="txt1">{{noemovie.intro}}</p>
					<p class="txt2 clearfix">
						<span class="left">{{noemovie.cinemaCount}}家影院上映</span>
						<span class="right">{{noemovie.watchCount}}人次观看</span>						
					</p>
					
				</div>
			</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name:'momentlist',
	computed:{
		nowmovies(){
			return this.$store.state.nowPlayingFilms
		}
	},
	created(){
		this.$store.dispatch('fetchNowPlayingLists',10, 1)
	}
}
</script>

<style scoped>
	.list-box{
		width:90%;
		margin:0 auto;
		margin-top:30px;
	}
	.list-box>li{
		margin-bottom:20px;
		padding-bottom:20px;
		border-bottom:1px dashed #666;
	}
	.img-box{
		width:60px;
		height:82px;
		overflow:hidden;
		margin-right:20px;
	}
	.img-box>img{
		width:100%;
	}
	.message{
		font-size:12px;
		width:70%;

	}
	.grade{
		font-size: 16px;
		color: #fc7103;
		font-weight:bold;
	}
	.gradebox{
		height:32px;
		line-height:32px;
	}
	.txt1{
		color: #8e8e8e;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	width: 100%;
    	display: inline-block;
	}
	.txt2{
		color: #8e8e8e;
		height:30px;
		line-height:30px;
		width:190px;
	}
</style>