<template>
	<div class="container">
		<h1>
			<small>Ranked:</small>
			Top 10 Wu-Tang Clan Albums
		</h1>
		<Artists />
		<Albums />
		<Nuxt />
	</div>
</template>

<script>
import Albums from '@/components/albums.vue';
import Artists from '@/components/artists.vue';

export default {
	components: {
		Albums,
		Artists
	}
};
</script>
