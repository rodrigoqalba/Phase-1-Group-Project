const baseURL = 'https://superheroapi.com/api.php/1856344077860375/'



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
    commentForm.reset();
    
})

// // GOALS FOR TOODAY
// 1.MAKES COMMENTS CARRY WITH EACH card



function calcTotalPower(hero){
    let heroIntel = hero.results[0].powerstats.intelligence;
    let heroStrength = hero.results[0].powerstats.strength;
    let heroSpeed = hero.results[0].powerstats.speed;
    let heroCombat = hero.results[0].powerstats.combat;
    let heroPower = hero.results[0].powerstats.power;

    
    heroTotal = parseInt(heroIntel) + parseInt(heroStrength) + parseInt(heroSpeed) + parseInt(heroCombat) + parseInt(heroPower);
    hero.results[0].Total = heroTotal;
    



    
}
let fightBttn = document.getElementById('fight-bttn');

let heroScore = document.getElementById('hero-score');
let villainScore = document.getElementById('villain-score');

fightBttn.addEventListener('click', () => battle(villainScore,heroScore) )

function battle(villain, hero){
    
    if(villain.innerText < hero.innerText){
        alert("The HEROs are victorious!");
        
    }else if(villain.innerText > hero.innerText){
        alert("The VILLAINs have won! It is a dark day...");
    }else if (villain.innerText === hero.innerText){
        alert('Our powers are too evenly matched!');
    }




}

function likes(){
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
    // let likeCount = document.getElementById('count');
    // let counter = parseInt(likeCount.innerText);

    // hero.results[0].likes = counter;
}




searchForm.addEventListener('submit', e => {
    e.preventDefault();
    let name = searchInput.value
    const searchName_URL = `${baseURL}search/${name}`;
    // countLikes();
    
    


    fetch(searchName_URL)
        .then(r => r.json())
        .then(item => {
            console.log(item);
            renderSuperhero(item);
        })

    searchForm.reset();
})

let superContain = document.getElementById('superhero-container');
let heroBin = document.getElementById('hero-bin');
let villainBin = document.getElementById('villain-bin');

function superClick(superhero){
    countLikes(superhero);


    let card = document.getElementById('card-container');

    let likes = card.querySelector('#count');
    likes.innerText = superhero.results[0].likes;


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



}



// const countLikes = (currlikes) => {
//     // superhero.results[0].likes = currLikes;
//     let count = document.getElementById('count');
//     let currLikes = parseInt(count.innerText);

//     }


let newForm = document.getElementById('add-char');

newForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newHero = {};

    newHero.name = e.target.supname.value;
    newHero.image = e.target.img.value;
    newHero.fullName = e.target.fullname.value;
    newHero.aliases = e.target.alias.value;


    let newChar = document.createElement('div');
    let rookieCard = document.getElementById('rookie');
    let name = document.createElement('h3');
    let img = document.createElement('img');
    let fullName = document.createElement('h4');
    let aliases = document.createElement('h5');


    name.innerText = newHero.name;
    img.src = newHero.image;
    fullName.innerText = `Full Name: ${newHero.fullName}`;
    aliases.innerText = `Known Aliases: ${newHero.aliases}`;

    
    newChar.append(name);
    newChar.append(img);
    newChar.append(fullName);
    newChar.append(aliases);


    rookieCard.append(newChar)



    newForm.reset();
})





function renderSuperhero(superhero){
    // superhero.results[0].likes = 0;
    // let likes = superhero.results[0].likes;
    let likeCount = document.getElementById('count');

    likeCount.innerText = 0;

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

    

    


    // likeCount.key = superhero.results[0].name;
    // likeCount.value = likes;
    if(superhero.results[0].biography.alignment === 'good'){
        let img = document.createElement('img');
        let div = document.createElement('div');
        let h5 = document.createElement('h5');
        let h4 = document.createElement('h4');
        let bttn = document.createElement('input');


        bttn.setAttribute('type','submit');
        bttn.setAttribute('value','Send to battle!');

        calcTotalPower(superhero);


        img.src = superhero.results[0].image.url;
        h4.innerText = superhero.results[0].name;
        h5.innerText = `Superscore: ${superhero.results[0].Total}`;

        img.addEventListener('click', () => superClick(superhero))
        

        div.append(img);
        div.append(h4);
        div.append(h5);
        div.append(bttn);

        bttn.addEventListener('click', ()=> {
            //move image and superscore div to battle section when clicked
            // e.preventDefault();
            let heroImg = superhero.results[0].image.url;
            let heroScore = `Superscore: ${superhero.results[0].Total}`;
            let heroContain = document.getElementById('hero-card');
            let imgContain = document.getElementById('heroImg');
            let score = document.getElementById('hero-score');
         

            imgContain.src = heroImg;

            score.innerText = heroScore;

            heroContain.append(score);

        })

        heroBin.append(div);

        
        

    }else if( superhero.results[0].biography.alignment === 'bad'){
        let img = document.createElement('img');
        let div = document.createElement('div');
        let h5 = document.createElement('h5');
        let h4 = document.createElement('h4');
        let bttn = document.createElement('input');
        
        // let counter = h3.innerText;
        // superhero.results[0].likes = counter;

        bttn.setAttribute('type','submit');
        bttn.setAttribute('value','Send to battle!')

        calcTotalPower(superhero);


        img.src = superhero.results[0].image.url;
        h4.innerText = superhero.results[0].name;
        h5.innerText = `Superscore: ${superhero.results[0].Total}`;

        img.addEventListener('click', () => superClick(superhero));

        div.append(img);
        div.append(h4);
        div.append(h5);
        div.append(bttn);
        
        bttn.addEventListener('click', ()=> {
            //move image and superscore div to battle section when clicked
            
            let villainImg = superhero.results[0].image.url;
            let villainScore = `Superscore: ${superhero.results[0].Total}`;
            let villainContain = document.getElementById('villain-card');
            let imgContain = document.getElementById('villainImg');
            let score = document.getElementById('villain-score');

            imgContain.src = villainImg;

            score.innerText = villainScore;

            villainContain.append(score);

        })
        villainBin.append(div);
    }

}

likes();

fetch (baseURL, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then (response => response.json())
    .then(data => console.log(data))





