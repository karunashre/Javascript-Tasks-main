function reverseNumber(num) {
    const reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num);
}

function handleReverseNumber() {
    const input = parseInt(document.getElementById('inputNumber').value);
    const reversedNumber = reverseNumber(input);
    document.getElementById('result').innerText = reversedNumber;
}
const x = 32243;
console.log(reverseNumber(x)); 
