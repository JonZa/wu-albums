<template>
	<div class="album">
		<h2>{{ album.id }}. {{ album.artist }} - {{ album.title }}</h2>
		<p>
			<img :src="album.image" width="1000" height="1000" loading="lazy" /><br />
			{{ album.blurhash }}<br />
			{{ album.artists }}
		</p>
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
