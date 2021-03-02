<template>
	<div class='experience__item'>
		<div class='experience__icon' :class = 'exp.icon'></div>
		<span class='experience__year'>{{exp.year}}</span>
		<h3 class='experience__title'>{{exp.title}}</h3>
		<p class='experience__text'>{{exp.text}}</p>
	</div>
</template>

<script>
export default {
	props: {
		exp: {
			type: Object
		}
	}
}
</script>

<style scoped>
	.experience__item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 25px;
		border: 1px solid silver ;
		margin-bottom: 30px;
		border-radius: 6px;
		flex-basis: 20%;
		min-width: 280px;
	}

	.experience__icon {
		width: 40px;
		height: 40px;
		background-color: #fc5356;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		font-size: 24px;
		margin-bottom: 15px;
	}

	.experience__year {
		color: crimson;
		border-radius: 15px;
		padding: 5px 10px;
		background-color: rgba(252,83,86,.07);
		letter-spacing: 2.5px;
		font-weight: 800;
	}

	.experience__title {
		margin: 15px 0;
		letter-spacing: 2.5px;
	}

	.experience__text {
		font-size: 18px;
		letter-spacing: 1px;
	}

	@media (max-width: 875px) {
		.experience__item {
			min-width: 90%;
			flex-basis: unset;
			width: 100%;
		}
	}


	@media (max-width: 465px) {
		.experience__item {
			width: unset;
			min-width: 250px;
		}

		.experience__text {
			width: 100%;
		}
	}
</style>