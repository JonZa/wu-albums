<template>
	<div
		class="album"
		:style="{
			'background-image': 'url(' + album.image + ')'
		}"
	>
		<blurhash class="album__blurhash" :hash="album.blurhash" />
		<img ref="image" :class="imageLoaded ? 'album__image--loaded' : ''" class="album__image" :src="album.image" :alt="album.artist + ' - ' + album.title + ' album cover'" @load="onImgLoad" />
		<div class="album__details">
			<h2>{{ album.id }}. {{ album.artist }} - {{ album.title }}</h2>
			<p>
				{{ album.blurhash }}<br />
				{{ album.artists }}
			</p>
		</div>
	</div>
</template>

<script>
import Blurhash from '@/components/blurhash';
export default {
	components: {
		Blurhash
	},
	data() {
		return {
			imageLoaded: false
		};
	},
	props: {
		album: {
			id: Number,
			artist: String,
			title: String,
			image: String,
			blurhash: String,
			artists: Array
		}
	},
	methods: {
		onImgLoad() {
			this.imageLoaded = true;
		}
	}
};
</script>
