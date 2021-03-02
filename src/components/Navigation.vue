<template>
	<header
		class='header'
		ref='header'
	>
		<div
			class='bg-layer'
			ref='bg'
			v-on:click = 'rotation'
		></div>
		<div
			class='header__burger header__burger_close'
			v-on:click = 'rotation'
			ref='burger'
		>
			<div class='header__burger-layers'>
				<span class='header__burger-layer header__burger-layer_1'></span>
				<span class='header__burger-layer header__burger-layer_2'></span>
				<span class='header__burger-layer header__burger-layer_3'></span>
			</div>
		</div>
		<ul class='nav nav-hidden' ref='nav'>
			<li class='nav__item'>
				<router-link data-tooltip='Home' class='nav__link' to='/'>
					<i class='nav__icon fa fa-home'></i>
				</router-link>
			</li>
			<li class='nav__item'>
				<router-link data-tooltip='About' class='nav__link' to='/about'>
					<i class='nav__icon fa fa-user'></i>
				</router-link>
			</li>
			<li class='nav__item'>
				<router-link data-tooltip='Portfolio' class='nav__link' to='/portfolio'>
					<i class='nav__icon fa fa-briefcase'></i>
				</router-link>
			</li>
			<li class='nav__item'>
				<router-link data-tooltip='Contact' class='nav__link' to='/contact'>
					<i class='nav__icon fa fa-envelope-o'></i>
				</router-link>
			</li>
		</ul>
	</header>
</template>

<script>

export default {
	data: () => {
		return {
		}
	},
	mounted: function () {
		const
			header = this.$refs.header,
			bgLayer = this.$refs.bg;

		header.before(bgLayer);
		this.$root.$on('openModal', this.onOpenModal);
		this.$root.$on('closeModal', this.onCloseModal);
	},
	beforeDestroy: function () {

	},
	methods: {
		onOpenModal: function(){
			const
				header = this.$refs.header;

			header.classList.add('disable');
			console.log(1);
		},
		onCloseModal: function() {
			const
				header = this.$refs.header;

			header.classList.remove('disable');
		},
		rotation: function() {
			const
				burger = this.$refs.burger,
				nav = this.$refs.nav,
				bgLayer = this.$refs.bg;

			bgLayer.classList.toggle('active');

			nav.classList.toggle('nav-hidden');

			if(burger.classList.contains('header__burger_open')) {
				burger.classList.add('header__burger_close');
				burger.classList.remove('header__burger_open');

			} else if(burger.classList.contains('header__burger_close')) {
				burger.classList.remove('header__burger_close');
				burger.classList.add('header__burger_open');

			}
		}
	}
}
</script>

<style scoped>

	.header {
		width: 76px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 4;
		transition-duration: .5s;
	}

	.header.disable {
		display: none;
	}

	.header__burger {
		display: none;
		width: 50px;
		height: 50px;
		position: absolute;
		top: 15px;
		right: 15px;
		cursor: pointer;
		overflow: hidden;
	}

	.header__burger-layers {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: inherit;
		height: inherit;
	}

	.header__burger-layer {
		background-color: #fff;
		width: 35px;
		height: 4px;
		transition-duration: .5s;
		position: absolute;
		border-radius: 3px;
	}

	.header__burger_close
	.header__burger-layer_1 {
		top: 15px;
	}

	.header__burger_close
	.header__burger-layer_2 {
		top: 25px;
	}

	.header__burger_close
	.header__burger-layer_3 {
		top: 35px;
	}

	.header__burger_open
	.header__burger-layer_1 {
		top: 23px;
		transform: rotate(-45deg);
	}

	.header__burger_open
	.header__burger-layer_2 {
		transform: translateX(50px);
	}

	.header__burger_open
	.header__burger-layer_3 {
		top: 23px;
		transform: rotate(45deg);
	}

	.nav {
		width: 76px;
		height: 275px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		border-radius: 4px;
		transition-duration: .4s;
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

	@media(max-width: 1250px) {

		.header__burger {
			display: block;
		}

		.nav-hidden {
			position: absolute;
			transform: translateX(100px);
		}

	}
</style>