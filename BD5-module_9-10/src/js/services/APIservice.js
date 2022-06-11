import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export class APIService {
  constructor() {
    this.query = '';
    this.url = '';
  }

  getAllPokemon = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    return res.data;
  };

  getPokemon = async name => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
    );
    return data;
  };

  resetPage() {
    this.page = 1;
  }

  get searchQuery() {
    return this.query;
  }

  set searchQuery(newQuery) {
    this.query = newQuery;
  }

  set setUrl(url) {
    this.url = url;
  }
}
