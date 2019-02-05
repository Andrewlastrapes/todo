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
        res.status(200).json({
            data: data["tasks"]
        })
    })
   
});

router.post("/delete-task", (req, res) => {
    let str = ""
    var index;
    userModel.find({email: req.body.email})
    .then(data => {
        let arr = [];
       for(var i = 0; i < data[0].tasks.length; i++){
          str = data[0]["tasks"][i]["_id"]
           str = str.toString()
        arr.push(data[0]["tasks"][i])
            if(str === req.body.task["_id"]){
                index = i;
                console.log(index)
            }
       }
            arr.splice(index, 1)
            console.log(arr)
        userModel.findOneAndUpdate({email: req.body.email},
            {tasks: arr})
            .then(data => {
                res.status(200).json({
                    data: data
                })
            })
    });
});

module.exports = router;

