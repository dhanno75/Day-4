// Day 4 task
/*
(1) How to compare to JSON have the same properties without order?
 a) let obj1 = {name: 'Person 1', age: 5};
 b) let obj2 = {age: 5, name: 'Person 1'};
*/
let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

if (obj1.name === obj2.name && obj1.age === obj2.age) {
  console.log(true);
} else {
  console.log(false);
}

// OUTPUT: true

/*
(2) Use the rest countries API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console
(3) Use the same rest countries and print all countries names, regions, sub-region and populations
*/
// Solution for 2 and 3 together
// Initialize an XMLHttp Request
let xhr = new XMLHttpRequest();

// Open a request and pass url to open methods
xhr.open("GET", "https://restcountries.com/v3.1/all");

// Process the request on the server side and retrieve the data
xhr.onload = function () {
  // Provide the data if the request lies in the range of 200-<300
  if (xhr.status >= 200 && xhr.status < 300) {
    // Provide the data to the server
    let countries = JSON.parse(this.response);
    countries.forEach((country) => {
      console.log(`${country.name.common}'s flag is ${country.flags.png}`);
    });

    for (let country of countries) {
      console.log(
        `Country's name is ${country.name.common}, its region is ${country.region}, its sub-region is ${country.subregion} and its population is ${country.population}`
      );
    }
  }
};

xhr.send();

// OUTPUT
// Output for 2nd task
/*
India's flag is https://flagcdn.com/w320/in.png
Cuba's flag is https://flagcdn.com/w320/cu.png
Guadeloupe's flag is https://flagcdn.com/w320/gp.png
North Macedonia's flag is https://flagcdn.com/w320/mk.png
Tajikistan's flag is https://flagcdn.com/w320/tj.png
*/

// Output for 3rd task
/*
Country's name is India, its region is Asia, its sub-region is Southern Asia and its population is 1380004385
Country's name is Cuba, its region is Americas, its sub-region is Caribbean and its population is 11326616
Country's name is Guadeloupe, its region is Americas, its sub-region is Caribbean and its population is 400132
Country's name is North Macedonia, its region is Europe, its sub-region is Southeast Europe and its population is 2077132
Country's name is Tajikistan, its region is Asia, its sub-region is Central Asia and its population is 9537642
*/
