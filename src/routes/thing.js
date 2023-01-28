const express = require('express')

const router = express.Router()

router
.route('/cars')
.get((req,res) =>{
    res.send('done')
})
.post((req,res)=>{
    res.send('Done')
})

router
.route('cars/:carid')
.get((req,res)=>{
    res.send('Done1' + req.params.carid)
})
.put((req,res)=>{
    res.send('done' + req.params.carid)
})

module.exports = router