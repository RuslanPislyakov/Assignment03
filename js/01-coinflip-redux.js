let coinFlip
let randomNum
let n = parseInt(prompt('Enter the amount of times that the for loop executes '))

for (let i = 1; i <= n; i++ ) {
    
    randomNum = Math.round(Math.random());

    if (randomNum == 0) console.log('Heads')
    if (randomNum == 1) console.log('Tails')

}