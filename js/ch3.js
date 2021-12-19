//If Statements section
if(true){
    console.log("Brilliant choice!")
}

let userInput;
userInput = "burrito";
if(userInput === "burrito"){
    console.log(userInput + "? Brilliant choice!")
}

let userInput2;
userInput2 = "samosa";
if(userInput2 !== "burrito"){
    console.log(userInput2 + "? Don't you want a burrito?");
}

let userInput3;
userInput3 = "samosa";
if(userInput3 === "burrito"){
    console.log(userInput3 + "? Brilliant choice!");
} else{
    console.log(userInput3 + "? Don't you want a burrito?");
}

//Embedding JS in a webpage
//in Chapter 3 HTML file
alert("scripts.js has loaded!");
$("#response1").html("scripts.js has loaded!");

/*let userInput4;
userInput4 = "samosa";
if(userInput4 === "burrito"){
    $("#response2").html(userInput4 + "? Brilliant choice!");
} else {
    $("#response2").html(userInput4 + "? Don't you want a burrito?");
}*/

let userInput5;
userInput5 = prompt("What do you want to have for dinner?", "Type your answer here.");
if(userInput5 === "burrito"){
    $("#response").html(userInput5 + "? Brilliant choice!");
} else {
    $("#response").html(userInput5 + "? Don't you want a burrito?");
}

/*Infinite loop!
//While loops
while (0 < 1){
    console.log("Zero is less than one.");
}*/

let i;
i = 1;
while(i < 4){
    $("#while-loop").append("<br />"+ i)
    i = i + 1
}

//For loops
for(let k = 1; k < 6; k = k + 1) {
    $("#for-loop").append("<br />" + k);
}

//Exercises
//Write a program so that when you reload your page, 
//it asks for a number and prints all the numbers from 1 to it, including it.
let j, response;
response = prompt("Enter a number.")
j = 1;
while(j <= response){
    $("#q-one").append("<br />" + j)
    j = j + 1
}

//Building on that program, create it so that instead of printing the number, 
//it prints something like: This is the #response div. 1 is odd. 2 is even. 3 is odd
for (j = 1; j <= response; j = j + 1){
    if(j % 2 === 0){
        $("#q-two").append("<br />" + j + " is even.")
    } else {
        $("#q-two").append("<br />" + j + " is odd.")

    }
}

//Building on the previous program, have it print the same, 
//except without that ugly “This is the #response div.” line.
for (j = 1; j <= response; j = j + 1){
    if(j % 2 === 0){
        $("#q-three").append("<br />" + j + " is even.")
    } else {
        $("#q-three").append("<br />" + j + " is odd.")

    }
}

//Write down what seem to be common mistakes you are making. 
//Are you forgetting to add some aspect of the JavaScript syntax?
//Comments in between HTML, CSS, and JS are all different.
