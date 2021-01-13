import gql from 'graphql-tag';

export const state = () => ({
	wuData: []
});

export const mutations = {
	updateWuData: (state, data) => {
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
