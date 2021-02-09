<template>
	<a href='#' class="button">
		<slot></slot>
	</a>
</template>

<script>
export default {
	
}
</script>

<style scoped>
	.button {
		text-decoration: none;
		padding: 14px 23px;
		border: 2px solid rgb(252, 83, 86);
		border-radius: 3px;
		background-color: transparent;
		font-size: 10px;
		color: #fff;
		overflow: hidden;
		position: relative;
		letter-spacing: 5px;
		text-transform: uppercase;
		font-weight: 700;
		z-index: 1;
	}

	.button::before {
		width: 100%;
		height: 100%;
		background-color:rgb(252, 83, 86);
		content: '';
		position: absolute;
		/* left: -100%; */
		transform: translateX(-100%);
		top: 0;
		right: 0;
		z-index: -1;
		transition-timing-function: ease;
		transition-duration: .5s
	}

	.button:hover:before {
		transform: translateX(0);
		/* left: 0; */
		transition-duration: .5s
	}
</style>