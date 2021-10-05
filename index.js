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