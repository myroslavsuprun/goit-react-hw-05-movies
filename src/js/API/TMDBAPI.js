export class TMDBAPI {
  static #BASE_URL = 'https://api.themoviedb.org/3/';
  static #API_KEY = 'a53024f85571880eb7cb132a04dec362';

  static #TRENDING_OPTIONS = {
    media_type: 'movie',
    time_window: 'day',
  };

  static async getTrendingMovies() {
    const { media_type, time_window } = this.#TRENDING_OPTIONS;
    const API_KEY = this.#API_KEY;
    // prettier-ignore
    const movies = await fetch(`${this.#BASE_URL}trending/${media_type}/${time_window}?api_key=${API_KEY}`);

    const moviesJSON = await movies.json();
    return moviesJSON.results;
  }
}
