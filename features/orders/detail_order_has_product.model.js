const sequelize = require ('./../../../db/sequelize')
const Sequelize = require ('sequelize')

module.exports = sequelize.define('detail_order_has_product',{
    
    // detail_order_id:{
    //     field:'detail_order_id',
    //     type: Sequelize.INTEGER,

        
    // },
    // product_id:{
    //     field:'product_id',
    //     type: Sequelize.INTEGER,

        
    // },    
    
    quantyti: {
        field:'quantyti',
        type: Sequelize.INTEGER
    } ,

    subtotal: {
        field:'subtotal',
        type: Sequelize.FLOAT
    } ,    
   
  }, {
        timestamps: false,
       
    
})
