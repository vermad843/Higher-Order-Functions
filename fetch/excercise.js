//.then is a higher order function because 
// it takes other functions as an argument

const fetch = require('node-fetch');

const url = 'https://www.reddit.com/r/birdswitharms.json';

function responseJSON(response) {
  return response.json();
}

function logResult(result) {
    console.log(result);
}

fetch(url).then(responseJSON).then(logResult);