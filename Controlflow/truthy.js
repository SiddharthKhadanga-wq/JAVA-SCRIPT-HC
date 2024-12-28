// const useremail = []
const useremail = ""

if (useremail) {
    console.log("Got user email")
} else {
    console.log("Dont have user email ")
}

// falsy value
// false , 0 , -0, BigInt 0n , "", null , undefined, NaN 

// truthy value 
// "0" , 'false', " ", [],{},function(){}


// ternary operator 
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")