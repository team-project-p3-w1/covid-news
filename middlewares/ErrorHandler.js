module.exports = function errorHandler (err,req,res,next){
    let status 
    let msg = []
    
    if(err.name == 'SequelizeValidationError'){
        status = 400
        for (let i =0; i < err.errors.length; i++){
            msg.push(err.errors[i].message)
       }
    }
    if (err.name == 'SequelizeUniqueConstraintError'){
        status = 400
        for (let i =0; i < err.errors.length; i++){
             msg.push(err.errors[i].message)
        }
    }
    if(err.name =='Wrong Password or Email'){
        status = 400
        msg = err.name
    }
    if(err.name =='Internal Server Error'){
        status = 500
        msg = err.name
    }

    

    res.status(status).json({msg})

}