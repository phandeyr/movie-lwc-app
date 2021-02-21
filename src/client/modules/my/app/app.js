import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    /**
     * @description The search term
     */
    searchTerm

    /**
     * @description Sets the search term
     * @param {*} event
     */
    handleSearch(event) {
        this.searchTerm = event.detail.searchTerm
    }
}
