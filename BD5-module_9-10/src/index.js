import { Notify } from 'notiflix';
import { refs } from './js/helpers/refs';
import { APIService } from './js/services/APIservice';
import { pokemonDetails } from './js/components/pokemonDetails';
import './scss/main.scss';

const pokemonApi = new APIService();

function getAllPokemon({ results }) {
  results.forEach(pokemon =>
    pokemonApi.getPokemon(pokemon.name).then(pokemonMarkup),
  );
}

function pokemonMarkup(pokemon) {
  const data = `<li class="pokemon-card" data-pokemon=${pokemon.name}>    
        <h2 data-pokemon=${pokemon.name}>${pokemon.name}</h2>
        <img src=${pokemon.sprites.other.dream_world.front_default} data-pokemon=${pokemon.name} />  
      </li>`;

  refs.pokemonList.insertAdjacentHTML('beforeend', data);
}

pokemonApi.getAllPokemon().then(getAllPokemon);

refs.pokemonList.addEventListener('click', openDetailsPokemon);

function openDetailsPokemon(event) {
  pokemonDetails(event.target.dataset.pokemon);
}
