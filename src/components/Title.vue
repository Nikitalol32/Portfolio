<template>
	<div class='titles'>
		<slot name = 'subtitle'></slot>
		<slot name = 'title'></slot>
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
		align-items: center;
	}

	.subtitle {
		font-weight: 500;
		background: #fc5356;
		padding: 5px 15px;
		display: inline-block;
		font-size: 16px;
		color: #fff;
		border-radius: 4px;
	}

	.title {
		text-transform: uppercase;
		margin: 10px 0;
		font-weight: 800;
		font-size: 48px;
		letter-spacing: 3px;
		color: #fff;
	}
</style>