const {User} = require ('../models')
const jwt = require('jsonwebtoken')

const authentication = (req,res,next)=>{
    const {access_token} = req.headers

    if(access_token){
        decode = jwt.verify(access_token,process.env.SECRET)
        req.userData = decode 
        User.findByPk(req.userData.id)
            .then(data=>{
                if(!data){
                    return res.status(404).json({msg:'Wrong Email / Password'})
                }
                next()
            })
            .catch(err=>{
                res.status(500).json({msg:err})
            })
    }else{
        res.status(401).json({msg:'You dont have credentials'})
    }
}

module.exports = authentication
