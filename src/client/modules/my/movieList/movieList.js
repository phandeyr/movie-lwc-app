import { LightningElement, api } from 'lwc'
import { getMovies } from 'data/movieSearchService'

export default class MovieList extends LightningElement {

    /**
     * @description The array of movies
     */
    movies = []

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
     */
    getMovies() {
        getMovies({ searchTerm: this.searchTerm })
        .then(response => {
            this.movies = response
        })
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