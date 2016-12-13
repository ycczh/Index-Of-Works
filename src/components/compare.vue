<template>
	<div class="kaifa">
		正在开发中...
	</div>
</template>

<style>
	.kaifa{
		padding:30px;
	}
</style>

<script>
export default{
	name:'kaifa',
	created(){
		this.$store.dispatch('fetchCinemaLists',10,1)
	}
}
</script>
