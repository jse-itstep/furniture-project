// git pull 
// git add .
// git commit -m "yerdaulet"
// git push 

console.log("yerdaulet");

let animal = [
    {name: "Volk", gender: "muzhskoy", weight: 1, color: "red", age: 11,},
    {name: "Lisa", gender: "zhenski", weight: 2, color: "red", age: 12,},
    {name: "Zhiraf", gender: "muzhskoy", weight: 3, color: "red", age: 13,},
    {name: "Sobaka", gender: "zhenski", weight: 4, color: "red", age: 14,},
    {name: "Kot", gender: "muzhskoy", weight: 5, color: "red", age: 15,},
    {name: "Krisa", gender: "zhenski", weight: 6, color: "red", age: 16,},
    {name: "Tigr", gender: "muzhskoy", weight: 7, color: "red", age: 17,},
    {name: "Lev", gender: "zhenski", weight: 8, color: "red", age: 18,},
    {name: "Petuh", gender: "muzhskoy", weight: 9, color: "red", age: 19,},
    {name: "Panda", gender: "zhenski", weight: 10, color: "red", age: 20,}
];

localStorage.setItem(JSON.stringify("mal", animal));

