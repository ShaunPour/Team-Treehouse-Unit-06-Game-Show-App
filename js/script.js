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
    }
})

function getRandomPhraseAsArray(arr) {
    let randomNum = Math.floor((Math.random() * phrases.length) + 1);
    let splitPhrase = arr[randomNum].split('');
    return splitPhrase;
}

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
    let letter = document.querySelectorAll('li');
    let foundLetter = null;

    for (i = 0; i < letter.length; i++) {
        if (letterIn.textContent === foundLetter[i].textContent) {
            letter[i].classList.add('show');
            foundLetter = letterIn.textContent;
            console.log(letterIn.target);
        }
    } 
        return foundLetter;

};

let phraseSplit = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseSplit);