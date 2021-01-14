<template>
	<div class="artists">
		<form class="artists__filter" @submit="submitForm">
			<input type="text" v-model="artistName" ref="filter" @focus="focus" />
			<div class="artists__dropdown" v-if="artistName.length > 1 && filterFocus">
				<a v-for="artist in filteredArtists" :key="artist.id" @click="updateSelectedArtist(artist)"> {{ artist.name }} </a>
			</div>
		</form>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Album from '@/components/album';
export default {
	data() {
		return {
			artistName: '',
			filterFocus: false
		};
	},
	components: {
		Album
	},
	computed: {
		...mapState(['wuData']),
		filteredArtists: function() {
			var artistName = this.artistName;
			return this.wuData.artists.filter(function(artist) {
				return artist.name.toLowerCase().indexOf(artistName.toLowerCase()) > -1;
			});
		}
	},
	methods: {
		focus() {
			return this.filterFocus = true;
		},
		// blur() {
		// 	return this.filterFocus = false;
		// },
		submitForm(event) {
			event.preventDefault();
			var artistName = this.artistName;
			var selectedArtist = this.wuData.artists.filter(function(artist) {
				return artist.name.toLowerCase() === artistName.toLowerCase();
			});
			if (selectedArtist.length) {
				this.$store.commit('updateSelectedArtist', selectedArtist[0].id);
			}
		},
		updateSelectedArtist(artist) {
			this.artistName = artist.name;
			this.$store.commit('updateSelectedArtist', artist.id);
			this.filterFocus = false;
		}
	}
};
</script>
