<template>
<div>
	<transition name="fade">
	<div class="nav-bar" v-show="show" @click="hideNav">
			<ul class="menulist-box"  >
						<li v-for="menulists in menuList">
							<router-link :to="menulists.path">{{menulists.name}}</router-link>
							<i class="arrow fa fa-angle-right"></i>
						</li>
			</ul>
	</div>
	</transition>
	</div>
</template>	

<script>

	export default{
		computed:{
			show(){
				return this.$store.state.leftNavState
			}
		},
		created(){
			console.log(this.$store.state.leftNavState)
		},
		name:'navbar',
		data () {
			let menuList = [{name: '首页', path: '/'}, {name: '影片', path: '/list/momentlist'}, {name: '影院', path: '/cinema'}, {name: '我的', path: '/login'}, {name: '卖座网查询', path: '/card'}]
			return { menuList: menuList}
		},
		methods:{
			hideNav(){
				this.$store.dispatch('changeLeftNavState', false)
			}
		}
	}
</script>

<style>
	.nav-bar{
		position: fixed;
		top:45px;
		left:0px;
		width:210px;
		background:#282828;
		color:#fff;
		z-index:111;
		border-top: 1px solid #222;
		box-shadow: 0 1px 1px #363636 inset;
		/*height:100%;*/
	}
	.menulist-box{
		height:800px;
	}
	.menulist-box>li{
		float:left;
		width:100%;
		height:50px;
		line-height:50px;
		text-align:center;
		border-bottom: 1px dotted #333;
		position:relative;
	}
	.menulist-box>li>a{
		color:#9a9a9a;
		text-decoration: none;
		font-size:14px;
		display:block;
		width:100%;
		text-align: left;
		padding-left:30px;
		
	}
	.arrow{
		position:absolute;
		right:30px;
		top:15px;
		font-size:20px;
		color:#9a9a9a;

	}
	 .fade-leave-active {
  		animation: fade-out .8s;
  		
	}
	.fade-enter-active{
	animation: fade-in .8s;
	}
  /*.fade-leave-active{
        transition: right ease 1.4s;
        -webkit-transition: right ease 1.4s;
      }
	  .fade-enter, .fade-leave--active {
        left:400px;
      }*/
	/*@keyframes bounce-in {
	  from {  opacity:0; }
	  to {  opacity:1; }
	}*/
	@keyframes fade-out {
	  0% {  left:0px; }
	  100% {   left:-210px; }
	}
	@keyframes fade-in {
	  0% {  left:-210px; }
	  100% {   left:0px; }
	}

</style>