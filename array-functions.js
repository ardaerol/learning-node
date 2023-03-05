const users = [
    {name: "Mehmet", age:20},
    {name: "Mehmet", age:18},
    {name: "Gizem", age:18},
    {name: "Arda", age:18},
    {name: "Mehmet", age:21}
];

/*
push
map
find
filter
some
every
includes
*/

//push
// users.push("Ayşe")
// users.push("Gizem")
// console.log(users)

//map
// users.map((item) => {
//     console.log(item)
// })

//find

// const findIt = users.find((item) => item.name == "Mehmet" && item.age>15)
// console.log(findIt)

//filter

// const filterIt = users.filter((item) => item.name =="Mehmet")
// console.log(filterIt)

//some

// const someEd = users.some((item)=> item.name == "Mehmet")
// console.log(someEd)

// every
const everyIt = users.every((item)=> item.name == "Mehmet")
console.log(everyIt)