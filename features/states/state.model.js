const sequelize = require ('./../../../db/sequelize')
const Sequelize = require ('sequelize')


module.exports = sequelize.define('state', {
    id:{
        field:'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
    },
    type:{
        field: 'type',
        type: Sequelize.STRING,
        validate:{
            notEmpty:{
                args: true,
                msg: 'Type of status is required'
            }
        }
    } ,
    
  }, {
        timestamps: false,
        freezeTableName: true
    
})