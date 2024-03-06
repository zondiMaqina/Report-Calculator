let reaction = 80;
let memory = 92;
let verbal = 61;
let visual = 72;

let total = reaction + memory + verbal + visual; 
let totalSum = total / 400 * 100;

var result_shown = false;

let reactionElement = document.getElementById("reaction");
let memoryElement = document.getElementById("memory");
let verbalElement = document.getElementById("verbal");
let visualElement = document.getElementById("visual");
let fullResultElement = document.getElementById("bigNr");

var storeElements = [
    reactionElement,
    memoryElement,
    verbalElement,
    visualElement,
    fullResultElement
]

var storeResults = [
    reaction,
    memory,
    verbal,
    visual,
    totalSum
]

function results(){
    result_shown = true

    storeElements[0].textContent = storeResults[0];
    storeElements[1].textContent = storeResults[1];
    storeElements[2].textContent = storeResults[2];
    storeElements[3].textContent = storeResults[3];
}


function next(){
    if (result_shown){
        storeElements[4].textContent = Math.round(storeResults[4])
    } else{
        storeElements[4].textContent = `.`
    }
}