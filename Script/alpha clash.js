
function hendelKeyUpPress(event){
    const playerPressKey = event.key;
    //console.log(playerPressKey);
    if(playerPressKey == 'Escape'){
        GameOver();
    };
    // expected key press
    const currentAlphabetPress = document.getElementById('screen');
    const tergtedAlphabet = currentAlphabetPress.innerText;
    const expectedAlphabet = tergtedAlphabet.toLowerCase();
    // console.log(playerPressKey, expectedAlphabet);

    if(playerPressKey === expectedAlphabet){

        const currentScoreElement = getElementValueById('Score');
        const updateValue = currentScoreElement + 1;
         setElementValueById('Score', updateValue);
         removeBackgrountColorById(expectedAlphabet);
         countinueGame(); 
        //  Score update 
        // const currentScoreElement = document.getElementById('Score');
        // const currentScourText = currentScoreElement.innerText;
        // const currentScourNumber = parseInt(currentScourText);
       
        
        // const newScour = currentScourNumber + 1;
       
        // currentScoreElement.innerText =  newScour;

    }
    else{
        /*const lifeElement = document.getElementById('Life');
        const lifeText = lifeElement.innerText;
        const lifeNumber = parseInt(lifeText);
        // console.log(lifeNumber);
        const newLife = lifeNumber - 1;
        // console.log(newLife);
        lifeElement.innerText = newLife;*/
        const life = getElementValueById('Life');
        const updateLife = life - 1;
        setElementValueById('Life', updateLife);
        if(updateLife === 0){
            GameOver();
        }
    };
};
document.addEventListener('keyup',hendelKeyUpPress);


function countinueGame(){
    const alphabets = getARandomAlphabets();
    // console.log(alphabets);
    const screen = document.getElementById('screen');
    screen.innerText = alphabets;
    setBackgrountColorById(alphabets);
};
function GameOver(){
    hideElementById('Play-ground');
    showElementById('current-score');
    // setElementValueById('finel-point', updateValue);
    const lastScor = document.getElementById('Score');
    const updateScour = lastScor.innerText;
    // console.log(updateScour);
    setElementValueById('finel-point', updateScour);

    // clear alphabet color play Ground
    const lastAlphabet = getElementTextValueById('screen');
    removeBackgrountColorById(lastAlphabet);
};

function play(){
    hideElementById('home');
    showElementById('Play-ground');
    hideElementById('current-score');
    setElementValueById('Score', 0);
    setElementValueById('Life', 5);
    countinueGame();
};