// singltan
// object create


// objectliterals

const mySym = Symbol("key1") // the way to use the symbol is given below


const Jsuser = {
        name: "Sidhu",
        "full name": "Siddharth Khadanga",
        [mySym]: "myKey1", // this is the perfect syntax to use the symbol 
        age: 20,
        location: "Gunupur",
        email: "Sidhu@gmail.com",
        isLoggedin: false,
        lastLigindays: ["Monday", "Saturday"]
    }
    // console.log(Jsuser.email)
    // console.log(Jsuser["email"])
    // console.log(Jsuser["full name"])
    // console.log(Jsuser[mySym])
    // Jsuser.email = "Sidhu@email.com"
    // console.log(Jsuser["email"])
    // Object.freeze(Jsuser)
    // Jsuser["full name"] = "Sidhu Khadanga"
    // console.log(Jsuser)

Jsuser.greeting = function() {
        console.log("Hello Js user")
    }
    // console.log(Jsuser.greeting)
Jsuser.greeting2 = function() {
    console.log(`Hello Js user,welcome ${this["full name"]}`)
}
console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())