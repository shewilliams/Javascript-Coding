//If Statements section
if(true){
    console.log("Brilliant choice!")
}

let userInput;
userInput = "burrito";
if(userInput === "burrito"){
    console.log("Brilliant choice!")
}

let userInput;
userInput = "samosa";
if(userInput !== "burrito"){
    console.log("Don't you want a burrito?");
}

let userInput;
userInput = "samosa";
if(userInput === "burrito"){
    console.log("Brilliant choice!");
} else{
    console.log("Don't you want a burrito?");
}

//Embedding JS in a webpage
//in Chapter 3 HTML file
alert("scripts.js has loaded!");
$("#response").html("scripts.js has loaded!");

let userInput;
userInput = "samosa";
if(userInput === "burrito"){
    $("#response").html("Brilliant choice!");
} else {
    $("#response").html("Don't you want a burrito?");
}

let userInput;
userInput = prompt("What do you want to have for dinner?", "Type your answer here.");
if(userInput === "burrito"){
    $("#response").html("Brilliant choice!");
} else {
    $("#response").html("Don't you want a burrito?");
}

//While loops
while (0 < 1){
    console.log("Zero is less than one.");
}

let i;
i = 4;
while(i<4){
    $("#response").append("<br /> + i")
    i = i + 1
}

//For loops
for(let i = 1; i < 4; i = i + 1) {
    $("#response").append("<br />" + i);
}

//Exercises
//Write a program so that when you reload your page, 
//it asks for a number and prints all the numbers from 1 to it, including it.
let i, response;
i = 0;
while(i < response){
    $("#response").append("<br /> + i")
    i = i + 1
}

//Building on that program, create it so that instead of printing the number, 
//it prints something like: This is the #response div. 1 is odd. 2 is even. 3 is odd
while(i < response){
    $("#response").append("<br /> + i")
    i = i + 1
    if (response % 2 == 0){
        console.log(" is even.");
    }
    else{
        console.log("is even.");
    }
}

//Building on the previous program, have it print the same, 
//except without that ugly “This is the #response div.” line.
while(i < response){
    $("#response").append("<br /> + i")
    i = i + 1
    if (response % 2 == 0){
        console.log(" is even.");
    }
    else{
        console.log("is even.");
    }
}

//Write down what seem to be common mistakes you are making. 
//Are you forgetting to add some aspect of the JavaScript syntax?
//Comments in between HTML, CSS, and JS are all different.
