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
						<!-- <span class="right grade">{{noemovie.grade}}</span> -->
					</div>
					<p class="txt1">{{noemovie.intro}}</p>
					<p class="txt2">
						<span>{{getTime(noemovie.premiereAt)}}</span>
						<span class="friday">{{getDay(noemovie.premiereAt)}}</span>						
					</p>
					<i class="arrow-right"></i>
					
				</div>
			</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import moment from 'moment'
export default{
	name:'momentlist',
	computed:{
		nowmovies(){
			return this.$store.state.comingSoonFilms 
		}
	},
	created(){
		this.$store.dispatch('fetchComingSoonLists',10, 1)
	},
	methods:{
		getTime(date){
			return moment(date).format('M月DD日上映')
		},
		getDay(date){
			return moment(date).format('dddd')
		}
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
		position:relative;

	}
	.grade{
		font-size: 16px;
		color: #fc7103;
		font-weight:bold;
	}
	.gradebox{
		height:32px;
		line-height:32px;
		color:#000;
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

		height:30px;
		line-height:30px;
		width:205px;
		color:#fe6e00;
	}
	.friday{
		margin-left:20px;
	}
	.moment{
		width:100%;
	}
	.arrow-right{
		position:absolute;
		display:block;
		width:15px;
		height:15px;
		background:url("/src/assets/arrow-right.png")no-repeat left top;
		background-size: 100%;
		top:10px;
		right:0px;
	}

</style>