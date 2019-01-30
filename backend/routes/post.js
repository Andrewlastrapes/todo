const express = require("express");
const router = express.Router();
const postModel = require("../models/postModel");


router.post("", (req, res) => {

    console.log(req.body)
    var model = new postModel({
        title: req.body.title,
        priority: req.body.priority,
        additionalNotes: req.body.additional,
        date: req.body.date
    });

    model.save()

    res.status(200).json({
        data: req.body
    })

});

router.get("", (req, res) => {
    postModel.find().then(data => {
        res.status(200).json({
            data: data
        })
    })
})

module.exports = router;

