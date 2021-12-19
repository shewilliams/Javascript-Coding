//Parameters Section
/*let userInput;
userInput = prompt("What do you want to have for dinner?", "Type your answer here.");

let promptText, defaultText, userInput2;
promptText = "What do you want to have for dinner?";
defaultText = "Type your answer here.";
userInput2 = prompt(promptText, defaultText);*/

//Numbers for a Function
let tipCalculator;
tipCalculator = function(total, tipRate){
    //Step 1: Calculate percentage of the total for tip
    let tipAmount;
    tipAmount = tipRate * total;
    //change #response to tell the tip amount
    $("#response").html("Your tip is $" + tipAmount + ".");
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

 let global2;
 global2 = "🌎";
 if(true){
     let blocky;
     blocky = "📓";
     console.log("global is " + global2);
     console.log("blocky is " + blocky);
     console.log("Wait, the value of blocky is really " + blocky + "?");
 }


let global3;
global3 = "🌎";
let showMeABurrito = function(){
    let burrito;
    burrito = "🌯";
    global3 = "I'm global!";
    console.log("global is " + global3);
    console.log("burrito is " + burrito);
    console.log("Wait, the value of burrito is really " + burrito + "?");
}
showMeABurrito();
console.log(global3);


//Exercise
//Add functionality to the tip calculator so that you can enter “20” or “.2”
//for 20%, and the calculator understands the difference.
let tipCalculator2;
tipCalculator2 = function(total, tipRate){
    //Step 1: Calculate percentage of the total for tip
    let tipAmount;
    tipRate = prompt("Enter in the tip rate.");
    tipRate = tipRate / 100
    tipAmount = tipRate * total;
    //change #response to tell the tip amount
    $("#q-one").html("The tip rate you entered is " + tipRate + ". Your tip is $" + tipAmount+ ".");
}
 tipCalculator2(50.00, 0.2);