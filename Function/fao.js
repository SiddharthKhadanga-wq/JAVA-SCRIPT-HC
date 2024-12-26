// function calculatecartprice(...num1) {
//     return num1
// }
// console.log(calculatecartprice(200, 500, 2000, 4000))
// (...) using this this three dot before a paramater is know as rest operator or spread out operator

// inobject 
const user = {
    username: "Siddharth",
    price: 199
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}


handleobject(user)

const myNewArray = [200, 400, 600, 800]

function returnSecondvalue(getArray) {
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray))