const { createApolloFetch } = require('apollo-fetch');

let dynamicRoutes = () => {
	const uri = process.env.WU_ENDPOINT;
	const apolloFetch = createApolloFetch({ uri });
	const query = `
	query allAlbums{
		albums {
			title
		}
	}
	`;
	return apolloFetch({ query }) // all apolloFetch arguments are optional
		.then(result => {
			const { data } = result;
			const dynamicRoutes = data.albums.map(album => `/album/${album.title.toLowerCase()}`);
			return dynamicRoutes;
		})
		.catch(error => {
			console.log('got error');
			console.log(error);
		});
};

export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		htmlAttrs: {
			lang: 'en'
		},
		title: 'Top 10 Wu-Tang Clan Albums',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '🔥👐🔥' }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['~/assets/sass/styles.scss'],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [`~/plugins/getWuData.server.js`],
	generate: {
		routes: dynamicRoutes
	},

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: ['@nuxtjs/apollo'],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},
	apollo: {
		clientConfigs: {
			default: {
				httpEndpoint: process.env.WU_ENDPOINT
			}
		}
	}
};
