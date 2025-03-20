const readline = require('readline-sync'); // To read user input using readline-sync from "Values, Data Types, and Operations"

/* Building Arrays lesson to store possible book recommendations. 
Use of camelCase and descriptive variables from "Values, Data Types, and Operation"*/
let fantasyBooks = ["A Court of Thorns and Roses", "Game of Thrones", "Forth Wing"];
let nonFictionBooks = ["Sapiens", "The Tipping Point", "Into Thin Air"];
let suspenseBooks = ["The Hot Zone", "Gone Girl", "We Were Liars"];

  // Building an empty array from "Building Arrays" to hold the user input 
  let answers = [];

/*These are 3 "while" loops from "Working with loops" including a conditional using "if", ||, and break from "Control 
 structure and logic" to indicate that a boolean "true" has been met for the declared variable (genre, readingFrequency, whyRead)*/
  let genre; // descriptive variable 
while (true) { /*boolean, from lesson "Values, Data Types, and Operation" I used (typeof) to check this but deleted to make the code more readable. */
  genre = readline.question("Do you prefer Fantasy, Non-Fiction, or Suspense books? ");
  if (genre.toLowerCase() === "fantasy" || genre.toLowerCase() === "non-fiction" || genre.toLowerCase() === "suspense") {
    break;  //Exit the loop if conditional is valid
    // This is the conditional nested inside the while loop. In order to exit the loop, the conditional must be met.
    // So this means user MUST type in one of the three options. The || indicates OR, so just one of these conditions has to be met.
  } else {
    console.log("Please enter a valid genre: Fantasy, Non-Fiction, or Suspense.");//If not, the loop will continue to ask question until conditional is met. 
    // Once met, the loop breaks
  }
  //This nested conditional in a "while" loop repeats 2 more times for a total of 3 looped questions.
}
let readingFrequency;//declare variable
while (true) { //boolean
  readingFrequency = readline.question("How often do you read? (Daily, Weekly, Rarely) ");//prompt user input
  if (readingFrequency.toLowerCase() === "daily" || readingFrequency.toLowerCase() === "weekly" || readingFrequency.toLowerCase() === "rarely") {
    break; //conditional to match appropriate answers and then stop the loop
  } else {
    console.log("Please enter a valid reading frequency: Daily, Weekly, or Rarely.");//continuation of loop until answered appropriately
  }
}
let whyRead;//declare variable
while (true) {//boolean
  whyRead = readline.question("Why do you read? (Escapism, To Learn Something, To Feel Something) ");//prompt user input
  if (whyRead.toLowerCase() === "escapism" || whyRead.toLowerCase() === "to learn something" || whyRead.toLowerCase() === "to feel something") {
    break;  // conditional to match appropriate answers then stop the loop
  } else {
    console.log("Please enter a valid reason: Escapism, To Learn Something, or To Feel Something.");// continuation of loop until answered appropriately
  }
}
  
  // Store answers in previously empty array using .push learned in Using Arrays lesson
  answers.push(genre);
  answers.push(readingFrequency);
  answers.push(whyRead);
  console.log(answers);// This shows my previously empty array having the 3 answers from the loop above now populated
  console.log(
    `You prefer ${genre} books. 
    You read ${readingFrequency}.
     And you read because: ${whyRead}`);// template literal from lesson Stringing Characters together 
     // to combine strings and variables, allow formatting, and increase readability

  
  // Use "for" loop nested inside conditionals to show which books to recommend
  if (answers[0].toLowerCase() === "fantasy") {// asking if the first index of answers array matches fantasy
    console.log("Based on your preferences, we recommend these books:" )// if yes, this console runs
    for (let i = 0; i < fantasyBooks.length; i++)// basic format for an iteration through an array from lesson "working with Loops"
    //first starting at index 0, the making sure iterates through only the length of the fantasy book array, then to go to the next index
    console.log(fantasyBooks[i]);// console log accessing fantasyBooks array using bracket notation with variable as indices from lesson "Using Arrays"
  } else if (answers[0].toLowerCase() === "non-fiction") {// asking if first index of answers array matches non-fiction
    console.log("Based on your preferences, we recommend these books:" )// if yes, this console runs
    for (let i = 0; i < nonFictionBooks.length; i++)//basic format of iteration through an array
    console.log(nonFictionBooks[i]);// console log accessing the nonFictionBooks array using bracket notation
  } else if (answers[0].toLowerCase() === "suspense") {//asking if first index of answers array matches suspense
    console.log("Based on your preferences, we recommend these books:")// if yes, this console runs
    for (let i = 0; i < suspenseBooks.length; i++)// basic format of iteration through an array
    console.log(suspenseBooks[i]);//console log accessing suspenseBooks the array using bracket notation
  }

  /*because the first loop will not finish until one of these three answers is given, we know once we get to this part in
the code that we will be seeing the book recommendations*/