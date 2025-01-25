// object Literals
const user = {
    username: "Sidhu",
    loginCount: 8,
    SignedIn: true,
    getuserdetails: function() {
        // console.log("Got user details from database")
        // console.log(`UserName : ${this.username}`) 
        console.log(this) //this keyword will help us to print current context
    }
}

console.log(user.username)
console.log(user.getuserdetails())

// CONSTRUCTOR

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
}

const userOne = new User("Sidhu", 12, true)
const userTwo = new User("Siddharth", 10, false)
console.log(userOne)
console.log(userTwo)