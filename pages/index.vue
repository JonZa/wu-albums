<template>
	<div class="content">
		<h1>
			<small>Ranked:</small>
			Top 10 Wu-Tang Clan Albums
		</h1>

		<div class="albums">
			<Album v-for="album in wuData.albums" :key="album.id" :album="album" />
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Album from '@/components/album.vue';

export default {
	components: {
		Album
	},
	computed: {
		...mapState(['wuData'])
	}
};
</script>
