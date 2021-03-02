<template>
	<div class='portfolio-page' ref='pg'>
		<div
			class="overview"
			ref='overview'
			v-on:click = 'onCloseModal'
		>
			<div
				class='overview__close'
				v-on:click = 'onCloseModal'
			>
				<div class='overview__close-stick overview__close-stick_1'></div>
				<div class='overview__close-stick overview__close-stick_2'></div>
			</div>
			<img src='' class="overview__img" alt='image' ref='overviewImg'>
		</div>
		<Title class='portfolio-page__titles'>
			<h2 slot='title' class='title'>Portfolio</h2>
			<h5 slot='subtitle' class='subtitle'>See My Works</h5>
		</Title>
		<div class='portfolio-page__content'>
			{{ w.console.log(w.performance.now()) }}
			<PortfolioItem
				v-for= '(portfolioItem, i) in portfolioItems'
				:key= 'i'
				v-bind:portfolioItem = 'portfolioItem'
			/>
			{{ w.console.log(w.performance.now()) }}

		</div>
	</div>
</template>

<script>
import Title from '@/components/Title'
import PortfolioItem from '@/components/Portfolio-item'
import scrollLock from 'scroll-lock';

export default {
	data() {
		return {
			w: window,
			portfolioItems: [
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title1', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title2', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title3', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title4', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title5', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title6', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title7', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title8', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title9', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title1', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title2', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title3', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title4', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title5', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title6', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title7', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title8', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title9', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title5', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title6', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title7', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title8', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title9', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title5', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title6', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title7', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title8', subtitle: 'SubTitle'},
				{img: 'https://fakeimg.pl/350x450/', title: 'Title Title9', subtitle: 'SubTitle'}
			]
		}
	},
	mounted: function() {
		const 
			onOpenModal = (portfolioImg) => {
				const
					overview = this.$refs.overview,
					overviewImg = this.$refs.overviewImg;

				scrollLock.disablePageScroll();
				
				console.log('over',overviewImg,overview)

				overviewImg.src = portfolioImg;

				overview.classList.add('view');

			}
		this.$root.$on('openModal', onOpenModal)
	},
	components: {
		Title,
		PortfolioItem
	},
	methods: {
		onCloseModal() {
			const
				overview = this.$refs.overview;

			scrollLock.enablePageScroll();
			
			overview.classList.remove('view');
			this.$root.$emit('closeModal')
		}
	}
}
</script>

<style scoped>
	.portfolio-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 1250px;
		width: 100%;
	}

	.overview {
		background: rgba(0,0,0,0.49343487394957986);
		display: flex;
		align-items: center;
		opacity: 0;
		z-index: 0;
		margin: 0 auto;
		position: fixed;
		overflow: hidden;
	}

	.overview__close {
		display: flex;
		justify-content: center;
		align-content: center;
		width: 35px;
		height: 35px;
		position: absolute;
		top: 15px;
		right: 15px;
		cursor: pointer;
		overflow: hidden;

	}

	.overview__close-stick {
		background-color: #fff;
		width: 35px;
		height: 4px;
		position: absolute;
		border-radius: 3px;
		top: 16px;
		left: 1;

	}

	.overview__close-stick_1 {
		transform: rotate(-45deg);
	}

	.overview__close-stick_2 {
		transform: rotate(45deg);
	}

	.overview.view {
		width: 100%;
		height: 100%;
		opacity: 1;
		top: 0;
		left: 0;
		z-index: 3;
		overflow-y: unset;
	}

	.overview__img {
		object-fit: cover;
		margin: 0 auto;
		opacity: 0;
		transition: opacity .7s ease;
	}

	.overview.view > .overview__img {
		opacity: 1;
	}

	.portfolio-page__titles {
		margin-top: 25px;
	}

	.portfolio-page__content {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 30px;
	}
</style>