const db = require('../models')
const Visitor = db.visitor
exports.create = (req, res) => {

    //Create a visitor
    const visitor = new Visitor(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        }
    );

    visitor
    .save(visitor)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Some error occurred while creating the visitor."})
    })
}

exports.findAll = (req, res) => {
    Visitor.find().then(data => {
        res.json(data) //response to front-end
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Some error occurred while creating the visitor."})
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Visitor.findById(id).then(data => {
        if(!data) {
            res.status(404).json({message: "Not Found!!"})
        }
        else {
            res.json(data)
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Error retrieving data!"})
    })
}

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).json({message: "Data to update cannot be empty!"})
    }

    const id = req.params.id
    Visitor.findByIdAndUpdate(id,req.body, {useFindAndModify: false}).then(data => {
        if(!data) {
                res.status(404).json({message: `Cannot update data with id =${id}`})
        }
        else {
            res.json({message: "Data was updated successfully"})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Error updating data!"})
    })

}

exports.delete = (req, res) => {
    const id = req.params.id
    Visitor.findByIdAndRemove(id , {useFindAndModify: false}).then(data => {
        if(!data) {
            res.status(404).json({message: `Cannot delete data with id =${id}`})
        }
        else {
            res.json({message: "Data was deleted successfully."})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Cannot delete data!"})
    })
}
