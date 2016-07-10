
// setup 

var express = require("express")
var mongoose = require("mongoose")
var app = express()
var bodyParser = require("body-parser")
var morgan = require("morgan")

var port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(bodyParser.json())

app.use(function(req, res, next){
    res.setHeader("Access-Control-Origin-Allow",'*')
    res.setHeader("Access-Control-Allow-Methods",'GET','POST')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \
22 Authorization')
next()

});

app.use(morgan('dev'))

// setting for index.html

app.get('/', function(req, res){
    res.send("Yo Welcome to user api handlings")
})

// setting for router

var router = express.Router()

router.get('/',function(req, res){
    res.json({message : 'Api start point access granted'})
})

app.use('/api',router)

app.listen(port)

console.log("And it begins")



