import React from 'react';

const useMovieInfo = (movie) => {

    return ([{
        key: "Title",
        value: movie.title
    }, {
        key: "Release year",
        value: movie.release_date
    }, {
        key: "Genre",
        value: movie.genres,
        isMultiple: true,
    }, {
        key: "Production Companies",
        value: movie.production_companies,
        isMultiple: true,
        isImage: true
    }, {
        key: "User rating",
        value: movie.vote_average
    }])
}

export default useMovieInfo;
