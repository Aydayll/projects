const User = require('../models/User.js');
const jwt = require('jsonwebtoken')

const handleErrors = (err) => {
    let errors = {
        email: '',
        password: '',
        username: ''
    };

    console.log(err)

    if (err.keyValue.username) {
        errors.username = 'that username has already registered'
        return errors
    }
    if (err.keyValue.email) {
        errors.email = 'that email has already registered'
        return errors
    }
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({
            properties
        }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}
const maxAge = 3 * 60 * 60 * 60

const createToken = (id) => {
    return jwt.sign({
        id
    }, 'ayday/atabek', {
        expiresIn: maxAge
    })
}
const login__get = (req, res) => {
    res.render('pages/login')
}
const signup__get = (req, res) => {
    res.render('pages/signup')
}
const login__post = (req, res) => {
    const {email, password} = req.body
    try {
        console.log(email, password);
        res.status(201)
        .json({answer: "It works"})
    } catch (err) {
        res.status(400).json({error:"Something get wrong"})
    }
};

const signup__post = async (req, res) => {
    const {
        email,
        password,
        username
    } = req.body;
    try {
        const user = await User.create({
            email,
            username,
            password
        })
        const token = createToken(user._id)
        res.cookie('ayday', token, {
            httpOnly: true
        })
        res.status(201).json({user: user._id})
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({
            err
        })
    }
}
module.exports = {
    login__get,
    signup__get,
    signup__post,
    login__post
};