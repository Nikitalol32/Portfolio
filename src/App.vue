<template>
	<div id='app'>
		<Navigation/>

		<router-view/>
	</div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
	name: 'App',
	components: {
		Navigation,
	},
	methods: {
	}
}
</script>

<style>
	@font-face {
		font-family: Quicksand;
		src: url('assets/fonts/Quicksand-Regular.ttf') format("truetype");
	}

	* {
		padding: 0;
		margin: 0;
		font-family: Quicksand, sans-serif;
	}

	#app {
		display: flex;
		flex-direction: row;
		justify-content: center;
		min-height: 100vh;
		background-color:#111;
		position: relative;
	}

	.bg-layer {
		opacity: 0;
		z-index: 3;
		position: absolute;
		background-color: #111;
		transition: opacity .4s ease-in-out;
	}

	@media(max-width: 1250px) {
		.active {
			width: 100%;
			height: 100%;
			opacity: .85;
		}
	}

</style>
