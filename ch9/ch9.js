//Turning Prologue into data
$("#prologue").html("<p>The text of the Prologue will go here.</p>");
$("#glosses").html("<p>The glosses will go here.</p>");

let prologueText, line1, line2, line3, line17, line18;
prologueText = [line1, line2, line3, line17, line18];

let line1;
line1 = ["Whan", "that", "Aprill,", "with", "his", "shoures", "soote"];

let line1;
line1 = [{text: "Whan"}, {text: "that"}, {text: "Aprill,"}, {text: "with"},
        {text: "his"}, {text: "shoures"}, {text: "soote"}]; 

let line1TextArray;
line1TextArray = line1.map(function(word){
    return word.text;
});       

$("#glosses").html("<p>The glosses will go here.</p>");
let line1, line1Text;
line1 = [{text: "Whan"}, {text: "that"}, {text: "Aprill,"}, {text: "with"},
        {text: "his"}, {text: "shoures"}, {text: "soote"}];
line1Text = line1.map(function(word){
  return word.text;
}).join(" ");
$("#prologue").html("<p>" + line1Text + "<br /></p>");

line1 = [{text: "Whan", modern: "When"}, {text: "that"}, {text: "Aprill,",
        modern: "April,"}, {text: "with"}, {text: "his"}, {text: "shoures",
        modern: "showers"}, {text: "soote", modern: "sweet"}]; 

//Events in JS
$("#glosses").html("<p>The glosses will go here.</p>");
let line1, line1Text; // don’t need the intermediate step of line1TextArray
line1 = [{text: "Whan", modern: "When"}, {text: "that"}, {text: "Aprill,",
        modern: "April,"}, {text: "with"}, {text: "his"}, {text: "shoures",
        modern: "showers"}, {text: "soote", modern: "sweet"}];
// Create a blank string that opens two tags.
line1Text = "<blockquote><p>";
line1.forEach(function(word){
  // Add in the word-Object’s .text property plus a space.
  line1Text = line1Text + word.text + " ";
});
// Break the line and close the two tags.
line1Text = line1Text + "<br />(line 2 would go here)</p></blockquote>";
$("#prologue").html(line1Text);

line1.forEach(function(word){
    let wordString;
    wordString = word.text;
    if (word.modern){
      // Add word.modern as a data attribute to the <a> tag.
      wordString = "<a href='#' data-modern='" + word.modern + "'>" + wordString + "</a>";
    }
    line1Text = line1Text + wordString + " ";
  });

  $("#prologue a").click(function(){
    let glossText, clickedWord, modernWord;
    clickedWord = $( this ).text();
    // .data("modern") looks for the data-modern HTML attribute.
    modernWord = $( this ).data("modern");
    glossText = "<h2>You clicked on " + clickedWord + ", which means " + modernWord +"</h2>";
    $("#glosses").html(glossText);
  });

//JSON

//Async
