"use strict";

/* PLANNING / PSEUDOCODE

1. I need to initalize the starting code as 0

2. Question 1: [Your question here-- see questions below}
First, prompt the user for the question through the
corresponding variable.
Then, after the user is done compare their input     with the storred correct answer variable

3. Use that structure for all questions.

6. Math: How will I calculate the percentage?
  divide the score by 5 then multiply by 100
7. Final feedback logic (if / else if / else):

let score = 0 
*/
let score = 0

const firstQuestion = 8
const secondQuestion = 6
const thirdQuestion = 12
const fourthQuestion = 4
const fifthQuestion = "purple"

let answerFirst = parseInt( prompt('What is 5 + 3?'))

if (answerFirst === firstQuestion)
{
  score += 1
  alert("correct!")
  console.log(score)

}
else 
{
  alert("Incorrect!")
}


let secondAnswer = parseInt( prompt('What is 5 + 3?'))
if (secondAnswer ===  secondQuestion)
{
  score += 1
  alert("correct!")
  console.log(score)

}
else 
{
  alert("Incorrect!")
}



let answerThird = parseInt(prompt('What is 4 × 3'))

if (answerThird === thirdQuestion)
{
   score += 1
  alert("correct!")
  console.log(score)
}
else 
{
  alert("Incorrect!")
}


let answerFourth = parseInt( prompt('What is 20 ÷ 5?'))

if (answerFourth == fourthQuestion)
  {
  score += 1
    alert("correct!")
  console.log(score)
 
  }
else 
{
  alert("Incorrect!")
}

// q5
let answerFifth = prompt('What is my favorite color').trim().toLowerCase()

if (answerFifth === fifthQuestion)
  {
  score += 1
    alert("correct!")
  console.log(score)
  }
else if (answerFifth === null)
{
alert("Incorrect!")
}

// log 3/5 score and print result
if (score === 3 ){
  console.log("3 correct answers")
}
const percent = (score / 5) * 100 
alert(`${score} out of 5 or ${percent}% `)

