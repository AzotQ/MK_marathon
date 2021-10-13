// Task #0
const person1 = {
    name: 'Sonya',
    hp: 68,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['gun', 'knife', 'spear'],
    attack: function () {
        console.log(this.name + ' Fight...');
    },
}

const person2 = {
    name: 'Kitana',
    hp: 85,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['spear', 'machete', 'hook'],
    attack: function () {
        console.log(this.name + ' Fight...');
    },
}

// Task #1
// function createPlayer(charClass, charName, hp) {
//     let $divPlayer = document.createElement('div');
//     $divPlayer.classList.add(charClass);

//     let $divProgressbar = $divPlayer.appendChild(document.createElement('div'));
//     $divProgressbar.classList.add('progressbar');

//     let $divLife = $divProgressbar.appendChild(document.createElement('div'));
//     $divLife.classList.add('life');
//     $divLife.style.width = `${hp}%`;

//     let $divName = $divProgressbar.appendChild(document.createElement('div'));
//     $divName.classList.add('name');
//     $divName.innerText = charName;

//     let $divCharacter = $divPlayer.appendChild(document.createElement('div'));
//     $divCharacter.classList.add('character');

//     let $imgCharacter = $divCharacter.appendChild(document.createElement('img'));
//     $imgCharacter.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

//     let $targetDiv = document.querySelector('.arenas');
//     $targetDiv.appendChild($divPlayer);
// }

// Task #2
// createPlayer('player1', 'Sonya', 68);
// createPlayer('player2', 'Kitana', 85);


// Task #3 (*)
function createPlayer(charClass, person) {
    let $divPlayer = document.createElement('div');
    $divPlayer.classList.add(charClass);

    let $divProgressbar = $divPlayer.appendChild(document.createElement('div'));
    $divProgressbar.classList.add('progressbar');

    let $divLife = $divProgressbar.appendChild(document.createElement('div'));
    $divLife.classList.add('life');
    $divLife.style.width = `${person.hp}%`;

    let $divName = $divProgressbar.appendChild(document.createElement('div'));
    $divName.classList.add('name');
    $divName.innerText = person.name;

    let $divCharacter = $divPlayer.appendChild(document.createElement('div'));
    $divCharacter.classList.add('character');

    let $imgCharacter = $divCharacter.appendChild(document.createElement('img'));
    $imgCharacter.src = person.img;

    document.querySelector('.arenas').appendChild($divPlayer);
}

createPlayer('player1', person1);
createPlayer('player2', person2);