//Arrays Section
let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];
$("#test").html(arrayOfStrings[2]);

//Objects Section
let myBurritoObject;
myBurritoObject = {
    tortilla: "wheat",
    guacamole: true,
    beans: "pinto",
    habaneroSauceSquirts: 3
};
$("#response").html(myBurritoObject["tortilla"]);
$("#response").html(myBurritoObject.tortilla);

let arrayOfStrings;
arrayOfStrings = ["a", "b", "c"];
$("#response").html(arrayOfStrings.length);

//Methods Section
let myHabaneroSauceSquirts, myBurritoObject;
myHabaneroSauceSquirts = 3;
myBurritoObject = {
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
$("#response").html("Your burrito has " + myBurritoObject.habaneroSauceSquirts + " squirts of habanero.");
myBurritoObject.spiciness();

let turtles, sortedTurtles, reversedTTurtles, turtleNames;
turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
sortedTurtles = turtles.sort();
reversedTTurtles = turtles.reverse();
turtleNames = turtles.join(" ");
turtles.push("Splinter");
turtles.pop();

//Strings as Arrays
let string, firstLetter, stringLength;
string = "This is just a string.";
firstLetter = string[0];
stringLength = string.length;
let uppercaseString, replacedString;
uppercaseString = string.toUpperCase();
replacedString = string.replace("string", "pipe");

//Exercises
//Write a function that always returns the last item in whatever array you pass it.
var theLastOne = [1,2,3,4,5,'purple'];
var last_element = theLastOne[theLastOne.length - 1];
    console.log(last_element)

//Numbers also have methods and properties. 
//Look them up at MDN and change your webpage so that it 
//asks for a number and tells you if it is an integer or not.
let numberResponse;
isItAnInteger(){
    numberResponse = prompt("Enter a number");
    if(numberResponse.isItAnInteger()){
        alert("It's an integer!");
    } else {
        alert("It's not an integer!");
    }
};

