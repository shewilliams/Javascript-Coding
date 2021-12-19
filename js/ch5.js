//Arrays Section
let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];
$("#letters").html("The position of arrayOfStrings is " + arrayOfStrings[2] + ".");

//Objects Section
let myBurritoObject;
myBurritoObject = {
    tortilla: "wheat",
    guacamole: true,
    beans: "pinto",
    habaneroSauceSquirts: 3
};
//$("#response1").html("The object of myBurritoObject is " + myBurritoObject["tortilla"] + ".");
$("#response1").html("The object of myBurritoObject is " + myBurritoObject.tortilla + ".");

let arrayOfStrings2;
arrayOfStrings2 = ["a", "b", "c"];
$("#response").html(arrayOfStrings2.length);

//Methods Section
let myHabaneroSauceSquirts, myBurritoObject2;
myHabaneroSauceSquirts = 3;
myBurritoObject2 = {
    tortilla: "wheat",
    guacamole: true,
    beans: "pinto",
    habaneroSauceSquirts: myHabaneroSauceSquirts,
    spiciness: function(){
        if(myHabaneroSauceSquirts > 0){
            alert("This is a spicy burrito!");
        } else{
            alert("This is a mild burrito.");
        }
    }
};
$("#response").html("Your burrito has " + myBurritoObject2.habaneroSauceSquirts + " squirts of habanero.");
myBurritoObject2.spiciness();

let turtles, sortedTurtles, reversedTTurtles, turtleNames;
turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
sortedTurtles = turtles.sort();
reversedTTurtles = turtles.reverse();
turtleNames = turtles.join(" ");
turtles.push("Splinter");
turtles.pop();
console.log(turtles);

//Strings as Arrays
let string, firstLetter, stringLength;
string = "This is just a string.";
firstLetter = string[0];
stringLength = string.length;
let uppercaseString, replacedString;
uppercaseString = string.toUpperCase();
replacedString = string.replace("string", "pipe");
console.log(string);
console.log(replacedString);

//Exercises
//Write a function that always returns the last item in whatever array you pass it.
let theLastOne;
theLastOne = function(weirdArray){
    if(weirdArray == null){
        return 0;
    } else {
        return $("#q-one").html("The last element of weirdArray is [" + weirdArray[weirdArray.length - 1] + "].");
    }
    
}; 
console.log(theLastOne(["weird", "weirdest", "weirder", "not weird"]));


//Numbers also have methods and properties. 
//Look them up at MDN and change your webpage so that it 
//asks for a number and tells you if it is an integer or not.
let isItAnInteger;
let numberResponse;
numberResponse = prompt("Enter a number.");
numberResponse = Number(numberResponse);
isItAnInteger = function(){
    if(Number.isInteger(numberResponse)){
        return $("#q-two").html("You entered " + numberResponse + ". It's an integer!");
    } else {
        return $("#q-two").html("You entered " + numberResponse + ". Sorry, that number is not an integer!");
    }
};
console.log(isItAnInteger());
