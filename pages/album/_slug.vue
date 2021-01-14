<template>
	<div class="content">
		<h1>{{ album.artist }} - {{ album.title }}</h1>
		<ul>
			<li v-for="artist in album.artists" :key="artist" v-text="artists.filter(el => el.id === artist)[0].name" />
		</ul>
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
