function hideElementById(ElementId){
    const element = document.getElementById(ElementId);
    element.classList.add('hidden');
};
function showElementById(ElementId){
    const element = document.getElementById(ElementId);
    element.classList.remove("hidden");
};
function getARandomAlphabets(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
};
function setBackgrountColorById(ElementId){
    const element = document.getElementById(ElementId);
    element.classList.add('bg-orange-300');
};
function removeBackgrountColorById(ElementId){
    const element = document.getElementById(ElementId);
    element.classList.remove('bg-orange-300');
};

function getElementTextValueById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
};
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    const value = parseInt(text);
    return value;
};
function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
};