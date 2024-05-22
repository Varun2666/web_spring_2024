//alert("javascript works")
function magic8ball() {
    askAQuestion();
    Shake();
    getAFortune();
}
function askAQuestion () {
    //this does nothing
    //alert("Ask a yes or no question to recieve a fortune")
}
function Shake() {
    //alert ("I am shaking")
}
function getAFortune() {
    //random
    //to choose an answer
    //list of answers
    var fortunes = ["yes","no","maybe"]
    var num = randomNumber(fortunes.length)
    displayFortune(fortunes[num])
}
function displayFortune(fortune) {
    //alert(fortune)
    document 
    .getElementById("fortune")
    .innerHTML = fortune
}
function randomNumber(n) {
    return Math.floor (Math.random() * n)
}