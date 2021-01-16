<template>
	<div class="artists">
		<form class="artists__filter" ref="form" @submit.prevent>
			<label for="artists__input" class="artists__label">Filter by artist:</label>
			<input id="artists__input" type="text" class="artists__input" v-model="artistName" ref="filter" @focus="focus(true)" @blur="focus(false)" autocomplete="off" />
			<button type="button" @click="clearArtist" class="artists__clear" :class="artistName.length > 1 ? 'artists__clear--active' : ''">Clear</button>
			<div class="artists__dropdown" v-if="artistName.length > 1 && filterFocus">
				<button class="artists__dropdown-artist" type="button" v-for="artist in filteredArtists" :key="artist.id" @mousedown="updateSelectedArtist(artist)">{{ artist.name }}</button>
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
	watch: {
		artistName: function(newValue, oldValue) {
			const selectedArtist = this.wuData.artists.filter(function(artist) {
				return artist.name.toLowerCase() === newValue.toLowerCase();
			});
			console.log(selectedArtist);
			if (selectedArtist.length === 1) {
				this.$store.commit('updateSelectedArtist', selectedArtist[0].id);
			} else {
				this.$store.commit('updateSelectedArtist', null);
			}
		}
	},
	components: {
		Album
	},
	computed: {
		...mapState(['wuData']),
		filteredArtists: function() {
			const artistName = this.artistName;
			return this.wuData.artists.filter(function(artist) {
				return artist.name.toLowerCase().indexOf(artistName.toLowerCase()) > -1;
			});
		}
	},
	methods: {
		focus(value) {
			return (this.filterFocus = value);
		},
		clearArtist() {
			this.artistName = '';
		},
		updateSelectedArtist(artist) {
			this.artistName = artist.name;
			this.$store.commit('updateSelectedArtist', artist.id);
			this.focus(false);
		}
	}
};
</script>
