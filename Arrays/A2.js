const marvel_heros = ["thor", "IronMan", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// // console.log(marvel_heros)
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// spread out values  ...
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

// const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// convert something to array 

// console.log(Array.isArray("Siddharth"))
// console.log(Array.from("Siddharth"))

let score1 = 100
let score2 = 99
let score3 = 99

console.log(Array.of(score1, score2, score3))