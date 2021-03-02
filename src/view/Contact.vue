<template>
	<div class='contact-page'>
		<Title>
			<h5 slot='subtitle' class='contact-page__subtitle subtitle'>Get In Touch</h5>
			<h1 slot='title' class='contact-page__title title'>contact</h1>
		</Title>
		<div class='contacts'>
			<div class='contacts__item'>
				<h4 class='contacts__item_type_header'>Email</h4>
				<span class='contacts__item_type_text'>nikita320@list.ru</span>
			</div>
			<div class='contacts__item'>
				<h4 class='contacts__item_type_header'>Address</h4>
				<span class='contacts__item_type_text'>Balashiha-city Pavlino-district</span>
			</div>
			<div class='contacts__item'>
				<h4 class='contacts__item_type_header'>Phone</h4>
				<span class='contacts__item_type_text'>89273273365</span>
			</div>
			<div class='contacts__item'>
				<h4 class='contacts__item_type_header'>Follow Me On</h4>
				<ul class='social'>
					<a href="https://vk.com/holyn0" class="social__link fa fa-vk">
					</a>
					<a href="https://www.instagram.com/holy_nikish" class="social__link fa fa-instagram">
					</a>
					<a href="https://github.com/Nikitalol32" class="social__link fa fa-github">
					</a>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Title from '@/components/Title'
export default {
	components: {
		Title
	}
}
</script>

<style scoped>

	.contact-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
	}
	.contact-page__subtitle {
		letter-spacing: 3px;
	}

	.contact-page__title {
		letter-spacing: 11px;
	}

	.contacts {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		max-width: 1050px;
		width: 100%;
		flex-wrap: wrap;
		height: 300px;
	}

	.contacts__item {
		display: flex;
		flex-direction: column;
		max-width: 250px;
		color: #fff;
		height: 70px;
	}

	.contacts__item_type_text {
		margin: 20px 0 0 0;
	}

	.social {
		display: flex;
		flex-direction: row;
	}

	.social__link {
		display: flex;
		background-color: #fc5356;
		font-size: 25px;
		text-decoration: none;
		color: #fff;
		border-radius: 50%;
		width: 45px;
		height: 45px;
		margin: 10px 10px 0 0;
	}

	.fa-vk::before {
		margin: auto;
	}

	.fa-instagram::before {
		margin: auto;
	}

	.fa-github::before {
		margin: auto;
	}

	@media (max-width: 749px) {
		.contacts {
			flex-direction: column;
			align-items: unset;
			max-width: 450px;
			width: 90%;
			padding: 15px
		}

		.contacts__item {
			height: unset;
		}

		.contacts__item_type_text {
			margin: 0;
		}
	}

</style>