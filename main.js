let $divArenas = document.querySelector('.arenas');
let $randomButton = document.querySelector('.button');

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
    person.hp -= hitPower();
    if (person.hp <= 0) {
        $divPlayerLife.style.width = '0';
        $divArenas.appendChild(playerWin(person));
        $randomButton.disabled = true;
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


$randomButton.addEventListener('click', function () {
    changePlayerHealth(person1);
    if (person1.hp > 0) {
        changePlayerHealth(person2);
    }
});

createPlayer(person1);
createPlayer(person2);