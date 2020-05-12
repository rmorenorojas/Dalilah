const sequelize = require ('./../../../db/sequelize')
const Sequelize = require ('sequelize')


module.exports = sequelize.define('payment', {
    id:{
        field:'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
    },
    method:{
        field: 'method',
        type: Sequelize.STRING,
        validate:{
            notEmpty:{
                args: true,
                msg: 'method is required'
            }
        }
    } ,
    
  }, {
        timestamps: false,
        freezeTableName: true
    
})