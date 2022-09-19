const qwerty = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');
const overlay = document.getElementById('overlay');
const start = document.querySelector('.btn__reset');
const title = document.querySelector('.title');

let missed = 0;
const tries = document.querySelectorAll('.tries img');
let phrases = ['blue in the face', 'ignorance is bliss', 'knee jerk reaction',
'a weight off my shoulders', 'my Achilles heel', 'cog in the machine',
'hold your horses', 'burning the midnight oil', 'upset the apple cart',
'a bird in the hand', 'a bite at the cherry'];

start.addEventListener('click', () => {
    overlay.style.display = 'none';
});

qwerty.addEventListener('click', (clicked) => {
    if(clicked.target.tagName === 'BUTTON') {
        clicked.target.className = 'chosen';
        clicked.target.disabled = true;
        if(checkLetter(clicked.target.textContent) == null) {
            tries[missed].src = 'images/lostHeart.png';
            missed++;
        } else {
        checkLetter(clicked.target.textContent);
    }
    checkWin();
    }
});

const getRandomPhraseAsArray = arr => arr[Math.floor(Math.random() * arr.length)]
.split('');



function addPhraseToDisplay(arr) {
    for(let i = 0; i < phraseSplit.length; i++) {
    let phraseItem = document.createElement('li');
    if(phraseSplit[i] === ' ') {
        phraseItem.classList.add('space');
    } else {
    phraseItem.classList.add('letter');
}
    phraseItem.innerHTML = phraseSplit[i];
    phrase.appendChild(phraseItem);
}
}

function checkLetter(letterIn) {
    let letter = document.querySelectorAll('.letter');
    let foundLetter = null;
    for(let i = 0; i < letter.length; i++) {
        if(letter[i].textContent === letterIn) {
            foundLetter = letterIn;
            letter[i].classList.add('show');
        }
    }
    return foundLetter;
}

function checkWin() {
    let letter = document.querySelectorAll('.letter');
    let show = document.querySelectorAll('.show');
    let win = null;

    if(letter.length === show.length) {
        overlay.classList.add('win');
        overlay.style.display = 'flex';
        title.innerText = 'You Win!';
        start.innerText = 'Play Again';
        win = true;
resetGame();
        missed = 0;
        // for(let i = 0; i < phraseReset.length; i++) {
        //     phraseReset[i].remove();
        // }
        // phraseSplit(getRandomPhraseAsArray);
        // addPhraseToDisplay(phraseSplit);
        return win;
    } else if(missed > 4) {
        title.innerText = 'You Lose!';
        start.innerText = 'Play Again';
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
        win = false;
        resetGame();
        missed = 0;
        // for(let i = 0; i < phraseReset.length; i++) {
        //     phraseReset[i].remove();
        // }
        // phraseSplit(getRandomPhraseAsArray);
        // addPhraseToDisplay(phraseSplit);
        return win;
    }
}

let phraseSplit = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseSplit);

function resetGame() {
    let keyboardBtn = document.querySelectorAll('#qwerty .keyrow button');
    let phraseReset = document.querySelectorAll('#phrase ul li');

    for(let i = 0; i < keyboardBtn.length; i++) {
        keyboardBtn[i].classList.remove('chosen');
        keyboardBtn[i].disabled = false;
        for(let j = 0; j < tries.length; j++) {
        tries[j].src = 'images/liveHeart.png';
    }
    }
}