<template>
	<div class="artists">
		<form class="artists__filter" @submit="submitForm" ref="form">
			<label for="artists__input" class="artists__label">Filter by artist:</label>
			<input id="artists__input" type="text" class="artists__input" v-model="artistName" ref="filter" @focus="focus(true)" @blur="focus(false)" />
			<div class="artists__dropdown" v-if="artistName.length > 1 && filterFocus">
				<a v-for="artist in filteredArtists" :key="artist.id" @mousedown="updateSelectedArtist(artist)"> {{ artist.name }} </a>
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
		focus(value) {
			console.log('focus');
			console.log(value);
			return (this.filterFocus = value);
		},
		submitForm(event) {
			console.log('submitForm');
			console.log(event);
			event.preventDefault();
			var artistName = this.artistName;
			var selectedArtist = this.wuData.artists.filter(function(artist) {
				return artist.name.toLowerCase() === artistName.toLowerCase();
			});
			if (selectedArtist.length) {
				this.$store.commit('updateSelectedArtist', selectedArtist[0].id);
			} else {
				this.$store.commit('updateSelectedArtist', null);
			}
		},
		updateSelectedArtist(artist) {
			console.log('updateSelectedArtist');
			console.log(artist);
			this.artistName = artist.name;
			this.$store.commit('updateSelectedArtist', artist.id);
			this.focus(false);
		}
	}
};
</script>
