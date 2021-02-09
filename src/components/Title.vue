<template>
	<div class='titles'>
		<h5 class='subtitle'>{{ subtitle }}</h5>
		<h1 class='title'>{{ title }}</h1>
	</div>
</template>

<script>
export default {
	props: {
		subtitle: {
			type: String
		},

		title: {
			type: String
		}
	}
}
</script>

<style scoped>
	.titles {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.subtitle {
		font-weight: 500;
		background: #fc5356;
		padding: 5px 15px;
		display: inline-block;
		font-size: 14px;
		color: #fff;
		border-radius: 4px;
	}

	.title {
		text-transform: uppercase;
		margin: 10px 0;
		font-weight: 800;
		font-size: 37px;
		letter-spacing: 3px;
		
	}
</style>