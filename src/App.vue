<template>
	<div class='home-page' id='app'>
		<Navigation/>
		<router-view/>
	</div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
	name: 'App',
	components: {
		Navigation
	}
}
</script>

<style>
@font-face {
	font-family: Quicksand;
	src: url('assets/fonts/Quicksand-VariableFont.ttf') format("truetype");
}

* {
	padding: 0;
	margin: 0;
	font-family: Quicksand, sans-serif;
}

.home-page {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	height: 100vh;
	background-color:#111;
}
</style>
