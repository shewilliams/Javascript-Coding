//Return Section
let f;
f = function(){
    return "I am a return value.";
}
f();

let makeFullName, hughessFullName;
makeFullName = function(firstName, lastName){
    firstName + " " + lastName;
}
hughessFullName = makeFullName("Langston", "Hughes");
console.log("Is your name " + hughessFullName + "?");

let makeFullName2, hughessFullName2;
makeFullName2 = function(firstName, lastName){
    return firstName + " " + lastName;
}
hughessFullName2 = makeFullName2("Langston", "Hughes");
console.log("Is your name " + hughessFullName2 + "?");

let turtles, sortedReversedTurtles;
turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
sortedReversedTurtles = turtles.sort().reverse();

let turtlesWithSplinter, reversedTurtlesWithoutSplinter;
turtlesWithSplinter = ["Leonardo", "Donatello", "Raphael", "Michelangelo", "Splinter"];
//results in an error
//reversedTurtlesWithoutSplinter = turtlesWithSplinter.pop().reverse();


//Iterating section
/*
let userString, upperCaseMinusE, upperCasedString;
userString = prompt("What do you want to UPPeRCASe?");
upperCaseMinusE = function(string){
    let result;
    result= "";
    for(let i = 0; i <string.length; i = i +1){
        let letter;
        letter = string[i];
        if(letter === "e"){
            result = letter;
        } else {
            result = letter.toUpperCase();
        }
    }
    return result;
};
upperCaseString = upperCaseMinusE(userString);
$("#upper-response").html(upperCasedString);*/

let userString2, upperCaseMinusE2, upperCasedString2;
userString2 = prompt("What do you want to UPPeRCASe?");
upperCaseMinusE2 = function(string){
    let result2;
    result2 = "";
    for(let i = 0; i < string.length; i = i + 1){
        let letter2;
        letter2 = string[i];
        if (letter2 === "e"){
            //changed line from previous code
            result2 = result2 + letter2;
        } else {
            //changed line from previous code
            result2 = result2 + letter2.toUpperCase()
        }
    }
    return result2;
};
upperCasedString2 = upperCaseMinusE2(userString2);
$("#upper-response2").html(upperCasedString2);

//Array of Objects
upperCaseMinusE = function(string){
    let result, stringArray;
    result = "";
    stringArray = string.split("");
    //forEach() only works on arrays!
    //Converting the string into an array
    stringArray.forEach(function(letter){
        if(letter === "e"){
            result = result + letter;
        } else {
            result = result + letter.toUpperCase();
        }
    })
    return result;
};

//Creating JS Objects
//each turtle has 3 properties
/*let leonardo, donatello, raphael, michelangelo, turtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchucks"};
turtles = [leonardo, donatello, raphael, michelangelo];
weapons = "";
turtles.forEach(function(turtle){
    weapons = weapons + turtle.weapon + " ";
  })
$("#response").html(weapons);*/

//Mapping & Filtering
//.map() for whenever you want to build an array out of another array.
let leonardo, donatello, raphael, michelangelo, allTurtles, weapons, allNames, allColors;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchucks"};
allTurtles = [leonardo, donatello, raphael, michelangelo];
allColors = allTurtles.map(function(turtle){
    return turtle.color;
}).sort().join(", ");
$("#turtle-response").html(allColors);

//returns list of names
let names;
names = allTurtles.map(function(turtle){
    return turtle.name;
}).sort().join(", ");
$("#turtle-response2").html(names);

//returns list of names with 'o'
let namesWithO;
names = allTurtles.map(function(turtle){
    return turtle.name;
}).sort();
namesWithO = names.filter(function(name){
    return name.includes("o");
}).join(", ");
$("#turtle-response3").html(namesWithO);

//Exercises
//Write a function that takes an array of integers and, using .map(),
//returns an array of those integers, doubled. So if we give it [1, 2, 3], 
//we receive, in turn, [2, 4, 6].
let integerArray, double;
integerArray = [1, 2, 3];
double = integerArray.map(function(value){
    return value * 2;
}).sort().join(", ");
$("#q-one").html("The doubled version of integerArray [" + integerArray + "] is [" + double + "].");

//Add functionality to the weapons examples above 
//so that the final result is “bo, katana, nunchaku, and sai.”
//let leonardo, donatello, raphael, michelangelo, allTurtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchucks"};
allTurtles = [leonardo, donatello, raphael, michelangelo];
weapons = allTurtles.map(function(turtle){
    return turtle.weapon;
}).sort().join(", ");
$("#q-two").html(weapons);