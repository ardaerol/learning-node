
// setTimeout(() => {
//     console.log("merhaba")
// }, 2000)

// setInterval(() => {
//     console.log("merhaba ben her 1 snde çalışcam")
// }, 1000)

// const merhabaDe = () => {
//     console.log("merhaba")
// }

// setInterval(merhabaDe,1000)

//merhabaDe()
import fetch from "node-fetch"

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data => data.json()).then(users => {
//     console.log("users yuklendi",users)
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(data => data.json()).then(posts => console.log("postlar",posts))
// })

// async function getData(){
//     const users = await ( await fetch("https://jsonplaceholder.typicode.com/users")).json()
//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
//     console.log("users",users)
//     console.log("post1",post1)

// }
// getData()

(async () => {
        const users = await ( await fetch("https://jsonplaceholder.typicode.com/users")).json()
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    console.log("users",users)
    console.log("post1",post1)
})();