<template>
	<div class="container">
		<h1>
			<small>Ranked:</small>
			Top 10 Wu-Tang Clan Albums
		</h1>

		<main class="game-container">
			<section v-for="album in wuData.albums" :key="album.id">
				<Album :album="album" />
			</section>
		</main>
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
