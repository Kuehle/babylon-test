// const input = [
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,1,1,1,1,1,1,0],
//     [0,1,1,0,0,0,1,0],
//     [0,1,1,0,0,0,1,0],
//     [0,1,1,1,1,1,1,0],
//     [0,0,0,1,1,0,0,0],
//     [0,0,0,1,1,0,0,0],
//     [0,1,1,1,1,1,1,0],
//     [0,0,0,0,0,0,0,0]
// ]

const SimplexNoise = require('simplex-noise')
const simplex = new SimplexNoise()


const input = [
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0]
]

console.log(createMap(input))

function createMap(input) {
    let result = JSON.parse(JSON.stringify(input))
    result = result.map((row, i) => row.map((cell, j) => {
        return Math.pow((1 + simplex.noise2D(i, j)) / 2, .5) * 10
    }))

    return result 
}
