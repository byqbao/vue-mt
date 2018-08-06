<template>
	<div class="start-page">
		<img class="start-mt" src="../assets/mt_01.jpg" alt="美团">
		<address class="start-addr">
			<p>计算机服务</p>
			<p class="start-addr-com">&copy;metuan.com</p>
		</address>
	</div>
</template>

<script>
	export default {
	  	name: 'Start',
	  	data () {
	    	return {
	    	}
	  	}
	}
</script>

<style scoped>
	
	.start-mt {
		width: 37.9%;
		display: block;
		margin: 175px auto 0;
	}
	.start-addr {
		position: absolute;
		bottom: 18px;
		left: 0;
		width: 100%;
		line-height: 14px;
		text-align: center;
		font-size: 12px;
		color: #bcbcbc;
		font-style: normal;
	}
	.start-addr p {
		margin: 0;
	}
	.start-addr-com {
		color: #cacaca;
	}
</style>