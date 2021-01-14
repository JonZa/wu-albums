<template>
	<div class="album__content" id="content">
		<h2>
			<small>Album:</small> {{ album.artist }} -
			<span class="album__title">{{ album.title }}</span>
		</h2>
		<div class="album__artists">
			<h3>Artists:</h3>
			<ul class="album__artists-list">
				<li class="album__artist" v-for="artist in album.artists" :key="artist" v-text="artists.filter(el => el.id === artist)[0].name" />
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		artists() {
			return this.$store.state.wuData.artists;
		},
		albums() {
			return this.$store.state.wuData.albums;
		},
		album() {
			return this.albums.find(el => el.title.toLowerCase() === this.slug);
		}
	},
	data() {
		return {
			slug: this.$route.params.slug
		};
	}
};
</script>
