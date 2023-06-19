const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const Expense=sequelize.define('expenses',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:{
        type: Sequelize.DOUBLE,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false,
    }
})

module.exports=Expense