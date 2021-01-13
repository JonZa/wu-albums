<template>
	<div class="game">
		{{ album.id }}<br />
		{{ album.artist }}<br />
		{{ album.title }}<br />
		{{ album.image }}<br />
		{{ album.blurhash }}<br />
		{{ album.artists }}<br />
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
			artists: [Array]
		}
	}
};
</script>
