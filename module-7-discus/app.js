const movies = [
    {
        "title": "Inception",
        "director": "Christopher Nolan",
        "year": 2010,
        "genre": "Sci-Fi",
        "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
    },
    {
        "title": "The Matrix",
        "director": "Lana Wachowski, Lilly Wachowski",
        "year": 1999,
        "genre": "Sci-Fi",
        "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    }
];

const jsonString = JSON.stringify(movies);
const parsedMovies = JSON.parse(jsonString);

console.log(parsedMovies[0].title); // Inception
