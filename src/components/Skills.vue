<template>
	<div class='skill'
		:class='skill.title'>
		<span class='skill__title'>{{skill.title}}</span>
		<span
			class='skill__percent'
		>
			{{skill.precent}}
		</span>
	</div>
</template>

<script>
export default {
	props: {
		skill: {
			type: Object
		}
	}
}
</script>
	
<style scoped>
	.skill {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		max-width: 800px;
		width: 90%;
		height: 35px;
		background-color: #fff;
		margin-bottom: 15px;
		cursor: default;
		border-radius: 5px;
		overflow: hidden;
		position: relative;
		z-index: 1;
	}

	.skill::before {
		z-index: 2;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: -100%;
		background: linear-gradient(90deg, rgba(231,171,171,1) 0%, rgba(252,83,86,1) 100%);
		transition: transform 1.5s ease-in-out;
	}

	.html.color.skill::before{
		transition-delay: .2s;
		transform: translateX(85%);
	}
	.pug.color.skill::before{
		transition-delay: .4s;
		transform: translateX(70%);
	}
	.css.color.skill::before{
		transition-delay: .6s;
		transform: translateX(85%);
	}
	.styl.color.skill::before{
		transition-delay: .8s;
		transform: translateX(70%);
	}
	.vue.color.skill::before{
		transition-delay: 1s;
		transform: translateX(50%);
	}


	.skill__title {
		display: flex;
		align-items: center;
		margin-left: 25px;
		text-transform: uppercase;
		max-width: 85px;
		width: 100%;
		height: 100%;
		z-index: 3;
		font-size: 16px;
		font-weight: 900;
		letter-spacing: 1.5px;
	}

	.skill__percent {
		z-index: 3;
		color: #111;
		margin-right: 15px;
	}

	@media (max-width: 1250px) {
		.skill {
			width: 100%;
		}
		
	}
</style>