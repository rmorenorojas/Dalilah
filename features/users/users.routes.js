import { user } from './user.model'

const router = require('express').Router()
const userController = require('../users/user.controller')


router

.get('/', async (req, res) => {

    try {
        const users = await userController.getAll()
        res.json(users)

    } catch (error) {
        res.status(500).json({ error: 'Something went wrong. Please retry or contact with an admin.', message: error})
    }

})
.get('/:id', async (req, res) => {     
    try {
        const id = req.params.id

        const user = await userController.getById(id)
        res.json(user)
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong. Please retry or contact with an admin.', message: error})
    }
})
.post('/', async (req, res) => {

    try {            
        await userController.add(req.body)
        res.status(201).json({ message: 'User created successfully.' })
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong. Please retry or contact with an admin.', message: error})
    }

})
.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id)

    if(!isNaN(id)) {
        
        try {
            await userController.updateById(id)
            res.status(200).json({ message: 'User updated successfully.' })
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong. Please retry or contact with an admin.', message: error})
        }

    } else {
        res.status(402).send({ error: 'Bad request.', message: 'Id must be a number' })
    }
})
.delete('/:id', async (req, res) => {
    res.send('User delete')
})

export default router