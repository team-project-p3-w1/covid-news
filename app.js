'use strict'
require('dotenv').config()
const expres = require('express')
const Routes = require('./routes')
const app = express()
const port = process.env.PORT || 3000

app.use(expres.json())
app.use(expres.urlencoded({extended:false}))

// Deklarasi errorhandler


// deklarasi base Route
app.use("/",Routes)




app.listen(port,()=>{
  console.log(`
    app listening on http://localhost:${port}
  `);
})