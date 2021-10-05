<<<<<<< HEAD
const baseURL = 'https://superheroapi.com/api.php/1856344077860375/4'
fetch (baseURL, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then (response => response.json())
    .then(data => console.log(data))



//make it so the first'search' submit is able to take the text input and match it with the object key 'name' and return the whole card 
=======
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
>>>>>>> a8cc96d6a46ac8a68990faf98d7bd15be04eed9c
