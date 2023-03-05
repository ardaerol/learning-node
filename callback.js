
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
import axios from "axios"

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

// (async () => {
//             const {data: users} = await  axios("https://jsonplaceholder.typicode.com/users")
//         const {data:post1} = await  axios("https://jsonplaceholder.typicode.com/posts/1")
//         console.log("users",users)
//         console.log("post1",post1)
// })();

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const {data} = await  axios("https://jsonplaceholder.typicode.com/users")

        //resolve(data)
        reject("ilki çalıştı 2.de sorun oluştu")
    })
}

const getPost1 = (postID) => {
    return new Promise(async (resolve, reject) => {
        const {data} = await  axios("https://jsonplaceholder.typicode.com/posts/"+postID)

        resolve(data)
    })
}

// (async ()=> {
//     try{
//         const users = await getUsers()

//     const post = await getPost1(1)
//     console.log(users)
//     console.log(post)

//     }catch(e){
//         console.log(e)
//     }
  
// })()

Promise.all([getUsers(), getPost1(1)]).then(console.log).catch(console.log)