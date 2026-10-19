"use strict";

alert("Hello, traveller welcome to the desert wasteland");

const charName = prompt(`What would you like your character's name to be?`, `Wanderer`)

const charCompanion = prompt(`What is your pet/companion's name?`)

const charPower = prompt(`What is your superpower?`)

const trainingYearsText = prompt(`How many years have you been training?`)

const trueYears = parseInt(trainingYearsText)

console.log(trainingYearsText, typeof trueYears )

const powerLevel = trueYears * 10

console.log(powerLevel)


const likesFighting = confirm(`Does ${charName} like fighting monsters? Click OK for YES CLick cancel for NO`)

console.log(typeof monsterConf)

alert(`"Gathering magic for  ${charName} ...almost ready"`);


alert(`====================================
Name: ${charName}
Pet: ${charCompanion}
Superpower: ${charPower}
Power Level: ${powerLevel} 
Monster fighter? ${likesFighting}
In the abandoned desert wasteland, ${charName} travels
with their trusty companion ${charCompanion}. After
training for ${trainingYearsText} , ${charName} reached
a power level of ${powerLevel}.
====================================`)








