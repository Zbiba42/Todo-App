const mongoose = require('mongoose')
const Todo = require('./Todo')
const express = require('express')
const cors  = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp', async () => {
  console.log('conected')
})

app.get('/', async (req, res) => {
  const todos = await Todo.find()
  res.status(200).json({ succes: true, data: todos })
})

app.get('/getTasksNum', async (req, res) => {
  const todos = await Todo.find()
  const lenght = todos.length
  res.status(200).json({ succes: true, data: lenght })
})

app.post('/', async (req, res) => {
  try {
    const todo = req.body
    await Todo.create(todo)
    res.status(200).json({ succes: true, data: todo })
  } catch (error) {
    res.json({ succes: false, data: error.message })
  }
})

app.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const update = req.body
    const updated = await Todo.updateOne({ _id: id }, update)
    res.status(200).json({ succes: true, data: updated })
  } catch (error) {
    res.json({ succes: false, data: error.message })
  }
})

app.put('/done/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updated = await Todo.updateOne({ _id: id }, { $set: { done: true } })
    res.status(200).json({ succes: true, data: updated })
  } catch (error) {
    res.json({ succes: false, data: error.message })
  }
})

app.put('/undone/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updated = await Todo.updateOne({ _id: id }, { $set: { done: false } })
    res.status(200).json({ succes: true, data: updated })
  } catch (error) {
    res.json({ succes: false, data: error.message })
  }
})

app.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await Todo.deleteOne({ _id: id })
    res.status(200).json({ succes: true, data: deleted })
  } catch (error) {
    res.json({ succes: false, data: error.message })
  }
})

app.listen(5000, () => {
  console.log('server is listening')
})
