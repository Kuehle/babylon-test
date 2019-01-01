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

const input = [
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0]
]

console.log(createMap(input))

function createMap(input) {
    let result = JSON.parse(JSON.stringify(input))
    // result = result.map(row => row.map(cell => {
    //     return Math.floor(Math.random() * 10)
    // }))
    result = [ 
        [ 1, 9, 2, 5 ], 
        [ 3, 0, 3, 9 ], 
        [ 3, 8, 6, 6 ], 
        [ 6, 6, 2, 6 ] 
    ]

    result = result.map((row, i) => row.map((cell, j) => {
        if (i % 2 || j % 2) {
            return  ( cell + result[2 * Math.floor(i / 2)][2 * Math.floor(j / 2)] ) / 2
        }
        return cell
    }))

    result = result.map((row, i) => row.map((cell, j) => {
        if (i % 2 || j % 2) {
            return  ( cell + result[2 * Math.floor(i / 2)][2 * Math.floor(j / 2)] ) / 2
        }
        return cell
    }))


    return result 
}
