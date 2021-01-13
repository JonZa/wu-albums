import gql from 'graphql-tag';

export const state = () => ({
	wuData: []
});

export const mutations = {
	updateWuData: (state, data) => {
		const albums = data.albums;
		albums.sort((a, b) => {
			return a.rank - b.rank;
		});
		state.wuData = data;
	}
};

export const actions = {
	async callApollo({ commit }) {
		let response = await this.app.apolloProvider.defaultClient.query({
			query: gql`
				query getWuData {
					albums {
						id
						artist
						title
						image
						blurhash
						artists
						rank
					}
					artists {
						id
						name
					}
				}
			`
		});
		await commit('updateWuData', response.data);
	}
};
