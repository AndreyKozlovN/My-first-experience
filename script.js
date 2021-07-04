"use strict";

const personalMovieDB = {
        count: 0,
        movies: {},
        actosr: {},
        genres: [],
        privat: false,
        start: function() {
                personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        
                while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
                }
        },
        showMyDB: function() {
                if (personalMovieDB.privat === false) {
                        console.log(personalMovieDB);
                }
        },
        detectPersonalLevel: function() {
                if (personalMovieDB.count < 10) {
                        alert('Просмотрено довольно мало фильмов');
                } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                        alert('Вы классический зритель');
                } else if (personalMovieDB.count >= 30) {
                        alert('Вы киноман');
                } else {
                        alert("Произошла ошибка");
                }
        },
        writeYourGenres: function() {
                for (let i = 1; i < 4; i++) {
                        let numQuestion = prompt(`Ваш любимый жанр под номером ${i}?`, ''); 
        
                        if (numQuestion != null && numQuestion != '' && numQuestion.length < 50) { 
                                personalMovieDB.genres[i - 1] = numQuestion; 
                        } else {
                                console.log('Некорректный ввод');
                                i--;
                        }
                }
                /*
                let numQuestion = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

                if (numQuestion != null && numQuestion != '' && numQuestion.length < 50) {
                                personalMovieDB.genres = genres.split(', ');
                                personalMovieDB.genres.sort();
                        } else {
                                console.log('Некорректный ввод');
                                i--;
                        }
                */
                personalMovieDB.genres.forEach((item, i) => {
                        console.log(`Любимый жанр ${i + 1} - это ${item}`);
                });
        },
        rememberMyFilms: function() {
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
        },
        toggleVisibleMyDB: function() {
                if (personalMovieDB.privat) {
                        personalMovieDB.privat = false;
                } else {
                        personalMovieDB.privat = true;
                }
        }
};
