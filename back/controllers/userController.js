const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const getUser = asyncHandler( async(req, res) =>{
    const users = await User.find()
       
    res.status(200).json(users)
})

const postUser = asyncHandler(async(req, res) => {
    const {pseudo, email, password} = req.body;
    //Vérifier si les champs sont remplits
    if(!pseudo || !email || !password){
        res.status(400)
        throw new Error('Svp remplissez tous les champs!')
    }
    //Vérifier si l'utilisateur existe déjà
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User existe dejà')
    }
    // Hasher le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        pseudo,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            pseudo: user.pseudo,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error('Invalid User data')
    }
    
})

const loginUser = (req, res)  => {
    res.json({message: "login user"})
}

const deleteUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);

    if(!user){
        res.status(400)
        throw new Error('User not found')
    }

    await user.remove();
    res.status(200).json({id: req.params.id})

})

module.exports = {
    getUser,
    postUser,
    loginUser,
    deleteUser
}