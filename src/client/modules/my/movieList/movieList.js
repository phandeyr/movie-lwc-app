import { LightningElement, api } from 'lwc'
import { getMovies } from 'data/movieSearchService'

export default class MovieList extends LightningElement {

    /**
     * @description The array of movies
     */
    movies = []

    /**
     * @description Determines whether content is loading
     */
    isLoading = false

    constructor() {
        super()
        const styles = document.createElement('link');
        styles.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }

    /**
     * @description Setter for the search term
     */
    @api
    set searchTerm(searchTerm) {
        if (searchTerm) {
            this._searchTerm = searchTerm
            this.getMovies()
        }
    }

    /**
     * @description Getter for the search term
     */
    get searchTerm() {
        return this._searchTerm
    }

    /**
     * @description Invokes the api and sets the response to the movies array
     * Removes duplicates from api response and sorts movies by the latest date
     */
    getMovies() {
        this.isLoading = true
        getMovies({ searchTerm: this.searchTerm })
        .then(response => {
            const movieSet = new Set();
            this.movies = response.reduce((acc,movie) => {
                if (!movieSet.has(movie.imdbID)){
                    // If no poster available, set to null
                    if (movie.Poster === 'N/A') {
                        movie.Poster = null
                    }
                    movieSet.add(movie.imdbID,movie)
                    acc.push(movie)
                }
                return acc;
            },[]).sort((a,b) => b.Year - a.Year)
        })
        .finally(() => { this.isLoading = false })
    }

    /**
     * @description Sends event with the movie id
     * @param {*} event
     */
    handleMovie(event) {
        const state = new CustomEvent('state', {
            detail: {
                movieId: event.currentTarget.dataset.value,
                state: 'details'
            }
        })

        this.dispatchEvent(state)
    }
}