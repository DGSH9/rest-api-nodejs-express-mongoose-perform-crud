const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const User = require("./models/users");


const app = express();
app.use(bodyparser());
mongoose.connect("mongodb://127.0.0.1:27017/users");


// @desc      Create Users(post)
// @api      "/users"
app.post("/api/v1/users", async (req, res) => {
    try {
        // main code
        console.log(req.body());
        const creatData = await User.create(req.body);
        res.json({
            status: "Success",
            agya: "agya data bhai...",
            data: creatData
        })

    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
});



// @desc      Display All Users(get)
// @api      "/api/v1/users"
app.get("/api/v1/users", async (req, res) => {
    try {
        // main code
        const displayData = await User.find();
        res.json({
            status: "Success",
            agya: "agya data bhai...",
            data: displayData
        })

    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
});


// @desc      Display Single User By id(get)
// @api      "/api/v1/users/:id"
app.get("/api/v1/users/:id", async (req, res) => {
    console.log(req.params);
    try {
        // main code
        const displaySingleData = await User.find({ _id: req.params.id });
        res.json({
            status: "Success",
            agya: "agya data bhai...",
            data: displaySingleData
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
});




// @desc      Update User By Id(put)
// @api      "/api/v1/users/:id"
app.put("/api/v1/users/:id", async (req, res) => {
    try {
        // main code
        const displaySingleData = await User.findByIdAndUpdate({ _id: req.params.id }, {
            phone: req.body.phone,
            email: req.body.email,
            name: req.body.name
        }, { new: true });

        res.json({
            status: "Success",
            agya: "agya data bhai...",
            data: displaySingleData
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
});





// @desc      Delete User By Id(delete)
// @api      "/api/v1/users/:id"
app.delete("/api/v1/users/:id", async (req, res) => {
    try {
        // main code
        const displaySingleData = await User.deleteOne({ _id: req.params.id });

        res.json({
            status: "Success",
            agya: "agya data bhai...",
            data: displaySingleData
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
});





app.listen(5000, () => console.log("server started at 5000.."));