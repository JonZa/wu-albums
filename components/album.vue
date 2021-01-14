<template>
	<nuxt-link :to="'/album/' + album.title.toLowerCase() + '#content'" class="album" :class="!selectedArtistOnAlbum ? 'album--filtered' : ''" :title="album.artist + ' - ' + album.title">
		<blurhash class="album__blurhash" :hash="album.blurhash" />
		<img :style="{ opacity: imageLoaded }" class="album__image" :src="album.image" :alt="album.artist + ' - ' + album.title + ' album cover'" @load="onImageLoad" />
	</nuxt-link>
</template>

<script>
import Blurhash from '@/components/blurhash';
export default {
	components: {
		Blurhash
	},
	computed: {
		selectedArtistOnAlbum() {
			return this.selectedArtistId === null || this.album.artists.indexOf(this.selectedArtistId) > -1;
		}
	},
	data() {
		return {
			imageLoaded: 0
		};
	},
	props: {
		album: {
			id: Number,
			rank: Number,
			artist: String,
			title: String,
			image: String,
			blurhash: String,
			artists: Array
		},
		selectedArtistId: Number
	},
	methods: {
		onImageLoad() {
			this.imageLoaded = 1;
		}
	}
};
</script>
