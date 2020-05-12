const express = require ('express')
const router = express.Router()
const  User = require ('../users/user.model')
const  Role = require ('../roles/role.model')
const cors = require ('cors')


router.use(cors())

process.env.SECRET_KEY = 'secret'

Role.hasMany(User,{
    foreignKey: 'Role_id'
})

const getUsers = router.get('/users', (req, res, err) => {
    User.findAll(     )

    .then((users) => {
        if (users){
          res.json(users)          
        } else {
          err.status(400).json({
            status: '404',
            message: 'All the users are not found'
          })
        }

    })
  })

  const getUserId = router.get('/user/:id', (req, res,) => {
    let { id } = req.params
    User.findByPk(id).then((user) => {
      if (user){
        res.json(user)          
      } else {
        res.status(400).json({
          status: '400',
          message: 'That user is not on the list'
        })
      }
    })

  })

 

const registro = router.post('/users/register', (req,res) => {
    const userData = {
        username: req.body.username,
        fullname: req.body.fulname,
        address: req.body.address,
        phone: req.body.phone,
        password: req.body.password, 
        mail: req.body.mail,
        Role_id: req.body.Role_id
          
    }

    User.findOne({
        where:{
            mail: req.body.mail
        }

    })
    .then(user => {
        if(!user){
            User.create(userData)
             .then( user =>{
                 res.json (user)
                 
             })
             .catch( err => {
                 res.send ('error:' + err )
             })
        } else {
            res.json( { error : 'That user has already exist '})
        }
    })
    .catch(err => {
        res.send( 'error:' + err )
    })
})





module.exports = router, getUsers, registro, getUserId
