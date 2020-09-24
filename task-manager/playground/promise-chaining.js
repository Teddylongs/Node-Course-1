require('../src/db/mongoose')

const User = require('../src/models/user')
const { findByIdAndUpdate } = require('../src/models/user')

// User.findByIdAndUpdate('5f5006c7afffc427b877fb56', {age: 15}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 15 })
// }).then(result => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({age})
    return (count)
}

updateAgeAndCount('5f5006c7afffc427b877fb56',8).then(count => {
    console.log('Count: ',count)
}).catch(e => {
    console.log(e)
})