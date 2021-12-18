//Parameters Section
let userInput;
userInput = prompt("What do you wannt to have for dinner?", "Type your answer here.");

let promptText, defaultText, userInput;
promptText = "What do you want to have for dinner?";
defaultText = "Type your answer here.";
userInput = prompt(promptText, defaultText);

//Numbers for a Function
let tipCalculator;
tipCalculator = function(total, tipRate){
    //Step 1: Calculate percentage of the total for tip
    let tipAmount;
    tipAmount = tipRate * total;
    //change #response to tell the tip amount
    $("#response").html("Your tip is $" + tipAmount+ ".");
}
 tipCalculator(50.00, 0.2);

 //Scope Section
 let global;
 global = "🌎";
 if(true){
     console.log(global);
 };

 let globalFunction;
 globalFunction = function(){
     console.log(global);
 };
 globalFunction();

 let global;
 global = "🌎";
 if(true){
     let blocky;
     blocky = "📓";
     console.log("global is " + global);
     console.log("blocky is " + blocky);
 }
 console.log("Wait, the value of blocky is really " + blocky + "?");

let global;
global = "🌎";
let showMeABurrito = function(){
    let burrito;
    burrito = "🌯";
    global = "I'm global!";
    console.log("global is " + global);
    console.log("burrito is " + burrito);
}
showMeABurrito();
console.log(global);
console.log("Wait, the value of burrito is really ") + burrito + "?");

//Exercise
//Add functionality to the tip calculator so that you can enter “20” or “.2”
//for 20%, and the calculator understands the difference.
let tipCalculator;
tipCalculator = function(total, tipRate){
    //Step 1: Calculate percentage of the total for tip
    let tipAmount;
    tipRate = prompt("Enter in the tip rate.");
    if(tipRate){

    } else {

    }
    
    tipAmount = tipRate * total;
    //change #response to tell the tip amount
    $("#response").html("Your tip is $" + tipAmount+ ".");
}
 tipCalculator(50.00, 0.2);