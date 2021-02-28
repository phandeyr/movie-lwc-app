import { LightningElement } from 'lwc'

export default class MovieSearch extends LightningElement {

    /**
     * Handles the search term once the enter key is released and dispatches event
     * @param {*} event
     */
    handleSearch(event) {
        if (event.keyCode !== 13) {
            return;
        }

        const search = new CustomEvent('search', {
            detail: {
                searchTerm: event.target.value.trim()
            }
        })
        this.dispatchEvent(search)
    }
}