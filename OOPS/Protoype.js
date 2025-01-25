let myHero = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",

    getSpiderpower: function() {
        console.log(`${this.Spiderman}`)
    }
}
Object.prototype.Sidhu = function() {
    console.log(`Sidhu in all the object`)
}
Array.prototype.HeySidhu = function() {
        console.log("Sidhu says hello")
    }
    // heroPower.Sidhu()
    // myHero.Sidhu()
myHero.HeySidhu()
    // heroPower.HeySidhu()