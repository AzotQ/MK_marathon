let $divArenas = document.querySelector('.arenas');

const person1 = {
    player: 1,
    name: 'Sonya',
    hp: 68,
    img: 'https://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['gun', 'knife', 'spear'],
    attack: function () {
        console.log(this.name + ' Fight...');
    },
}

const person2 = {
    player: 2,
    name: 'Kitana',
    hp: 85,
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

createPlayer(person1);
createPlayer(person2);