"use sctrict";

const number0fFilms = +prompt('Сколько фильмов вы глянули?');

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних фильмов?'),
      b = prompt('На сколько оцените его?'), 
      c = prompt('Один из последних фильмов?'),
      d = prompt('На сколько оцените его?');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);