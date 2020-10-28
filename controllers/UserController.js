'use strict'
const {User} = require('../models/')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')

class UserController{
 
    static async register(req,res,next){
        try {
            let dataUser ={
                email: req.body.email,
                password:req.body.password,
                nama:req.body.nama
            }
            let daftar = await User.create(dataUser)
            res.status(201).json({id:daftar.id, email:daftar.email})
        
        } catch (error) {
            next(error)
        }
    }

    static async login(req,res,next){
        try {
            let dataUser = {
                email:req.body.email,
                password:req.body.password
            }
            let loginUser = await User.findOne({where:{email:dataUser.email}})
            if(loginUser && bcrypt.compareSync(dataUser.password,loginUser.password)){
                var access_token = jwt.sign({id:loginUser.id,email:loginUser.email},process.env.SECRET)
                res.status(200).json({access_token})
            }else{
                next({name:'Wrong Password or Email'})
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController
