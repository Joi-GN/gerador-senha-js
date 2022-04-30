// Elements
const displayOutput = document.getElementById("display");
const uppercaseOption = document.getElementById("uppercase");
const lowercaseOption = document.getElementById("lowercase");
const symbolOption = document.getElementById("symbol");
const numberOption = document.getElementById("number");
const copyPopup = document.getElementById("copy-popup");
const optionPopup = document.getElementById("option-popup");
const copyButton = document.getElementById("copy-btn");
const generateButton = document.getElementById("generate-btn");

// Variables
const upperLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const lowerLetters = 'qwertyuiopasdfghjklzxcvbnm';
const numbers = '1234567890';
const symbols = '!@#$%&*()_+{}[]/?;<>-=,.:\'\"';


generateButton.addEventListener('click', generatePassword);

function generatePassword() {
    if (!uppercaseOption.checked && !lowercaseOption.checked && !symbolOption.checked && !numberOption.checked) {
        toggleClassHidden(optionPopup);

    }else{
        let password = [];
        const characters = document.getElementById("pw-length").value;

        getUpperLetter(password);
        getLowerLetter(password);
        getSymbol(password);
        getNumber(password);

        while (password.length < characters) {
            password.push(getRandomChar());
        }

        password.sort(()=> 0.5-Math.random());
        displayOutput.value = password.join("");
    }
}

function toggleClassHidden(element){
    setTimeout(() => {
        element.classList.toggle('hidden');
    }, 2000);
    element.classList.toggle('hidden');
}

function getUpperLetter(arr){
    if(uppercaseOption.checked){
        arr.push(upperLetters[Math.floor(Math.random()*upperLetters.length)]);   
    }
}

function getLowerLetter(arr){
    if(lowercaseOption.checked){
        arr.push(lowerLetters[Math.floor(Math.random()*lowerLetters.length)]);  
    }
}

function getSymbol(arr){
    if(symbolOption.checked){
        arr.push(symbols[Math.floor(Math.random()*symbols.length)]);   
    }
}

function getNumber(arr){
    if(numberOption.checked){
        arr.push(numbers[Math.floor(Math.random()*numbers.length)]);
    }
}

function getRandomChar(){
    let chars = [];

    getUpperLetter(chars);
    getLowerLetter(chars);
    getSymbol(chars);
    getNumber(chars);

    return chars[Math.floor(Math.random()*chars.length)];
}

copyButton.addEventListener('click', copyToClipboard)

async function copyToClipboard() {
    if (displayOutput.value.length > 0) {
        await navigator.clipboard.writeText(displayOutput.value);
        toggleClassHidden(copyPopup);   
    }
}


