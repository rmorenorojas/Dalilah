const sequelize = require ('./../../../db/sequelize')
const Sequelize = require ('sequelize')


module.exports = sequelize.define('order_', {
    id:{
        field:'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
    },
    
    
    
    hour: {
        field: 'hour',
        type: Sequelize.TIME,
        validate:{
            notEmpty:{
                args: true,
                msg: 'hour is required'
            }
        }      
    },

    
    // user_user_id:{
    //     field: 'user_user_id',
    //     type:Sequelize.INTEGER
    // },
   
    // payment_id:{
    //     field: 'payment_id',
    //     type:Sequelize.INTEGER
    // }, 
    
    // statet_id:{
    //     field: 'statet_id',
    //     type:Sequelize.INTEGER
    // },       
    
    // detail_order_id:{
    //     field: 'detail_order_id',
    //     type:Sequelize.INTEGER
    // },         

    
   
  }, {
        timestamps: false,
        freezeTableName: true,
        
    
})