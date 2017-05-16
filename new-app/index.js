const express = require('express')
      bodyParser = require('body-parser')
      massive = require('massive')
      port = 9001

//
// set up middleware
const app = module.exports = express();
app.use(bodyParser.json())
app.use(bodyParser({extended:true}))
app.use(express.static('public'))

//
// database connection
const cnx = 'postgres://ftyrdzuc:wCxmk_7s9hzxIEqQMdfqU1M089uoh5hq@stampy.db.elephantsql.com:5432/ftyrdzuc'
const db = massive.connect({ connectionString : cnx}, 
  function(err) {
    if (err) { console.log('Connecting to the database failed: ', err)}
  }
)

//
// Family end points
app.post('/api/addfamily', function(req, res) { })
app.put('/api/updatefamily/:id', function(req, res) { })
app.get('/api/getfamily/:id', function(req, res) { })
app.delete('/api/deletefamily/:id', function(req, res) { })

//
// Recipe endpoints
app.post('/api/addrecipe', function(req, res) { })
app.put('/api/updaterecipe/:id', function(req, res) { })
app.get('/api/getrecipe/:id', function(req, res) { })
app.get('/api/getallrecipes', function(req, res) { })
app.delete('/api/deleterecipe/:id', function(req, res) { })

app.listen(port, function() {
  console.log('Alive and kicking on port ', port)
})

module.exports = app