import { refs } from '../helpers/refs';
import { APIService } from '../services/APIservice';

const pokemonApi = new APIService();

export const pokemonDetails = pokemonName => {
  pokemonApi.getPokemon(pokemonName).then(createMarkupModal);

  //   const genresMarkup = genres
  //     .map(({ name }) => `<li class="movie-modal__genres-item">${name}</li>`)
  //     .join(' ');

  function createMarkupModal(pokemon) {
    console.log(pokemon);

    const markup = `<div class="movie-modal js-movie-modal">
        <div class="movie-modal__container animate-modal">
          <button class="movie-modal__close" id="close-movie-modal">Close</button>

          <div class="movie-modal__content">
            <div class="movie-modal__top-block">
              <div class="movie-modal__image-wrapper">
                <div class="movie-modal__image-box-shadov">
                  <img
                    src="${pokemon.sprites.other.dream_world.front_default}"
                    alt="${pokemon.name}"
                    class="movie-modal__image"
                  />
                </div>
              </div>

              <div class="movie-modal__overview">            
                <h2 class="movie-modal__title">${pokemon.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;

    refs.modal.innerHTML = markup;
  }
};
