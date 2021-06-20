const fetch = require('node-fetch');

//Write an asynchronous function and call it with async/await
//Write function called getRandomNumber that returns a promise
//In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
let getNum = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomNum = (Math.random() * 100 + 10).toFixed(2);
        if (typeof Number(randomNum) === 'number') {
            resolve("The random number is " + randomNum);
        } else {
            reject("something went wrong");
        }

    }, 5000)
})



//Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
//Invoke your async function

async function callRandomNumber() {
    try {
        const result = await getNum;
        console.log(result);
    }catch(err) {
        console.log(err);
    }
    
}

callRandomNumber();

//Fetch remote data using async/await
//Write an asynchronous function that accepts 1 parameter
//A city name
//When invoked, this function should use geocode.xyz's API retrieve the city data, which uses a URL formatted as follows:

//https://geocode.xyz/seattle?json=1

//Once retrieved, print to the console the latitude and longitude
//Invoke your async function with a few cities as a test
//(Note: the API will only allow you 2 calls per second, so if you are getting errors and you think you shouldn't be, try calling fetching only ONCE per execution.)

async function fetchCity(city) {

    const res = await fetch(`https://geocode.xyz/${city}?json=1`);
    const data = await res.json();
    console.log(`Place Name: ${city} Longiture: ${data.longt} Latitude: ${data.latt}`);

}

fetchCity('seattle');
fetchCity('newyork');
fetchCity('boston');