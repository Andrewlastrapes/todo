const express = require("express");
const router = express.Router();
const postModel = require("../models/postModel");
const userModel = require("../models/userModel")


router.post("", (req, res) => {

    console.log(req.body)
    var model = new postModel({
        title: req.body.title,
        priority: req.body.priority,
        additionalNotes: req.body.additional,
        date: req.body.date
    });

    userModel.findOneAndUpdate({email: req.body.email},
        { $push: { tasks: model }})
        .then(data => {
            res.status(200).json({
                data: data
            })
        })


});

router.post("/get-user-tasks", (req, res) => {
    userModel.findOne({email: req.body.email}).then(data => {
        console.log("30" + data)
        res.status(200).json({
            data: data["tasks"]
        })
    })
   
})

module.exports = router;

