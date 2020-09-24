const request = require('postman-request')


const forecast= (coord, callback) => {
    const url = `http://api.weatherstack.com/forecast?access_key=b431124a69855ce907b30c4754db3bfe&query=${coord.center[0]},${coord.center[1]}&units=f`
    // console.log(url)
    request({ url: url }, (err, res) => {
    const response = JSON.parse(res.body).current;
    // console.log(response)
    const temp = response.temperature;
    const location =  coord.place
    
    const desc = response.weather_descriptions[0];
    console.log(desc)
    const data = {
        temp,
        location,
        desc
    }
    // console.log(
    //     `${desc}: It is currently ${temp} degrees out here in ${location}. There is a 0% chance of rain`
    // );
    callback(data)
});
}

module.exports = forecast