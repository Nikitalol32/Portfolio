<template>
	<a
		v-bind:href = 'button'
		class="button"
	>
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: {
		button:{
			type: String
		}
	}
	
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
		cursor: pointer;
	}

	.button::before {
		width: 100%;
		height: 100%;
		background-color:rgb(252, 83, 86);
		content: '';
		position: absolute;
		transform: translateX(-100%);
		top: 0;
		right: 0;
		z-index: -1;
	}

	.button:hover::before{
		animation: button .5s ease-out forwards;
	}
	@keyframes button {
		0% {
			transform: translateX(-100%);
		}
		50% {
			transform: translateX(0);
		}
		80% {
			transform: translateX(-13px)
		}
		100% {
			transform: translateX(0)
		}
	}
</style>