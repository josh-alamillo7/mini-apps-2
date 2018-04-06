const express = require('express');
const app = express();
const db = require('../database/index.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'))


app.listen(2222, () => console.log('Listening on port 2222'))

app.get('/confirmation/:username', (req, res) => {
  db.getSummaryByUser(req.params.username, (err, data) => {
    if (err) {
      res.status(500).send('could not fetch summary')
    } else {
      res.status(200).json(data)
    }
  })
})

app.post('/users', (req, res) => {
  db.insertUser(req.body.name, req.body.email, req.body.password, (err, data) => {
    if (err) {
      res.status(500).send('something went wrong with adding this user')
    } else {
      res.status(201).send('i know who you are')
    }
  }) 
})

app.post('/addresses', (req, res) => {

  if (req.body.zipcode.length !== 5) {
    res.status(500).send('Please enter a valid zip code')
  }

  db.insertAddressForUser(req.body.name, req.body.lineOne, req.body.lineTwo, req.body.city, req.body.state, req.body.zipcode, (err, data) => {
    if (err) {
      res.status(500).send('could not add address')
    } else {
      res.status(201).send('i know where you live')
    }
  })
})

app.post('/creditcards', (req, res) => {

  db.insertCreditCardForUser(req.body.name, req.body.number, req.body.expdate, req.body.cvv, req.body.billzip, (err, data) => {
    if (err) {
      console.log(err)
      res.status(500).send('could not add credit card')
    } else {
      res.status(201).send('you gave me your credit card info smh')
    }
  })
})