const request = require('postman-request')


const getCoordinates = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidGVkZHlsb25ncyIsImEiOiJja2RoNXZndHAyb2t6MnFwbTZjaWcxcmdtIn0.dOKGzY4tU8RScDv_ik029Q`
    request({url: url}, (err, res) => {
        if (err){
            callback('Unable to connect', undefined)
        }else{
        const coord = {
            center: JSON.parse(res.body).features[0].center,
            place: JSON.parse(res.body).features[0].place_name
        }
        // console.log(url)
        // console.log(JSON.parse(res.body))
        callback (undefined, coord)
        }
    })
}


module.exports = getCoordinates