// const baseURL = 'https://superheroapi.com/api/1856344077860375/';

// fetch (baseURL)
//     .then (response => response.json())
//     .then(data => console.log(data))


// api url
const api_url = 
      "https://superheroapi.com/api/1856344077860375/";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
