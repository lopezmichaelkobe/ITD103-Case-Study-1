const express = require('express');
const mongoose = require('mongoose');
const CarModel = require('./library');
var cors = require('cors');

const app = express()
const port = 5000
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1/car_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(db => console.log('DB is connected'))
.catch(err => console.log(err));


app.get('/', (req, res) => {
  CarModel.find()
  .then(Cars => res.json(Cars))
  .catch(err => res.json(err))
})



app.get('/get/:id', (req, res) => {
  const id = req.params.id
  CarModel.findById({_id: id})
  .then(Cars => res.json(Cars))
  .catch(err => res.json(err))
})

app.post('/create', (req, res) => {
    CarModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  CarModel.findByIdAndUpdate({_id: id}, {
    CarName: req.body.CarName,
    Manufacturer: req.body.Manufacturer,
    Year: req.body.Year, 
    DriveType: req.body.DriveType
  }).then (user => res.json(user))
    .catch(err => res.json(err))
})

app.delete('/deleteuser/:id',(req, res) =>{
  const id = req.params.id;
  CarModel.findByIdAndDelete({_id: id})
  .then(response => res.json(response))
  .catch(err => res.json(err))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})