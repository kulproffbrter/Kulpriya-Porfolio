const express = require ('express')
const app = express ()
const PORT = 5000
const db = require('./app/models')
const cors = require('cors');

//parse request of content-type - application/json
app.use(express.json())

//parse request of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

var corsOptions = {
    origin: "http://localhost"
}

app.use(cors(corsOptions))

db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to the database!')
})
.catch(err => {
    console.log('Cannot connect to the database!',err)
})


require('./app/routes/visitor.routes')(app)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))