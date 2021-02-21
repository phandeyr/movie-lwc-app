import {MOVIE_API_KEY, MOVIE_URL } from '../config.js'

/**
 * @description Fetches api response and returns the data on success
 * @param {*} data the search term object
 */
export const getMovies = (data) => fetch(`${MOVIE_URL}?s=${data.searchTerm}&r=json&apikey=${MOVIE_API_KEY}`)
    .then((response) => {
        if (!response.ok) throw new Error('An unexpected error occurred')
        return response.json()
    })
    .then(response => response.Search)