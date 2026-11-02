
console.log("Try clicking the Run button.");"use strict";

let favMonth = prompt("What is your favorite month of the year?").toLowerCase()

console.log(favMonth)

switch(favMonth) {
    case "april": case "march": case "may":
        console.log("Spring is nice with everything blooming.")
        break;
    case "june": case "july" : case "august":
        console.log("You enjoy the summer months!")
        break;
    case "september": case "october":  case "november":
        console.log("Fall is fun with all of the pretty colors.")
        break;
    case "december": case "january": case "february":
        console.log("You love the winter months!")
        break;
    default:
        console.log("other months are interesting too!")
}
