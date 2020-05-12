const express = require ('express')
const router = express.Router()

const cors = require ('cors')
const jwt = require ('jsonwebtoken')


const User = require ('../users/user.model')
router.use(cors())

process.env.SECRET_KEY = 'secret'


const loguinUser = router.post('/user/loguin', (req, res) => {
    User.findOne({
        where: {
            mail: req.body.mail,
            password: req.body.password
        }

    })
    .then(user => {
        if(user) {
        
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1000
            })
            res.json({message: 'Loguin has been successfull', token: token})
        } else{
            res.send('That user does not exist')
        }
    })
    .catch(err => {
        res.send('error:' + '' + err)
    })
})

module.exports = router, loguinUser