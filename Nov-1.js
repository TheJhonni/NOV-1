// JS Basics

/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/
console.log("--------EXERCISE N.1--------\n")

let test = "Hey I'm a test!"

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/

console.log("--------EXERCISE N.2--------\n")

let a = 10
let b = 20
let sum = a + b
console.log(sum);

/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

console.log("--------EXERCISE N.3--------\n")

/*
let money;

let random = function(n) {
  for (let i=0; i<=n; i++) {
    n.push(Math.floor((Math.random() * 20)));
}
return n;
}

console.log(random);
*/

let random = [];
while(random.length < 20){
    let r = Math.floor(Math.random() * 20) + 1;
    if(random.indexOf(r) === -1) random.push(r);
}
console.log(random);

/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

console.log("--------EXERCISE N.4--------\n")
let me = {
  name: "Davide",
  surname: "Spiga",
  age: 30,
}

/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/
console.log("--------EXERCISE N.5--------\n")

delete me.age

/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/
console.log("--------EXERCISE N.6--------\n")

me.skills = [
  "HTML", "CSS", "JS"
];

console.log(me);

/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
console.log("--------EXERCISE N.7--------\n")

me.skills.pop();
console.log(me);

// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/
console.log("--------EXERCISE N.8--------\n")

function dice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log("Random Number between 1 and 6: " + dice(1, 6));


/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

console.log("--------EXERCISE N.9--------\n")

const whoIsBigger = function(x, y) {
  if (x > y) {
    return x;
  } else {
    return y
  }
};
console.log(whoIsBigger(6, 8));

/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

console.log("\n--------EXERCISE N.9--------\n")

  let str = "I love coding";
  const splitMe = str.split(' ');
  console.log(splitMe);

/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

console.log("\n--------EXERCISE N.10--------\n")

let isABoolean = true;
const deleteOne = function(str, isABoolean) {
  if (isABoolean = true) {
    return str.split[0];
} else {
  return str.substring(0,str.length-1);
};
}
console.log(deleteOne("Hello!", isABoolean));

/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/
 

/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/

const isThisAnEmail = function (mail) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.isThisAnEmail.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/

const whatDayIsIt = new Array(7);
weekDAY[1] = 'Sunday' ; 
weekDAY[2] = 'Monday';
weekDAY[3] = 'Tuesday';
weekDAY[4] = 'Wednesday';
weekDAY[5] = 'Thursday';
weekDAY[6] = 'Friday';
weekDAY[7] = 'Saturday';

function returnDay(x) {
  return (x < 1) || (x > 7) ? null : whatDayIsIt = weekDAY[x]
  };

/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/
function howManyDays(d) {
  let year = (d.getFullYear() < 10) ? "0" + (d.getFullYear() + 1) : (d.getFullYear() + 1);
  let month = (d.getMonth() < 10) ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1);
  let day = (d.getDate() < 10) ? "0" + d.getMonth() : d.getMonth();

  return day + d.getDate() + "." + month + "." + d.getMonth() + year + d.getFullYear;
}

console.log(howManyDays(new Date()));



/* EXERCISE 10
   Write a function called isTodayMyBirthday which should return true if today's your birthday, false otherwise.
*/

const isTodayMyBirthday = function(number, numberMonth) {
  if (Number === 02 && numberMonth === 10) {
    return true
  } else {
    return false
  };
}

// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11
   Write a function called deleteProp which receives an object and a string as parameters,
   and returns the given object after deleting its property named as the given string.
*/
const deleteProp = function() {
  delete movies.Year;
  return movies
};

/* EXERCISE 12
    Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/

const oldestMovie = function() {
let num = Number(Year);
highest = num;
for (i=0;i<=0;i++) {
        if (num[i]>highest) {
                highest = num[i]
        }
}
};

/* EXERCISE 13
    Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/

const countMovies = function(n) {

}

/* EXERCISE 14
    Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/

/* EXERCISE 15
   Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/

const onlyInThisMillennium = function () {
  let num = Number(Year);
  if (num >= 2000 && num <= 3000 ) {
    return num
  } else {
    return "Not in this millennium"
  }
};

/* EXERCISE 16 
    Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/

const getMovieById = function (id) {
  let id = (Year, imdbID, Type, Poster)
  while (id = Year) {
    console.log(movie + (getMovieById(Year)),
  }
  while (id = imdbID) {
    console.log(movie + (getMovieById(imdbID)),
  }
  while (id = Type) {
    console.log(movie + (getMovieById(Type)),
  }
  while (id = Poster) {
    console.log(movie + (getMovieById(Poster)),
  };
}

/* EXERCISE 17
    Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/

/* EXERCISE 18
    Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/

/* EXERCISE 19
    Write a function called searchAndDivide which receives a string as a parameter and returns an object;
    this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
    and another array unmatch with all the remaining ones.
*/

/* EXERCISE 20
   Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* EXERCISE 21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* EXERCISE 22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* EXERCISE 23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

/* This movies array is used throughout the exercises. You're not supposed to alter it. */
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ];