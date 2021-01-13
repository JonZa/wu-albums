<template>
	<div
		class="album"
		:style="{
			'background-image': 'url(' + album.image + ')'
		}"
	>
		<div class="album__details">
			<h2>{{ album.id }}. {{ album.artist }} - {{ album.title }}</h2>
			<img :src="album.image" width="10" height="10" loading="lazy" :alt="album.artist + ' - ' + album.title + ' album cover'" /><br />
			<p>
				{{ album.blurhash }}<br />
				{{ album.artists }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		album: {
			id: Number,
			artist: String,
			title: String,
			image: String,
			blurhash: String,
			artists: Array
		}
	}
};
</script>
