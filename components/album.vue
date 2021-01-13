<template>
	<p>
		{{ album.id }}. {{ album.artist }} - {{ album.title }}<br />
		<img :src="album.image" width="100" height="100" /><br />
		{{ album.blurhash }}<br />
		{{ album.artists }}
	</p>
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
