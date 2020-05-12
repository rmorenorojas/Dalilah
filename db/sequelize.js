const Sequelize = require ('sequelize')


const sequelize = new Sequelize('mydb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  });



  module.exports = sequelize