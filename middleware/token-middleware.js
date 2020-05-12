const jwt = require ('jsonwebtoken')

process.env.SECRET_KEY = 'secret'

const verificarToken = (req, res, next) => {
    if(req.headers.authorization){
    const token = req.headers.authorization.split( ' ' )[1]
    console.log(token)
    
    
    
    try {
        jwt.verify(token, process.env.SECRET_KEY)
       
        next()
    } catch (error) {
        res
        .status(401)
        .send ({ error: 'unathorized', message:'token failed' })
        
    }
    
}else{
    res
        .status(401)
        .send ({ error: 'unathorized', message:'you must have a token to access' })
        

}
}
module.exports = verificarToken