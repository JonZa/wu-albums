<template>
	<div class="content">
		<h2><small>{{ album.rank }} .</small> {{ album.artist }} - {{ album.title }}</h2>
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
