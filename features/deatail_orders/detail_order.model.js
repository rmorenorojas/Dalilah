const sequelize = require ('./../../../db/sequelize')
const Sequelize = require ('sequelize')


module.exports = sequelize.define('detail_order', {
    id:{
        field:'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
    },
   
  
    total:{
        field:'total',
        type:Sequelize.FLOAT
    }
  }, {
        timestamps: false,
        freezeTableName: true
    
})