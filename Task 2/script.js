function alphabetizeString(str) {
            return str.split('').sort().join('');
}

function handleAlphabetize() {
            const input = document.getElementById('inputString').value;
            const sortedString = alphabetizeString(input);
            document.getElementById('result').innerText = sortedString;
}


const example = 'webmaster';
console.log(alphabetizeString(example)); 
