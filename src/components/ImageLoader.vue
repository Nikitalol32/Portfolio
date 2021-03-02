<template>
	<div class='image-loader'>
		<div
			class="loader"
			v-if='loading'>
			<Loader
			/>
		</div>
		<img
			v-else-if='!loading'
			v-bind:src = 'src'
			alt=""
			class='image-loader__image'
		>
	</div>
</template>

<script>
import Loader from '@/components/Loader'

export default {
	data() {
		return {
			loading: true
		}
	},
	mounted: function() {
		let
			imageLoaded = new Image();

		imageLoaded.onload = () => {
			this.loading = false;
		}

		imageLoaded.src = this.src;
        console.log('file: Image.vue ~ line 35 ~ this.src', this.src);
		
	},
	props: {
		src: {
			type: String
		}
	},
	components: {
		Loader
	}
}
</script>

<style scoped>
	.loader {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 480px;
		width: 100%;
		height: 100%
	}

	.image-loader {
		height: 100%;
	}

	.image-loader__image{
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>