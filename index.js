const baseURL = fetch ('https://superheroapi.com/api/1856344077860375')
    .then (response => response.json())
    .then(data => console.log(data))
