const btnel = document.getElementById('btn');
const ipid = document.getElementById('randomPassword');
const capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallLetter = "abcdefghijklmnopqrstuvwxyz";
const symbol = "~!@#$%^&*(_+)";
const number = "0123456789"
const length = 12;
const allChar = capitalLetter + smallLetter + symbol + number + length;
btnel.addEventListener('click', function () {
    let x = "";
    x += capitalLetter[Math.floor(Math.random() * capitalLetter.length)];
    x += smallLetter[Math.floor(Math.random() * smallLetter.length)];
    x += symbol[Math.floor(Math.random() * symbol.length)];
    x += number[Math.floor(Math.random() * number.length)];
    while (length > x.length) {
        x += Math.floor(Math.random() * allChar.length);
    }

    ipid.value = x;
}) 
const copy = document.getElementById('image');
copy.addEventListener("click" , function()
{
    ipid.select();
    document.execCommand("copy");
})