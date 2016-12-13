<template>
	<div class="moment">
		<ul class="nowlist">
			 
				<li v-for="noemovie in nowmovies">
					<router-link :to="{name: 'detail', params: {id: noemovie.id}}">
					<div class="imgbox"><img :src="noemovie.cover.origin"></div>
					<div class="nowtext">
						<p class="clearfix scorebox">
							<span class="left moviename">{{noemovie.name}}</span>
							<span class="right score">{{noemovie.grade}}</span>
						</p>
						<p class="peoplebox">
							{{noemovie.cinemaCount}}家影院上映 {{noemovie.watchCount}}人次观看
						</p>
					<div>
					</router-link>
				</li>
			
		</ul>
	</div>
</template>	
<script>
export default{
	name:'moment',
	computed:{
		nowmovies(){
			return this.$store.state.nowPlayingFilms
		}
	},
	created(){
		this.$store.dispatch('fetchNowPlayingLists',5, 1)
	}
}
</script>

<style>
	ul,li{
		list-style:none;
	}
	a{
		text-overflow:none;
	}
	.nowlist>li{
		background:#fff;
		padding-bottom:10px;
		margin-bottom:30px;
	}
	.nowlist{
		width:90%;
		margin:0 auto;
	}
	.imgbox{
		display:block;
		width:100%;
		overflow:hidden;
	}
	.imgbox>img{
		width:100%;
	}
	.nowtext{
		font-size:12px;
		padding:0 10px;
	}
	.scorebox{
		height:30px;
		line-height:30px;
	}
	.score{
		color: #f78360;
		display: inline-block;
		float: right;
		margin-right:15px;
		font-size:16px;
		font-weight: bold;
	}
	.peoplebox{
		color:#9a9a9a;
	}
</style>
