<template>
	<div class="cinema">
		<headers>
			<span class="menu-txt" slot="menu-txt">全部影院</span>
		</headers>
		<navbar></navbar>
		<ul class="cinemalist">
			<li v-for="area in areas">
				<!-- <div class="area-txt" @click="showNav">{{area.area}}</div> -->
					<div class="area-txt" @click="area.show = !area.show">{{area.area}}</div>
				
				<ul class="cinema-detail" v-show="area.show">
					
						<li class="data" v-for="cinema in cinemas" v-if="cinema.district.name === area.area" >
							<router-link :to="{name: 'cinema', params: {id: cinema.id}}">		
								<p class="cinema-name">{{cinema.name}}</p>
								<p>
									<span class="promotion" v-for="txt in cinema.labels" :class="{color3:txt.name === '可乐爆米花'}">{{txt.name}}
									</span>
								</p>
								<p class="cinema-address">{{cinema.address}}</p>
							</router-link>
						</li>
					
				</ul>
				
				
			</li>
		</ul>
	</div>
</template>

<script>
import headers from './head.vue'
import navbar from './navbar.vue'
export default{
	name:'cinema',
	data(){
		let areas=[{area:'宝安区',show:true},{area:'光明新区',show:false},{area:'龙华区',show:false},{area:'南山区',show:false},{area:'龙岗区',show:false},{area:'罗湖区',show:false},{area:'盐田区',show:false},{area:'坪山区',show:false},{area:'大鹏新区',show:false}]
		// let areas=[{area:'天河区',show:true},{area:'番禺区',show:false},{area:'增城区',show:false},{area:'萝岗区',show:false},{area:'花都区',show:false},{area:'越秀区',show:false},{area:'白云区',show:false},{area:'海珠',show:false},{area:'南沙',show:false}]

		return { areas:areas}

	},
	created(){
		this.$store.dispatch('fetchCinemaLists',10,1)
	},
	computed:{
		cinemas(){
			return this.$store.state.cinemalist
		}	
	},
	components:{
		headers:headers,
		navbar:navbar
	}
	
}
</script>

<style>
	.cinemalist{
		margin-top:45px;
	}
	.cinemalist>li .area-txt{
		width:100%;
		height:45px;
		line-height:45px;
		background:#e1e1e1;
		padding-left:15px;
		position:relative;
		border-bottom:1px solid #fff;
	}
	.cinema-detail{
		width:100%;
		left:0px;
		top:45px;
		background:#fff;
	}
	.cinema-name{
		font-size:12px;
		color:#000;
	}
	.cinema-detail>li{
		padding:20px 25px;
		border-bottom:1px solid #e1e1e1;
	}
	
	.promotion{
		display:inline-block;
		font-style: normal;
		border-radius:5px;
		width:70px;
		height:20px;
		color:#fff;
		font-size:12px;
		line-height:20px;
		text-align:center;
		margin:10px 5px;
		background:#ff9658;
	}
	.cinema-address{
		font-size:12px;
		color:#ccc;
	}
	.color3{
		background:#51add0;
		border-radius:5px;
	}
	.color4{
		background:#ff7674;
	}
	.color2-youhui{
		background:#ff9658;
	}
</style>