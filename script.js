const apiKey = process.env.API_KEY;
console.log(apiKey);

let button = document.getElementById("testButton");
let text = document.getElementById("change");
button.addEventListener('click',function(){
    text.innerHTML= "I CHANGED THE TEXT WOOO";

});
