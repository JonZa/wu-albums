<template>
	<div class="albums">
		<Album v-for="album in wuData.albums" :key="album.id" :album="album" :selectedArtistId="selectedArtistId" />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Album from '@/components/album';
export default {
	components: {
		Album
	},
	computed: {
		...mapState(['wuData', 'selectedArtistId'])
	}
};
</script>
