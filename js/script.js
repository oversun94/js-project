"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

}



const a = prompt ("Один из последних просмотренных фильмов?",""),
    b = prompt ("Как оценишь", ""),
    c = prompt ("Один из последних просмотренных фильмов?",""),
    d = prompt ("Как оценишь", "");

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);