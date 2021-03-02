<template>
	<div class='portfolio-item' ref='portfolioItem'>
		<div class='portfolio-item__img-wrapper'>
			<button
				class='portfolio-item__view'
				ref='portfolioBtn'
				v-on:click = 'onPortfolioBtn'
			>
				View
			</button>
			<ImageLoader
				:src='portfolioItem.img'
				alt='portfolio-image'
				ref='portfolioImg'
			/>
		</div>
		<Title class='portfolio-item__title'>
			<h2 slot='title' class='title'>{{portfolioItem.title}}</h2>
			<h5 slot='subtitle' class='subtitle'>{{portfolioItem.subtitle}}</h5>
		</Title>
	</div>
</template>

<script>
import Title from '@/components/Title'
import ImageLoader from '@/components/ImageLoader'

export default {
	data() {
		return {
			loading: true
		}
	},
	props: {
		portfolioItem: Object
	},
	mounted: function() {
	},
	beforeDestroy: function() {
		// this.$root.$off('openModal', this)
	},
	components: {
		Title,
		ImageLoader
	},
	methods: {
		onPortfolioBtn() {
			const
				portfolioImg = this.$refs.portfolioImg;

			this.$root.$emit('openModal', portfolioImg.src);
		}
	}
}
</script>

<style scoped>

	.loader {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 500px;
		width: 100%;
		height: 100%
	}

	.portfolio-item {
		display: flex;
		flex-direction: column;
		margin-bottom: 55px;
		max-width: 300px;
		width: 100%;
		height: auto;
	}
	.portfolio-item__img-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		max-width: 300px;
		width: 100%;
	}

	.portfolio-item__img-wrapper::before {
		content: '';
		opacity: 0;
		position: absolute;
		transition: opacity .4s ease;
	}

	.portfolio-item__view {
		display: none;
		position: absolute;
		padding: 10px 25px;
		background-color: transparent;
		border: 2px solid #fff;
		border-radius: 5px;
		color: #fff;
		transition: background-color .2s ease;
		font-weight: 600;
		letter-spacing: 2px;
		cursor: pointer;
	}

	.portfolio-item__view:hover {
		background-color: #fff;
		color: #111;
	}

	.portfolio-item__img-wrapper:hover::before {
		background: linear-gradient(0deg, rgba(0,0,0,0.3701855742296919) 0%, rgba(254,254,254,0) 100%);
		opacity: 1;
		width: 100%;
		height: 100%;
	}

	.portfolio-item__img-wrapper:hover .portfolio-item__view {
		display: flex;
	}

	.portfolio-item__title {
		flex-direction: column-reverse;
		width: 100%;
		margin-top: 0;
		align-items: flex-start;
	}

	.portfolio-item__title > .title {
		text-transform: unset;
		font-weight: 800;
		font-size: 18px;
	}

	.portfolio-item__title > .subtitle {
		font-size: 12px;
	}
</style>
