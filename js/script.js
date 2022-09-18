const qwerty = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');
const overlay = document.getElementById('overlay');
const start = document.querySelector('.btn__reset');

let missed = 0;

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
            const tries = document.querySelectorAll('.tries');
            if(missed > 0) {
                tries[missed].src = 'images/lostHeart.png';
            }
            missed++;
        } else {
        checkLetter(clicked.target.textContent);
    }
    }
})

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
}

function checkWin() {
    let letter = document.querySelectorAll('.letter');
    let show = document.querySelectorAll('.show');

    if(letter.length === show.length) {
        overlay.classList.add('win');
        overlay.style.display = 'flex';
    } else {
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
    }
}

let phraseSplit = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseSplit);