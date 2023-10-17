import rs from "readline-sync"

let userAge = rs.question (`Please insert your age : \n`)
let products = ["Beer", "Wine", "Vodka"];
let basket = []
let isProductAvailable;
let isShopOpen = true;
let canBuy;


if (userAge >= 18 && Number ){
    console.log(`0. ${products[0]}`)
    console.log(`1. ${products[1]}`)
    console.log(`2. ${products[2]}`)

} else {
    console.log("Sorry, you can't buy")
    Process.exit()
}
let itemIndex = rs.question("Please choose your order:(insert a number)\n")
console.log(itemIndex)
basket.push(products[itemIndex])
console.log("Thank you! Your basket has :", basket)
itemIndex = rs.question("Anything els? ")
basket.push(products[itemIndex])
console.log (`Here you go:  ${basket}`)