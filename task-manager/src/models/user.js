const mongoose = require('mongoose')
const Validator = require('validator')


const User = mongoose.model('User', {
    name: {
        type: String,
        default: 'John Doe',
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!Validator.isEmail(value)){
                throw new Error('Email is Invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Your password cannot contain the word "password!')
            }
        }
    }
})


module.exports = User