"use strict";

let numberOfFilms;

function start() {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
                numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
}
start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actosr: {},
        genres: [],
        privat: false
};

function showMyDB() { //мой вариант
        //let answer = personalMovieDB.privat === false; - ненужная строка
        if (personalMovieDB.privat === false) {
                console.log(personalMovieDB);
        }
}
showMyDB();

/*              Вариант из урока
function showMyDB(hidden) {
        if (!hidden) {
                console.log(personalMovieDB);
        }
}
showMyDB(personalMovieDB.privat);
*/

function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
                alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
                alert('Вы киноман');
        } else {
                alert("Произошла ошибка");
        }
}
detectPersonalLevel();

/*              Вариант и спользованием цикла do, while
let i = 0;
do {
        const a = prompt("Один из последних просмотренных фильмов", ''),
              b = +prompt("На сколько баллов вы его оцените?", '');
              i++;
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movie[a] = b; 
                console.log('done');
} else {
        console.log('error');
        i--;
}
}
while (i < 2);

console.log(personalMovieDB);*/


/*                    Вариант цикла с использованием while
let i = 0;

while (i < 2) {
        const a = prompt("Один из последних просмотренных фильмов", ''),
              b = +prompt("На сколько баллов вы его оцените?", '');
              i++;
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b; 
                console.log('done');
        } else {
                console.log('error');
                i--;
        }
}

console.log(personalMovieDB);*/

function writeYourGenres() {

        for (let i = 1; i < 4; i++) {
                let numQuestion = prompt(`Ваш любимый жанр под номером ${i}?`, ''); //i из цикла ставит номер

                if (numQuestion != null && numQuestion != '' && numQuestion.length < 50) { //проверка
                        personalMovieDB.genres[i - 1] = numQuestion; //сложим элементы в массив/(-1)начало с 0 элемента
                } else {
                        console.log('ERROR');
                        i--;
                }
        }
}
writeYourGenres();

/*              Вариант из урока
function writeYourGenres() {
         for (let i = 1; i <= 3; i++) {
                 personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
         }
}
writeYourGenres();
*/

function rememberMyFilms() {

        for (let i = 0; i < 2; i++) {
                const a = prompt("Один из последних просмотренных фильмов", ''),
                        b = +prompt("На сколько баллов вы его оцените?", '');

                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                        personalMovieDB.movies[a] = b;
                        console.log('done');
                } else {
                        console.log('error');
                        i--;
                }

        }
}
rememberMyFilms();
console.log(personalMovieDB);