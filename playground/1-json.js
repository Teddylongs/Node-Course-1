const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)


// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const data = dataBuffer.toString()
console.log(data)
dataJSON = JSON.parse(data)
dataJSON.name = "Teddy"
dataJSON.age = 24
console.log(dataJSON.age)
fs.writeFileSync('1-json.json', JSON.stringify(dataJSON))


