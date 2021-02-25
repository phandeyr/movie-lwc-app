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

    constructor() {
        super()
        const styles = document.createElement('link');
        styles.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }

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
