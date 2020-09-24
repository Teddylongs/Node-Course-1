const express = require('express')
const app = express()

require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const { ObjectId } = require('mongodb')

const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (err){
        res.status(404).send('Error')
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findOne({_id: ObjectId(req.params.id)})
        res.send(user)
    } catch (err) {
        res.status(404).send('Error')
    }
})

app.post('/tasks', async(req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (err){
        res.status(400).send(err)
    }
  
})

app.get('/tasks', async(req, res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).send(tasks) 
    } catch(err){
        res.status(404)
    }
})

app.get('/tasks/:id', async(req, res) => {
    try{
        const task = await Task.findById(req.params.id)
        res.status(200).send(task)
    } catch (err){
        res.status(404).send(err)
    }
})

app.listen(port, () => {
    console.log('Server is up on port: ', port)
})

