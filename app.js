'use strict'
require('dotenv').config()
const express = require('express')
const Routes = require('./routes')
const app = express()
const port = process.env.PORT || 3000
const errorHandler = require('./middlewares/ErrorHandler')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// deklarasi base Route
app.use(Routes)

// Deklarasi errorhandler global
app.use(errorHandler)

app.listen(port,()=>{
  console.log(`
    app listening on http://localhost:${port}
  `);
})