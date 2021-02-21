import {MOVIE_API_KEY, MOVIE_URL } from '../config.js'

export const getMovieDetails = (data) => fetch(`${MOVIE_URL}?i=${data.movieId}&r=json&apikey=${MOVIE_API_KEY}`)
    .then((response) => {
        if (!response.ok) throw new Error('An unexpected error occurred')
        return response.json()
    })
    .then(response => response)