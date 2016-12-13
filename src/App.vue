<template>
  <div class="main">
      <div class="application-view">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>

	export default{
		name:'index',
		created(){
			this.$store.dispatch('fetchBillboards')
		}
	}
</script>




