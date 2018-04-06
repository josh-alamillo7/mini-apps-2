const { Client } = require('pg');
const promise = require('bluebird');

const knex = require('knex')({
  client: 'pg',
  connection: {
    user: process.env.username,
    password: process.env.password,
    database: 'checkouts',
    port: 5432
  }
})

const getSummaryByUser = (username, callback) => {
  const outputObject = {}
  knex.select('id', 'email').from('users').where('name', username).then((data) => {
    const id = data[0].id
    outputObject['email'] = data[0].email
    knex.select('line_1', 'line_2', 'city', 'state', 'zipcode').from('addresses').where('user_id', id).then((data) => {
      let resultsNumber = data.length;
      let mostRecent = data[resultsNumber - 1]
      const secondLine = mostRecent.line_2 === null ? '' : mostRecent.line_2
      addressString = `${mostRecent.line_1} \n${secondLine} \n${mostRecent.city}, ${mostRecent.state} ${mostRecent.zipcode} `
      outputObject['address'] = addressString
      knex.select('number', 'expdate', 'billzip').from('creditcards').where('user_id', id).then((data) => {
        resultsNumber = data.length;
        mostRecent = data[resultsNumber - 1];
        outputObject['cardNumber'] = mostRecent.number;
        outputObject['expirationDate'] = mostRecent.expdate;
        outputObject['billingZip'] = mostRecent.billzip;
        callback(null, outputObject)
      }).catch((err) => {
        callback(err, null)
      })
    }).catch((err) => {
      callback(err, null)
    })
  }).catch((err) => {
    callback(err, null)
  })
}

const insertUser = (username, email, password, callback) => {
  knex('users').insert({
    name: username,
    email: email,
    password: password
  }).then((data) => {
    callback(null, data)
  }).catch((err) => {
    callback(err, null)
  })
}

const insertAddressForUser = (username, lineOne, lineTwo, city, state, zipcode, callback) => {
  knex.select('id').from('users').where('name', username).then((data) => {
    knex('addresses').insert({
      line_1: lineOne,
      line_2: lineTwo,
      city: city,
      state: state,
      zipcode: zipcode,
      user_id: data[0].id
    }).then((result) => {
      callback(null, result)
    }).catch((err) => {
      callback(err, null)
    })
  }).catch((err) => {
    callback(err)
  })
}

const insertCreditCardForUser = (username, number, expdate, cvv, billzip, callback) => {
  knex.select('id').from('users').where('name', username).then((data) => {
    knex('creditcards').insert({
      number: number,
      expdate: expdate,
      cvv: cvv,
      billzip: billzip,
      user_id: data[0].id
    }).then((result) => {
      callback(null, result)
    }).catch((err) => {
      callback(err, null)
    })
  })
}

module.exports.insertUser = insertUser;
module.exports.insertAddressForUser = insertAddressForUser;
module.exports.insertCreditCardForUser = insertCreditCardForUser;
module.exports.getSummaryByUser = getSummaryByUser;