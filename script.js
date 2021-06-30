"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actosr: {},
        genres: [],
        privat: false
};

if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
} else {
        alert("Произошла ошибка");
}

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



for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов", ''),
              b = +prompt("На сколько баллов вы его оцените?", '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movie[a] = b; 
                console.log('done');
        } else {
                console.log('error');
                i--; 
        }

}
console.log(personalMovieDB);
