/*
!perulangan di javascript
? for, for of, for in, forech
*while & do while
**/

for (let i = 1; i <= 5; i++){
    console.log('data ke -', i)
}

let x = 1
while(x <= 10){
    if (x % 2 !== 0){
        console.log('data x ke - ', x)
    }
    x++
}


let y = 1
do {
    if (y % 2 !== 0){
        console.log('data x ke - ', y)
    }
    y++
} while (y <= 10)


const pacarSaya = ['agnes', 'angel', 'zola', 'zapi', 'veva']

pacarSaya.forEach((pacar, index) => {
    console.log(pacar, index + 1)
})