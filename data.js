const moviesdata = [
    {
        title: "Avengers: Endgame",
        genre: "Action",
        year: 2019,
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
    },
    {
        title: "Inception",
        genre: "Sci-Fi",
        year: 2010,
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
        title: "The Godfather",
        genre: "Crime",
        year: 1972,
        rating: 9.2,
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    },
    {
        title: "Knives Out",
        genre: "Mystery",
        year: 2019,
        rating: 7.9,
        image: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "Joker",
        genre: "Thriller",
        year: 2019,
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "The Matrix",
        genre: "Sci-Fi",
        year: 1999,
        rating: 8.7,
        image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "Forrest Gump",
        genre: "Drama",
        year: 1994,
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
    },
    {
        title: "Back to the Future",
        genre: "Sci-Fi",
        year: 1985,
        rating: 8.5,
        image: "download.jpg"
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        genre: "Fantasy",
        year: 2001,
        rating: 8.8,
        image: "The Lord of the Rings.jpg"
    },
    {
        title: "Fight Club",
        genre: "Drama",
        year: 1999,
        rating: 8.8,
        image: "Fight Club.jpg"
    },
    {
        title: "Goodfellas",
        genre: "Crime",
        year: 1990,
        rating: 8.7,
        image: "Goodfellas.jpg"
    },
    {
        title: "Seven",
        genre: "Thriller",
        year: 1995,
        rating: 8.6,
        image: "Seven.jpg"
    }   
];

async function getdata(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(moviesdata);
        },1000)
    })
}