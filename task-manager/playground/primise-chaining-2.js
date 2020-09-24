require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f4fabc13343704978fecaaa').then((task) => {
//     console.log("Task: ", task, "has been deleted!")
//     return Task.find({completed: false})
// }).then((tasks) => {
//     console.log(tasks)
// }).catch(e => {
//     console.log('Erro!')
// })

const updateTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments()
    return count
}

updateTaskAndCount('5f4fab27041c420bbc9be9f1').then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})