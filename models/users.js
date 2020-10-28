'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'Please Fill in your email address'
        },
        isEmail:{
          msg:'Please use your valid email address'
        }
      }
    },
    password:{
      type:  DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'Please Fill in your password'
        }
      }
    },
    nama: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'Please Fill in your name'
        }
      }
    }
  }, {
    hooks:{
      beforeCreate(user){
        user.password = bcrypt.hashSync(user.password, 10) //encrypt password
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};