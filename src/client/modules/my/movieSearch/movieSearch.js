import { LightningElement } from 'lwc'

export default class MovieSearch extends LightningElement {

    constructor() {
        super()
        const styles = document.createElement('link');
        styles.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }

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