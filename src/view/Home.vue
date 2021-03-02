<template>
	<div class='home__page'>
		<div
			class='home__page-circle_color_red'
		></div>
		<div
			class='home__page-image'>
			<ImageLoader
				role='img'
				aria-label='photo of nikita blinnikov'
				v-bind:src='require("../assets/img/Nikish.jpg")'
			/>
		</div>

		<div class='home__page-wrapper'>
			<Title class='home__page-title'>
				<h5 slot='subtitle' class='subtitle'>Hey there!</h5>
				<h1 slot='title' class='title'>i'm nikita blinnikov</h1>
			</Title>

			<h5>Frontend developer</h5>
			<p class='home__page-text'>
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
	.home__page {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		color: white;
	}

	.home__page-title {
		align-items: flex-start;
	}

	.home__page-circle_color_red {
		background-color: #fc5356;
		position: absolute;
		width: 400px;
		height: 400px;
		top: -250px;
		left: -150px;
		border-radius: 50%;
	}

	.home__page-image {
		max-width: 450px;
		width: 100%;
		padding: 0 15px;
		height: calc(100vh - 60px);
		border-radius: 5px;
		position: relative;
	}

	.home__page-wrapper {
		max-width: 550px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 15px;
		margin: 0 65px;
	}

	.home__page-text {
		margin: 15px 0 30px 0;
		font-size: 17px;
		line-height: 1.8;
		font-weight: 500;
		letter-spacing: .2px;
	}

	@media(max-width: 1250px) {

		.home__page {
			justify-content: center;
			align-items: center;
		}

		.home__page-image {
			display: none;
		}

		.home__page-circle_color_red { /* <--- ГОВНО НЕПРАВИЛЬНОЕ */
			display: none;
		}

		.home__page-wrapper {
			align-items: center;
		}

		.home__page-text {
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