const input = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

const SimplexNoise = require('simplex-noise')
const simplex = new SimplexNoise('seed2')
const Jimp = require('jimp')

// const input = [
//     [0,1,0,0],
//     [0,1,0,0],
//     [0,1,0,0],
//     [0,1,0,0]
// ]

console.log(createMap(input))
createImage(createMap(input))
function createMap(input) {
    let result = JSON.parse(JSON.stringify(input))
    result = result.map((row, i) => row.map((cell, j) => {
        return Math.pow((1 + simplex.noise2D(i * 10, j * 10)) / 2, 1.4) * 10
    }))

    return result
}

function createImage(input) {
    var Jimp = require('jimp')

    const width = input.length
    const height = input[0].length
    new Jimp(width, height, '#FF00FF', (err, image) => {
        input.forEach((row, i) => {
            row.forEach((cell, j) => {
                var value = cell * 255/10
                image.setPixelColor(
                    Jimp.rgbaToInt(value, value, value, 255), 
                    i, j
                )
            })
        });
        image.resize(width * 100, height * 100, Jimp.RESIZE_NEAREST_NEIGHBOR)
        image.write('image.png')
    })    
}