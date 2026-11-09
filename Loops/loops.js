//Mathew Gachanja 11/09/26

"use strict";
console.log("fart")
let fragile = 0
let loaded = 0
let inspect = 0 
for (let i = 0; i <= 20; i++) {
    let crate = i
    if (Number.isInteger(crate / 5 ) && crate!= 0 ) {
        console.log(`Please handle crate ${crate} with care`)
       fragile++     
    }else if (Number.isInteger( crate / 2 ) && crate!= 0 ) {
        console.log(`Load crate ${crate} `)
        loaded++
    }else if (crate != 0) {
        console.log(`Inspect crate ${crate}`)
        inspect++
    
    }

console.log(`Total crates scanned: ${crate}`)

}   

console.log(`\nNumber of fragile crates: ${fragile} 
Number of loaded crates:${loaded}
Number of inspected crates:${inspect}`)