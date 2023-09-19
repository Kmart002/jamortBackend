const express = require('express')
const router = express.Router()
const User = require('../Model/user')


    //Get all users
    router.get('/', async (req, res)=>{
        try{
            const users = await User.find()
            res.json(users)
        } catch (err) {
            res.json({ message:'err' })
        }
    })
    // Create new user
    router.post('/', async (req, res)=> {
        const user = new User({
            ...req.body
        });
        try {
            const newUser  = await user.save()
            res.status(201).json(newUser)
        } catch (err) {
            res.status(400)
        }
    });


    //Get a particular user information
    router.get('/:id', getUser, (req, res)=>{
        res.json(res.user)
    });


    //Update the user information
    router.put('/:id', getUser, async (req, res) => {

        // To update all fields in the request body
        const updatedFields = req.body;     
        try {
            if (updatedFields) {
                Object.keys(updatedFields).forEach(key => {
                    res.user[key] = updatedFields[key];
                });

                const updatedUser = await res.user.save();
                res.json(updatedUser);
            } else {
                res.status(400).json({ message: 'Request body is empty' });
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    });

    //Delete a particular user
    router.delete('/:id', getUser, async (req, res) => {
        try {
            await User.findByIdAndRemove(req.params.id); // Use User model to remove the user
            res.json({ message: 'Deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    async function getUser(req, res, next) {
        let user
        try {
            user = await User.findById(req.params.id)
            if (user == null) {
                return res.status(404).json({ message: 'user not found'})
            }
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }

        res.user = user
        next()
    }

    module.exports = router