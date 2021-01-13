<template>
	<div
		class="album"
	>
		<blurhash class="album__blurhash" :hash="album.blurhash" />
		<img ref="image" :style="{ opacity: imageLoaded }" class="album__image" :src="album.image" :alt="album.artist + ' - ' + album.title + ' album cover'" @load="onImageLoad" />
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
			imageLoaded: 0
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
		onImageLoad() {
			this.imageLoaded = 1;
		}
	}
};
</script>
