"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actosr: {},
        genres: [],
        privat: false
};
const a = prompt("Один из последних просмотренных фильмов", ''),
      b = +prompt("На сколько баллов вы его оцените?", ''),
      c = prompt("Один из последних просмотренных фильмов", ''),
      d = +prompt("На сколько баллов вы его оцените?", '');
 
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
    

console.log(personalMovieDB);    