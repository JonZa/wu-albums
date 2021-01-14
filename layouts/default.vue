<template>
	<div class="container">
		<h1>
			<small>Ranked:</small>
			Top 10 Wu-Tang Clan Albums
		</h1>
		<a v-for="artist in wuData.artists" :key="artist.id" @click="updateSelectedArtist(artist.id)">{{ artist.name }}</a
		><br />
		<a @click="updateSelectedArtist(null)">clear</a><br />
		{{ selectedArtistId }}
		<div class="albums">
			<Album v-for="album in wuData.albums" :key="album.id" :album="album" :selectedArtistId="selectedArtistId" />
		</div>
		<Nuxt />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Album from '@/components/album.vue';

export default {
	components: {
		Album
	},
	methods: {
		updateSelectedArtist(id) {
			this.$store.commit('updateSelectedArtist', id);
		}
	},
	computed: {
		...mapState(['wuData', 'selectedArtistId'])
	}
};
</script>
