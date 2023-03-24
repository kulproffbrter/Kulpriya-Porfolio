module.exports = (app0) => {
    const visitor = require('../controllers/visitor.controllers')

    var router = require('express').Router()

    //Retrieve all visitor (ไปดึงเอาข้อมูลมาทั้งหมด)
    router.get('/', visitor.findAll)

    //Retrieve a single visitor with id
    router.get('/edit-visitor/:id', visitor.findOne)

    //Create a new visitor
    router.post('/create-visitor', visitor.create)

    //Update a visitor with id (patch same put)
    router.put('/update-visitor/:id', visitor.update)

    //Delete a visitor with id
    router.delete('/delete-visitor/:id', visitor.delete)

    app0.use('/visitor', router)

}