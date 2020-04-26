const mockAxios = jest.genMockFromModule('axios');

// this is the key to fix the axios.create() undefined error!
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get = jest.fn(option => {
	console.log(option)
	if (option) {
		return Promise.resolve({ data: [{ login: "rookie" }, { login: "theshy" }] })
	}
});

export default mockAxios;