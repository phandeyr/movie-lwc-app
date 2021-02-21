import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    /**
     * @description The search term
     */
    searchTerm

    /**
     * @description The movie id
     */
    movieId

    /**
     * @description The state to show, default list
     */
    state = 'list'

    /**
     * @description Sets the search term
     * @param {*} event
     */
    handleSearch(event) {
        this.searchTerm = event.detail.searchTerm
    }

    /**
     * @description Handles state between components and sets relevant details
     * @param {*} event
     */
    handleState(event) {
        this.state = event.detail.state
        this.movieId = event.detail.movieId
    }

    /**
     * @description Getter for the state
     */
    get isStateList() {
        return this.state === 'list'
    }
}
