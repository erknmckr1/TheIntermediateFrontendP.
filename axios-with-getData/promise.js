import axios from "axios";


// (async() => {
//     const {data} = await axios('https://jsonplaceholder.typicode.com/users') // axios bıze data ısmınde dosya getırıyor. Her axions bır data getırecegı ıcın bunları ısımlendırebılırız.
//     const {data:post1} = await axios('https://jsonplaceholder.typicode.com/posts/1')
//     const post2 = await axios('https://jsonplaceholder.typicode.com/posts/2')
//     console.log("users:" ,data);
//      console.log("post1:",post1)
//     // console.log("post2",post2)
// })()


// const getComments = (number) => {
//     return new Promise((resolve,reject)=>{
//         if(number ===1){
//             resolve('Doğru veri girildi')
//         }else{
//             reject('Doğru veri girmediniz.')
//         }
        
//     })
// }


// getComments(1)
// .then((data)=>{console.log(data)})
// .catch((e)=>console.log(e))
const getUsers = () => {
    return new Promise(async(resolve,reject)=>{
        const {data:users} = await axios('https://jsonplaceholder.typicode.com/users')
        resolve(users)
    })
}
// getUsers()
// .then((data)=>{console.log(data)}) // resolve ile gelen degeri data ile tuttuk.

const getUser = (user_id)=>{
    return new Promise(async(resolve,reject)=>{
        const {data:userİd} = await axios('https://jsonplaceholder.typicode.com/users/'+user_id)
        resolve(userİd)
    })
}
// getUser(4)
// .then(data => {console.log(data)})

const getPost = (post_id)=>{
    return new Promise(async (resolve,reject)=>{
        const {data : post} = await axios('https://jsonplaceholder.typicode.com/posts/'+post_id)
        resolve(post)
    })
}

// getPost(7)
// .then(data=>console.log(data.title))


// Yukarıda axios ile promis yapısı kullanarak 3 farklı data cektıgımız örnekler var ve asenkron olarak calısıyorlar. Bunları anonim fonksıyon kullanarak sekron hale getırelım getUsers getPost getUser

// (async ()=>{
//     await getUsers()
//     .then(data=>console.log(data))
//     .catch((e)=>console.log(e))


//     await getPost(2)
//     .then((data=>console.log(data)))
//     .catch((e)=>console.log(e))

//     await getUser(3)
//     .then((data) => console.log(data))
//     .catch((e)=>console.log(e))
// }) 
// ()


// aşağıda sekron ıslemlerımızı then catch kullanmadan yapalım.. Then ve catch kullanmayacagımız ıcın hatayı try-catch kullanarak ele alalım.

(async()=>{
 const users = await getUsers()
 const user = await getUser(1)
 console.log(users)
 console.log(user.phone)
})()