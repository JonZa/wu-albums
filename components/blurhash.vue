<template>
	<canvas ref="canvas" width="32" height="32" />
</template>

<script>
import { decode } from 'blurhash';
export default {
	props: {
		hash: {
			type: String,
			required: true
		},
		aspectRatio: {
			type: Number,
			default: 1
		}
	},
	mounted() {
		const pixels = decode(this.hash, 32, 32);
		const imageData = new ImageData(pixels, 32, 32);
		const context = this.$refs.canvas.getContext('2d');
		context.putImageData(imageData, 0, 0);
	}
};
</script>
