module.exports = {
    listPokemon: async(data, params, query) => {
        return new Promise((resolve, reject) => {
            reject(true);
        })
    },
    listPokemonByID: async(data, params, query) => {
        return new Promise((resolve, reject) => {
            resolve(true);
        })
    }
}