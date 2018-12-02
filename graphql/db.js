export let movies = [
    {
        id: 1,
        name: "Junghun",
        score: 24
    },
    {
        id: 2,
        name: "Dahun",
        score: 22
    },
    {
        id: 3,
        name: "Sunghun",
        score: 14
    },
    {
        id: 4,
        name: "Jihun",
        score: 25
    },
    {
        id: 5,
        name: "gihun",
        score: 34
    },
]
export const getMovies = () => movies;
export const getById = id => {
    const filteredMovies = movies.filter(movie => id === movie.id)
    return  filteredMovies[0]
}
export const deleteMovie = id => {
    const cleandedMovies = movies.filter(movie => movie.id !== id)
    if(movies.length > cleandedMovies.length) {
        movies = cleandedMovies
        return true
    } else {
        return false
    }
}
export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    }
    movies = [...movies,newMovie]
    return newMovie
}