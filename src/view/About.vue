<template>
	<div
		class='about-page'
		ref='about'
	>
		<Title>
			<h5 slot='subtitle' class='subtitle'>See my Resume</h5>
			<h1 slot='title' class='title'>about me</h1>
		</Title>
		<div
			class='about-me'
			ref='aboutMe'
		>
			<img src='../assets/img/Nikish.jpg' class='about-me__avatar'>
			<div class='about-me__info'>
				<p class='about-me__bio'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero non ex quasi illum aut modi assumenda dicta adipisci tenetur facilis, hic magni cupiditate eligendi laboriosam consequuntur illo eius architecto? Sequi?</p>
				<ul class='about-me__full-info'>
					<li class='full-info__item'>Birthday : 26 November 2000</li>
					<li class='full-info__item'>Age : 20</li>
					<li class='full-info__item'>Profession : Frontend developer</li>
					<li class='full-info__item'>Country : Russia</li>
					<li class='full-info__item'>Address : Balashiha, Russia</li>
					<li class='full-info__item'>Nationality : Russian</li>
					<li class='full-info__item'>E-mail : nikita3210@list.ru</li>
					<li class='full-info__item'>Phone : 8(977)327-**-**</li>
					<li class='full-info__item'>Skype : i don't have skype</li>
					<li class='full-info__item'>Language : Russian, English</li>
				</ul>
				<Button>
					Download CV
				</Button>
			</div>
		</div>
		<div
			class='my-skills'
			ref='skills'
		>
			<h2 class='my-skills__title'>Skills</h2>
			<Skills
				v-for = 'skill in skills'
				:key = 'skill.item'
				v-bind:skill = 'skill'
				:data-tooltip = 'skill.precent'
				ref='skill'
			/>
		</div>
		<div class='experience'>
			<h2 class='experience__title'>Experience</h2>
			<div class='experience__items'>
				<Experience
					v-for = 'exp in experience'
					:key = 'exp.item'
					v-bind:exp = 'exp'
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Title from '@/components/Title'
import Button from '@/components/Button'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

export default {
	data() {
		return {
			skills: {
				html: {
					title: 'html',
					precent: '85%'
				},
				pug: {
					title: 'pug',
					precent: '70%'
				},
				css: {
					title: 'css',
					precent: '85%'
				},
				styl: {
					title: 'styl',
					precent: '70%'
				},
				vue: {
					title: 'vue',
					precent: '50%'
				}
			},
			experience: [
				{
					icon: 'fa fa-briefcase',
					year: '2020 - Presenet',
					title: 'Title',
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero non ex quasi illum aut modi assumenda dicta adipisci tenetur facilis, hic magni cupiditate eligendi laboriosam consequuntur illo eius architecto? Sequi?'
				},
				{
					icon: 'fa fa-briefcase',
					year: '2020 - Presenet',
					title: 'Title',
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero non ex quasi illum aut modi assumenda dicta adipisci tenetur facilis, hic magni cupiditate eligendi laboriosam consequuntur illo eius architecto? Sequi?'
				},
				{
					icon: 'fa fa-briefcase',
					year: '2020 - Presenet',
					title: 'Title',
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero non ex quasi illum aut modi assumenda dicta adipisci tenetur facilis, hic magni cupiditate eligendi laboriosam consequuntur illo eius architecto? Sequi?'
				},
				{
					icon: 'fa fa-graduation-cap',
					year: '2020 - Presenet',
					title: 'Title',
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero non ex quasi illum aut modi assumenda dicta adipisci tenetur facilis, hic magni cupiditate eligendi laboriosam consequuntur illo eius architecto? Sequi?'
				},
				{
					icon: 'fa fa-graduation-cap',
					year: '2020 - Presenet',
					title: 'Title',
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero non ex quasi illum aut modi assumenda dicta adipisci tenetur facilis, hic magni cupiditate eligendi laboriosam consequuntur illo eius architecto? Sequi?'
				},
				{
					icon: 'fa fa-graduation-cap',
					year: '2020 - Presenet',
					title: 'Title',
					text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero non ex quasi illum aut modi assumenda dicta adipisci tenetur facilis, hic magni cupiditate eligendi laboriosam consequuntur illo eius architecto? Sequi?'
				}
			]
		}
	},
	mounted: function() {
		const
			// about = this.$refs.about,
			skills = this.$refs.skills,
			skillItems = this.$refs.skill,
			options = {
				root: null,
				rootMargin: '0px',
				threshold: 0.3
			},
			// eslint-disable-next-line no-unused-vars
			callback = function(entries, observer) {
				entries.forEach(entry => {
					console.log(entry);
					if(entry.isIntersecting) {
						skillItems.forEach( (skill) => {
							skill.$el.classList.add('color');
						});
					}
				});
			},
			// eslint-disable-next-line no-unused-vars
			observer = new IntersectionObserver(callback, options),
			// eslint-disable-next-line no-unused-vars
			target = skills;

			observer.observe(target);
		

	},
	components: {
		Title,
		Button,
		Skills,
		Experience
	}
}
</script>

<style scoped>
	.about-page {
		color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1250px;
		width: 100%;
	}

	.about-me {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-bottom: 50px;
	}

	.about-me__info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		padding: 35px 0 0 50px
	}

	.about-me__avatar {
		max-width: 400px;
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.about-me__bio {
		font-size: 17px;
		line-height: 1.8;
		max-width: 480px;
		margin-bottom: 25px;
		text-align: justify;
	}

	.about-me__full-info {
		display: flex;
		width: 100%;
		margin-bottom: 35px;
		flex-direction: column;
		justify-content: space-between;
		flex-wrap: wrap;
		height: 200px;
		
	}

	.full-info__item {
		list-style: none;
		margin: .5rem .5rem .5rem 0
	}

	.my-skills {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 50px;
	}

	.my-skills__title {
		margin-bottom: 50px;
		letter-spacing: 4px;
		font-size: 24px;
	}

	.experience {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.experience__title {
		margin-bottom: 50px;
		letter-spacing: 4px;
		font-size: 24px;
	}

	.experience__items {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		width: 90%;
	}
	
	@media (max-width: 1250px) {
		.about-page {
			width: 90%;
		}

		.about-me__avatar {
			max-width: 100%;
		}

		.about-me {
			flex-direction: column;
		}

		.about-me__info {
			width: unset;
			padding-left: 0;
		}

	}

	@media (max-width: 875px) {

		.about-me__full-info {
			flex-wrap: nowrap;
			width: unset;
			height: auto;
		}

		.experience__items {
			width: 100%;
		}

	}
</style>