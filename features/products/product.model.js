const sequelize = require ('./../../../db/sequelize')
const Sequelize = require ('sequelize')

module.exports = sequelize.define('product', {
    id:{
        field:'prouct_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
    },
    product_detail:{
        field: 'product_detail',
        type: Sequelize.STRING,
        validate:{
            notEmpty:{
                args: true,
                msg: 'The type of poduct is required'
            }
        }
    } ,
    product_price: {
        field:'product_price',
        type: Sequelize.FLOAT
    } ,

  }, {
        timestamps: false  
    
})





