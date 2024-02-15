// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('playground');
//     playGround.classList.remove('hidden');
// }

// optional system
function handleKeyboardEvent(event){
    const keyboardPressed = event.key;
    
if(keyboardPressed === 'Escape'){
    gameOver();
}

const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();


if(keyboardPressed === expectedAlphabet){
    console.log('you win');
    console.log('correct', expectedAlphabet)

    const currentScore = getTextElementValueById('current-score');
    console.log(currentScore);
    const newScore = currentScore + 1;
    setTextElementValueById('current-score', newScore);




    // .........................................................

    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;
    removeBackgroundColor(expectedAlphabet);
    continueGame();
    
}
else{
    console.log('you lost');
    const currentLife = getTextElementValueById('current-life');
    const newLife = currentLife - 1;
    setTextElementValueById('current-life', newLife);

    if(newLife === 0){
        gameOver();
            }
        }

    // ......................................................
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;



}

document.addEventListener('keyup', handleKeyboardEvent);

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet);
    
}


function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('playground');


    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    
    continueGame();
    
}

function gameOver(){
    hideElementById('playground');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', lastScore);
const currentAlphabet = getElementTextById('current-alphabet');
removeBackgroundColor(currentAlphabet);
}

