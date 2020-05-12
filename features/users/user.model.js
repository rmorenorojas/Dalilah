const sequelize = require ('./../../../db/sequelize')
const Sequelize = require ('sequelize')

module.exports = sequelize.define('user', {
    id:{
        field:'id',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
    },
    username:{
        field: 'username',
        type: Sequelize.STRING,
        validate:{
            notEmpty:{
                args: true,
                msg: 'The user name is required'
            }
        }
    } ,
    fullname: {
        field:'fullname',
        type: Sequelize.STRING
    } ,

    address:{
        field: 'address',
        type:Sequelize.TEXT(255)
    },

    phone: {
        field: 'phone',
        type:Sequelize.INTEGER
    },

    password:{
        field: 'password',
        type:Sequelize.STRING
    },    

    mail: {
        field:'mail',
        type:Sequelize.STRING
    },

    token: {
        field:'token',
        type:Sequelize.STRING
    },



    // Role_id:{
    //     field: 'Role_id',
    //     type:Sequelize.INTEGER
    // }
  }, 
  {
        timestamps: false ,
        freezeTableName: true 
    
},
)