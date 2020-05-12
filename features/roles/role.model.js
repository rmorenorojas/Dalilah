const sequelize = require ('./../../../db/sequelize')
const Sequelize = require ('sequelize')

module.exports = sequelize.define('Role', {
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
                msg: 'The type of role is required'
            }
        }
    } 
  }, {
        timestamps: false ,
        freezeTableName: true 
    
},
)