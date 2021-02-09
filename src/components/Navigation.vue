<template>
	<div class='header'>
		<ul class='nav'>
			<li class='nav__item'>
				<router-link data-tooltip='Home' class='nav__link' to="/">
					<i class="nav__icon fa fa-home"></i>
				</router-link>
			</li>
			<li class='nav__item '>
				<router-link data-tooltip='About' class='nav__link' to="/about">
					<i class="nav__icon fa fa-user"></i>
				</router-link>
			</li>
			<li class='nav__item'>
				<router-link data-tooltip='Portfolio' class='nav__link' to="/portfolio">
					<i class="nav__icon fa fa-briefcase"></i>
				</router-link>
			</li>
			<li class='nav__item'>
				<router-link data-tooltip='ContactContactContactContactContactContactContactContact' class='nav__link' to="/contact">
					<i class="nav__icon fa fa-envelope-o"></i>
				</router-link>
			</li>
			<li class='nav__item'>
				<router-link data-tooltip='Blog' class='nav__link' to="/blog">
					<i class="nav__icon fa fa-comments"></i>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
	.header {
		width: 76px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		right: 0;
	}

	.nav {
		width: 76px;
		height: 335px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		border-radius: 4px;

	}

	.nav__item {
		display: flex;
		align-items: center;
		justify-content: center;
		list-style: none;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		transition-duration: 0.5s;
		text-decoration: none;
	}

	.nav__item:hover {
		cursor: pointer;
		background-color: #fc5356;
		transition-duration: 0.5s;
	}

	.nav__link {
		display: flex;
		justify-content: center;
		align-items: center;
		width: inherit;
		height: inherit;
		text-decoration: none;
		position: relative;
	}

	.nav__link::before {
		background-color: #fc5356;
		border-radius: 3px;
		color: white;
		right: 0px;
		position: absolute;
		text-align: center;
	}

	.nav__item:hover .nav__link::before {
		content: attr(data-tooltip);
		padding: 5px 7px;
		right: 65px;
	}

	.nav__icon {
		transition-duration: .4s;
		color: #111;
	}

	.nav__item:hover .nav__icon {
		color: #fff;
		transition-duration: .4s;
	}

</style>