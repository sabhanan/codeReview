// const token = ~~[Math.random() * 12345678]

// const pictures = ["1.jpg", "2.jpg", "3.jpg"]

// function login(username){
//     console.log('processing token user now...')
//     return new Promise((succes, failed) => {
//         setTimeout(() => {
//             if (username != "ronaldomagnum") failed("sorry wrong data")
//                 succes({token})
//         }, 200)
//     })
// }

// function getUser(token) {
//     console.log('processing apikey now...')
//     return new Promise((succes, failed) => {
//         if (!token) failed("sorry, no token, cannot acces")
//             setTimeout(() => {
//         succes({apiKey: "xKey123"})
//         }, 500)
//     })
// }

// function getPictures(apiKey) {
//     console.log('processing pictures now...')
//     return new Promise((succes, failed) => {
//         if (!apiKey) failed("now apikey, cannot access")
//             setTimeout(() => {
//                 succes({ pic: pictures })
//         }, 1500)
//     })
// }

// async function UserDisplay() {
//     try {
//         const { token } = await login("ronaldomagnum")
//         const { apiKey } = await getUser(token)
//         const { pic } = await getPictures()

//         console.log('token anda adalah: ${token} apikey anda adalah: ${apiKey} hasil reques gambar anda berikut ini: ${pic}')
//     } catch (err) {
//         console.log(err)
//     }
// }

// UserDisplay()