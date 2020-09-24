
 const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout((a,b) => resolve(a+b), 2000)
    })
}

console.log(add(2+3))

const doWork = async () => {
    await add(3,4)
}

doWork().then((result) => {
    console.log('Result: ', result)
}).catch(error => {
    console.log(error)
})

