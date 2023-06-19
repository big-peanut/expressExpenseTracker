const express=require('express')
const controllers=require('../controllers/admincontroller')

const router=express.Router()

router.post('/addexpense',controllers.addexpense)

router.get('/getexpense',controllers.getexpense)

router.delete('/delexpense',controllers.delexpense)

module.exports=router