const baseURL = 'https://superheroapi.com/api.php/1856344077860375/'

//id-powerstats,image,bi

let headerImgContainer = document.getElementById('header-image-container');

let searchForm = document.getElementById('search-characters');
let searchSubmit = document.getElementById('submit');
let searchInput = document.querySelector('#superhero-name.superhero');

let cardContainer = document.getElementById('card-container');

let superheroCard = document.getElementById('superhero-Card');
    let heroName = document.querySelector('.superhero-name');
    let heroImage = document.querySelector('.superhero-image');
    let heroFullName = document.querySelector('.full-name');
    let stats = document.querySelector('.powerstats')
    let publisher = document.querySelector('.publisher');
    let alias = document.querySelector('.alias');


let counter = document.getElementById('counter');
let likeBttn = document.getElementById('like');
let dislikeBttn = document.getElementById('dislike');
// let count = counter.innerText;
let h3 = document.getElementById('count');


let commentForm = document.getElementById('new-comment');
let commentBttn = document.getElementById('submit-bttn');
let commentInput = document.getElementById('comment');
let commentBox = document.getElementById('text-content');
let commentList = document.getElementById('comment-list');


commentForm.addEventListener('submit', e => {
    e.preventDefault();
    let li = document.createElement('li');
    let comment = commentInput.value;
    li.append(comment);
    commentList.appendChild(li);
    // commentBox.append('  ||  ' + comment);
    
})


function battle(hero,villain){
    let heroIntel = hero.results[0].powerstats.intelligence.value;
    let heroStrength = hero.results[0].powerstats.strength.value;
    let heroSpeed = hero.results[0].powerstats.speed;
    let heroCombat = hero.results[0].powerstats.combat;
    let heroPower = hero.results[0].powerstats.power;

    // let villainIntel = villain.results[0].powerstats.intelligence;
    // let villainStrength = villain.results[0].powerstats.strength;
    // let villainSpeed = villain.results[0].powerstats.speed;
    // let villainCombat = villain.results[0].powerstats.combat;
    // let villainPower = villain.results[0].powerstats.power;

    heroTotal = heroIntel + heroStrength + heroSpeed + heroCombat + heroPower;
    console.log(heroTotal)

    // villainTotal = villainIntel + villainStrength + villainSpeed + villainCombat + villainPower;

    // if(heroTotal > villainTotal){

    // }
}

















likeBttn.addEventListener('click',() => {
    let currNum = h3.innerText;
    currNum++;
    let newCount = currNum;
    h3.textContent= newCount;
})

dislikeBttn.addEventListener('click', ()=>{
    let currNum = h3.innerText;
    currNum--;
    let newCount = currNum;
    h3.textContent = newCount;
})


searchForm.addEventListener('submit', e => {
    e.preventDefault();
    let name = searchInput.value
    const searchName_URL = `${baseURL}search/${name}`;
    
    // console.log(searchInput.value)


    fetch(searchName_URL)
        .then(r => r.json())
        .then(item => {
            console.log(item);
            renderSuperhero(item);
        })

    
})

let superContain = document.getElementById('superhero-container');
let heroBin = document.getElementById('hero-bin');
let villainBin = document.getElementById('villain-bin');
let likeCount = {};

function superClick(superhero){
    let card = document.getElementById('card-container');

    let name = card.querySelector('.superhero-name');
    name.innerText = superhero.results[0].name;

    let img = card.querySelector('.superhero-image');
    img.src = superhero.results[0].image.url;

    let fullName = card.querySelector('.full-name');
    fullName.innerText = `Full Name: ${superhero.results[0].biography['full-name']}`;

    let aliases = card.querySelector('.alias');
    aliases.innerText = `Known Aliases: ${superhero.results[0].biography.aliases}`;

    let powerstats = card.querySelector('.powerstats');
        let intel = superhero.results[0].powerstats.intelligence;
        let strength = superhero.results[0].powerstats.strength;
        let speed = superhero.results[0].powerstats.speed;
        let combat = superhero.results[0].powerstats.combat;
        let power =superhero.results[0].powerstats.power;

    powerstats.innerText = `Intelligence: ${intel}, Strength: ${strength}, Speed: ${speed}, Combat: ${combat}, Power: ${power}`;

    let publisher = card.querySelector('.publisher');
    publisher.innerText = `Publisher: ${superhero.results[0].biography.publisher}`;

    let currLikes = card.querySelector('#count');
    currLikes.innerText = likeCount.value;
}





function renderSuperhero(superhero){
    //insert heroname
    heroName.innerText = superhero.results[0].name;
    //insert image 
    heroImage.src = superhero.results[0].image.url;
    //insert alias
    alias.innerText = `Known Aliases: ${superhero.results[0].biography.aliases}`;
    //insert full name
    heroFullName.innerText = `Full Name: ${superhero.results[0].biography['full-name']}`;
    //insert powerstats
    let intel = superhero.results[0].powerstats.intelligence;
    let strength = superhero.results[0].powerstats.strength;
    let speed = superhero.results[0].powerstats.speed;
    let combat = superhero.results[0].powerstats.combat;
    let power =superhero.results[0].powerstats.power;
    stats.innerText = `Intelligence: ${intel}, Strength: ${strength}, Speed: ${speed}, Combat: ${combat}, Power: ${power}`;
    //insert publisher
    publisher.innerText = `Publisher: ${superhero.results[0].biography.publisher}`;


    let count = document.getElementById('count')
    let likes = count.innerText;
    likeCount.key = superhero.results[0].name;
    likeCount.value = likes;

    
        
    if(superhero.results[0].biography.alignment === 'good'){
        let img = document.createElement('img');
        img.src = superhero.results[0].image.url;

        img.addEventListener('click', () => superClick(superhero))

        heroBin.append(img);
        battle(superhero);

    }else if( superhero.results[0].biography.alignment === 'bad'){
        let villain = superhero;
        let img = document.createElement('img');
        img.src = superhero.results[0].image.url;

        img.addEventListener('click', () => superClick(superhero));

        villainBin.append(img);
        battle(superhero,villain);
    }




    // let img = document.createElement('img');
    // img.src = superhero.results[0].image.url;

    // superContain.append(img);
}




fetch (baseURL, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then (response => response.json())
    .then(data => console.log(data))





