//Numbers Section
9
1.5
console.log(9)

console.log("Hello, World!");

//String Section
"Hello, World!";
console.log("Hello, World!");
"Worldd, I just wanted to say \"Hi!\" 9 times!";
console.log("World, I just wanted to say \"Hi\" 9 time!");

//Boolean Section
true;
false;
9 === 9;
9 === "Hello, World!";

//Calculator Section
2 + 3;
2 - 3;
2 * 3;
2 / 3;

2 + 3 * 6 === (2 + 3) * 6;
2 + 3 * 6 < (2 + 3) * 6;
2 > 2;
2 >= 2;
2 < 2;
2 <= 2;

"I had a thought, but..." + "Oh yeah, I remember. Falafel on Fridays!";

//A Calculator + Variables
let burrito;
burrito = "Basically the best food around.";
console.log(burrito);

let magicNumber, secretNumber;
magicNumber = 9;
secretNumber = 10;
secretNumber + magicNumber;
secretNumber === magicNumber;
secretNumber > magicNumber
secretNumber = secretNumber + 1;
console.log(secretNumber);

let tipRate, bill, billPlusTip;
tipRate = 0.20;
bill = 10.00;
billPlusTip = bill + (tipRate * bill);
console.log(billPlusTip);

let question, burritos, answer;
question = "What is the best food around?\n";
burritos = "Delicious burritos";
answer = burritos + "are clearly the best!";
console.log(question, answer);

typeof question;
typeof magicNumber;
typeof 2;
let isItTrue;
isItTrue = 1 === 1;
typeof isItTrue;
typeof badTastingBurrito;

//Exercises
//Get console.log() to log a string that includes a backslash.
console.log("Why hello there \"stranger\"!");

//What happens when you surround true or false with double quotes? Are they still booleans?
console.log("true");
console.log("false");
console.log(true);
console.log(false);

//add a string to a number
console.log("hello" + 2);

//add a number to a string
demo = console.log(2 + "hello");

//Use the statements to find billPlusTip above but have the response from
//console.log() be “You should pay $12 because the service was good.”
let tipRate2, bill2, billPlusTip2;
tipRate2 = 0.20;
bill2 = 10.00;
billPlusTip2 = bill2 + (tipRate2 * bill2);
console.log("You should pay $" + billPlusTip2 + " because the service was good.");
