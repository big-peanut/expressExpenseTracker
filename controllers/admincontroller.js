const Expense=require('../models/expense')

exports.addexpense=async(req,res,next)=>{
    const amount=req.body.amount
    const category=req.body.category
    const data=await Expense.create({
        amount:amount,
        category:category
    })
    res.status(201).json({dataValues:data})
}

exports.getexpense=async(req,res,next)=>{
    try{
        const expenses=await Expense.findAll()
        console.log(res.status(200).json({allexpense:expenses}))
    }
    catch(err){
        console.log(err)
    }
    
}


exports.delexpense=async(req,res,next)=>{
    try{
        if(req.params.id=='undefined'){
            console.log("id is missing")
        }
        const uid=req.params.id
        await Expense.destroy({where:{id: uid}})
        console.log('user removed')
    }
    catch(err){
        console.log(err)
    }
}