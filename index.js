const express = require('express')
const app = express()
//const routes = require('./src/routes/routes')
const thing = require('./src/routes/thing')


app.use('/thing',thing)


app.get ('/', (req,res) =>{
    res.send('server is running on 5000')
})


app.listen(5000)
console.log('server is running on port 5000')


