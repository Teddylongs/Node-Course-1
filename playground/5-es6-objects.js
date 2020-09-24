// Object Property Shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}


const product = {
    label: 'Red',
    price: 3,
    stock: 201
}
const {label, price, rating} = product

console.log(label, price, rating)