<template>
	<div class='home__content'>
		<div
			class='home__content_circle-red'
		></div>
		<div
			class='home__content-image'>
			<ImageLoader
				role='img'
				aria-label='photo of nikita blinnikov'
				v-bind:src='require("../assets/img/Nikish.jpg")'
			/>
		</div>

		<div class='home__content-wrapper'>
			<Title class='home__title'>
				<h5 slot='subtitle' class='subtitle'>Hey there!</h5>
				<h1 slot='title' class='title'>i'm nikita blinnikov</h1>
			</Title>

			<h5>Frontend developer</h5>
			<p class='home__content-text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cupiditate ut molestias reprehenderit ipsa amet nobis. Est, inventore dolorem mollitia voluptas quo sit quibusdam incidunt tempora, maxime, labore aspernatur voluptatibus!
			</p>
		
			<Button
				v-bind:button = '"/about"'
			>
				About Me
			</Button>
		</div>
	</div>
</template>

<script>
import Button from '@/components/Button'
import Title from '@/components/Title'
import ImageLoader from '@/components/ImageLoader'

export default {
	data() {
		return {
			loading: true
		}
	},
	mounted: function() {
	},
	components: {
		Button,
		Title,
		ImageLoader
	}
}
</script>

<style scoped>
	.home__content {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		color: white;
	}

	.home__title {
		align-items: flex-start;
	}

	.home__content_circle-red {
		background-color: #fc5356;
		position: absolute;
		width: 400px;
		height: 400px;
		top: -250px;
		left: -150px;
		border-radius: 50%;
	}

	.home__content-image {
		max-width: 450px;
		width: 100%;
		padding: 0 15px;
		height: calc(100vh - 60px);
		border-radius: 5px;
		position: relative;
	}

	.home__content-wrapper {
		max-width: 550px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 15px;
		margin: 0 65px;
	}

	.home__content-text {
		margin: 15px 0 30px 0;
		font-size: 17px;
		line-height: 1.8;
		font-weight: 500;
		letter-spacing: .2px;
	}

	@media(max-width: 1250px) {
		.home-page {
			
		}

		.home__content {
			justify-content: center;
			align-items: center;
		}

		.home__content-image {
			display: none;
		}

		.home__content_circle-red {
			display: none;
		}

		.home__content-wrapper {
			align-items: center;
		}

		.home__content-text {
			text-align: center;
		}
		
		.titles {
			align-items: center;
		}

		.title {
			text-align: center;
		}

	}
</style>