'use strict'
const {User} = require('../models/')
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library');


class UserController{
 
    static async register(req,res,next){
        try {
            let dataUser ={
                email: req.body.email,
                password:req.body.password,
                nama:req.body.nama
            }
            let daftar = await User.create(dataUser)
            res.status(201).json({id:daftar.id, email:daftar.email , nama: daftar.nama})
        
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
              
                res.status(200).json({access_token, nama:loginUser.nama})
            }else{
                next({name:'Wrong Password or Email'})
                
            }
        } catch (error) {
           next(error)
        }
    }

    static async googleLogin(req,res){
        //verify token
        let {google_access_token} = req.body //ini ambil token yang digenerate google lewat ajax
        
        const client = new OAuth2Client(process.env.CLIENT_ID)
        async function verify(){
            const ticket = await client.verifyIdToken({
                idToken:google_access_token,
                audience:process.env.CLIENT_ID
            })
            const payload = ticket.getPayload()
            let fullName = `${payload.given_name} ${payload.family_name}`
            
            let cariUser = await User.findOne({where:{email:payload.email}})
           
            if(cariUser){
                //generate token
                let access_token =  jwt.sign({id:cariUser.id,email:cariUser.email},process.env.SECRET)
                res.status(200).json({access_token, nama:cariUser.nama})
            }else{
                //asumsi login pakai id google tidak bisa pakai password emailnya
                let dataBaru = {
                    email:payload.email,
                    nama: fullName,
                    password:'udahada'
                }
                let buatUser = await User.create(dataBaru)
                let access_token =  jwt.sign({id:buatUser.id,email:buatUser.email},process.env.SECRET)
               
                res.status(200).json({access_token})
            }
        }
        verify().catch(console.error)
    }

    
    
}

module.exports = UserController
