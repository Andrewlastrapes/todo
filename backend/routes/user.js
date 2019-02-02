const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


router.post("/register", (req, res) => {
    UserModel.findOne({email: req.body.email}) 
    .then( data => {
        console.log(data)
        if(data){
               res.status(200).json({
                errMessage: "User is already registered"
            })
            return;
            
        }
    });

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
        const user = new UserModel({
            email: req.body.email,
            password: hash
        })

        user.save()
        .then(data => {
            res.status(200).json({
                data: data,
                message: "Success"
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err,
            
            });
        });

    });
})

router.post("/login", (req, res) => {
    let fetchedUser
    UserModel.findOne({email: req.body.email})
    .then(user => {
        fetchedUser = user
        return bcrypt.compare(req.body.password, fetchedUser.password);
    })
    .then(result => {
        if(!result){
            res.status(200).json({
                err: "Incorrect password/email"
            });
        }
        const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id },
            "secret-secret",
            { expiresIn: "1h" }
        );
        res.status(200).json({
            token: token,
            result: result
        })
    })
})




module.exports = router;