let $divArenas = document.querySelector('.arenas');
let $randomButton = document.querySelector('.button');
let $divControl = document.querySelector('.control');

const person1 = {
    player: 1,
    name: 'Sonya',
    hp: 100,
    img: 'https://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['gun', 'knife', 'spear'],
    attack: function () {
        console.log(this.name + ' Fight...');
    },
}

const person2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'https://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['spear', 'machete', 'hook'],
    attack: function () {
        console.log(this.name + ' Fight...');
    },
}

function createNewElement(tagName, className) {
    let $elem = document.createElement(tagName);
    if (className) {
        $elem.classList.add(className);
    }

    return $elem;
}

function createPlayer(person) {
    let $divPlayer = createNewElement('div', `player${person.player}`);
    let $divProgressbar = createNewElement('div', 'progressbar');
    let $divLife = createNewElement('div', 'life');
    $divLife.style.width = `${person.hp}%`;
    let $divName = createNewElement('div', 'name');
    $divName.innerText = person.name;
    let $divCharacter = createNewElement('div', 'character');
    let $imgCharacter = createNewElement('img');
    $imgCharacter.src = person.img;

    $divArenas.appendChild($divPlayer);
    $divPlayer.appendChild($divProgressbar);
    $divProgressbar.appendChild($divLife);
    $divProgressbar.appendChild($divName);
    $divPlayer.appendChild($divCharacter);
    $divCharacter.appendChild($imgCharacter);
}

function hitPower() {
    let a = Math.ceil(Math.random() * 20);

    return a;
}

function changePlayerHealth(person) {
    let $divPlayerLife = document.querySelector(`.player${person.player} .life`);
    let $divPlayerCharacter = document.querySelector(`.player${person.player} .character`);
    person.hp -= hitPower();
    if (person.hp <= 0) {
        $divPlayerLife.style.width = '0';
        $divArenas.appendChild(playerWin(person));
        $randomButton.disabled = true;
        $divPlayerCharacter.classList.add('character-loser');
        createButtonForNewGame();
    } else {
        $divPlayerLife.style.width = `${person.hp}%`;
    }
}

function playerWin(person) {
    let $divLoseTitle = createNewElement('div', 'loseTitle');
    if (person == person1) {
        $divLoseTitle.innerText = `${person2.name} wins!`
    } else {
        $divLoseTitle.innerText = `${person1.name} wins!`
    }

    return $divLoseTitle;
}

function createButtonForNewGame() {
    let $buttonNewGame = createNewElement('button', 'buttonNG');
    $buttonNewGame.innerText = 'new game';
    $divControl.appendChild($buttonNewGame);
    $divControl.style.width = '260px';
    $buttonNewGame.onclick = function () {
        person1.hp = 100;
        person2.hp = 100;
        let $divPlayer1Life = document.querySelector(`.player1 .life`);
        let $divPlayer2Life = document.querySelector(`.player2 .life`);
        $divPlayer1Life.style.width = `100%`;
        $divPlayer2Life.style.width = `100%`;
        let $divCharacter1 = document.querySelector('.player1 .character');
        let $divCharacter2 = document.querySelector('.player2 .character');
        $divCharacter1.classList.remove('character-loser');
        $divCharacter2.classList.remove('character-loser');
        $randomButton.disabled = false;
        if ($buttonNewGame.parentNode) {
            $buttonNewGame.parentNode.removeChild($buttonNewGame);
        }
        let $loseTitle = document.querySelector('.loseTitle');
        if ($loseTitle.parentNode) {
            $loseTitle.parentNode.removeChild($loseTitle);
        }
    }
}

// document.querySelector('.buttonNG').onclick = function () {
//     person1.hp = 100;
//     person2.hp = 100;
//     let $divPlayer1Life = document.querySelector(`.player1 .life`);
//     let $divPlayer2Life = document.querySelector(`.player2 .life`);
//     $divPlayer1Life.style.width = `100%`;
//     $divPlayer2Life.style.width = `100%`;
//     $divCharacter.classList.remove('character-loser');
// }



$randomButton.addEventListener('click', function () {
    changePlayerHealth(person1);
    if (person1.hp > 0) {
        changePlayerHealth(person2);
    }
});

createPlayer(person1);
createPlayer(person2);