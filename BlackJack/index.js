/* Create 2 variables (firstCard and secondCard)
Set their values to a random number between 2-11
Create a variable, sum and set it to the sum of the two cards.
 */

let firstCard;
let firstCardEl = document.getElementById("firstCard-el");

let secondCard;
let secondCardEl = document.getElementById("secondCard-el");

let thirdCard;
let thirdCardEl = document.getElementById("thirdCard-el");

let celebrate = "You have won! Congratulations!";
let sum = firstCard + secondCard;

function chooseFirstCard() {
    firstCard= parseInt(Math.floor((Math.random()*10)+2));
    firstCardEl.textContent += firstCard;
}

function chooseSecondCard() {
    secondCard=parseInt(Math.floor((Math.random()*10)+2));
    secondCardEl.textContent += secondCard;
}

function chooseThirdCard() {
    thirdCard=Math.floor((Math.random()*10)+2);
    thirdCardEl.textContent += thirdCard;
    console.log("The third card is: " + thirdCard);
    sum += parseInt(thirdCard);
    console.log("Sum: "+ sum);
}

function hidden(){
    let thirdCardDiv = document.getElementById("thirdCard-div");
    if (thirdCardDiv.style.display === "none") {
        thirdCardDiv.style.display = "block";
    } else {
        thirdCardDiv.style.display = "none";
    }
}

function play(){
    console.log("First card: " + firstCard);
    console.log("Second card: " + secondCard);
    console.log("Sum is: " + sum);
    if(parseInt(sum) === 21){
        console.log(celebrate);
    } else if (parseInt(sum) > 21) {
        console.log("You have lost.");
    } else {
        hidden();
        console.log("else");
    }
}
/*

function reset(){
    firstCard = null;
    secondCard = null;
    thirdCard = null;
    firstCardEl.textContent = "The first card is: ";
    secondCardEl.textContent = "The second card is: ";
    thirdCardEl.textContent = "The third card is: ";
    resetHidden();
}

function hidden(){
    let thirdCardDiv = document.getElementById("thirdCard-div");
    console.log("thirdCardDiv is " + thirdCardDiv);
    let isHidden = thirdCardDiv.getAttribute("hidden");
    console.log("isHidden: " + isHidden);
    if (isHidden) {
        thirdCardDiv.removeAttribute("hidden");
        console.log("hidden removed")
    } else {
        thirdCardDiv.setAttribute("hidden", "hidden");
        console.log("hidden set")
    }
}

function resetHidden(){
    let thirdCardDiv = document.getElementById("thirdCard-div");
    console.log("thirdCardDiv in resetHidden is " + thirdCardDiv);
    let isHidden = thirdCardDiv.getAttribute("hidden");
    console.log("isHidden in resetHidden is: " + isHidden);
    if (isHidden ==="") {
        thirdCardDiv.setAttribute("hidden", "hidden");
        console.log("hidden set 2x")
    }
}
 */