import { LightningElement, api } from 'lwc'
import { getMovieDetails } from 'data/movieDetailsService'

export default class MovieDetails extends LightningElement {

    /**
     * @description The object containing the movie details
     */
    movieDetail = {}

    /**
     * @description Determines whether content is loading
     */
    isLoading = false

    /**
     * @description Setter for the movie id
     */
    @api
    set movieId(movieId) {
        this._movieId = movieId
        this.getMovieDetails()
    }

    /**
     * @description Getter for the movie id
     */
    get movieId() {
        return this._movieId
    }

    /**
     * @description Invokes the api and sets the response to the movie detail object
     */
    getMovieDetails() {
        this.isLoading = true

        getMovieDetails({ movieId: this.movieId })
        .then(response => {
            this.movieDetail = response
        })
        .finally(() =>  {
            this.isLoading = false
        })
    }

    /**
     * @description Sends event to parent component
     */
    handleMovies() {
        const state = new CustomEvent('state', {
            detail: {
                state: 'list'
            }
        })

        this.dispatchEvent(state)
    }
}