<template>
	<div class='home__content'>
		<div class='home__content-image'></div>

		<div class='home__content-wrapper'>
			<Title
				v-bind:title = '"Я Никита Блинников"'
				v-bind:subtitle = '"Эй там!"'
			/>
			<h5>text/text text</h5>
			<p class='home__content-text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cupiditate ut molestias reprehenderit ipsa amet nobis. Est, inventore dolorem mollitia voluptas quo sit quibusdam incidunt tempora, maxime, labore aspernatur voluptatibus!
			</p>
			<Button>
				About Me
			</Button>
		</div>
	</div>
</template>

<script>
import Button from '@/components/Button'
import Title from '@/components/Title'

export default {
	components: {
		Button,
		Title
	}
}
</script>

<style scoped>
	.home__content {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		height: 100vh;
		color: white;
	}

	.home__content-image {
		max-width: 350px;
		width: 100%;
		padding: 0 15px;
		height: calc(100vh - 60px);
		background-image: url('https://sun9-74.userapi.com/impg/Y51DbjQqy55fKwX6TWxvn9i-Zqt0IRESVVF9AQ/SQFgV9sUKzM.jpg?size=1440x958&quality=96&proxy=1&sign=7edd8a731bafb55967ee475ff20867a2&type=album');
		background-repeat: no-repeat;
		background-position: top;
		background-size: cover;
		top: 30px;
		left: 30px;
		border-radius: 5px;
	}

	.home__content-wrapper {
		max-width: 550px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 15px;
		margin: 0 auto;
	}

	.home__content-text {
		margin: 15px 0 30px 0;
		font-size: 17px;
		line-height: 1.8;
		font-weight: 500;
		letter-spacing: .2px;
	}
</style>