const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast =  require('./utils/forecast')

let data = {}
geocode('ogun, Nigeria', (err,  res) => {
    // console.log(err)
    // console.log(typeof res[0], res[0])
    data = res
    console.log(data)
    forecast(data, (err, res) => {
        if(err) {
            return console.log(err)
        }
    })
})







// request({url: url}, (err, res) => {
//     const data = res
//     console.log(data)
// })

