const Stars = require("../../models/starModel")

function getIndexPage(req,res) {
    res.render("index")
}

async function renderAllStars(req,res) {
    try{
        let results = await Stars.find({})
        res.render("allStars", {everyStar: results})
    }catch(error){
        let errorObj = {
            message: "render all stars failure",
            payload: error
        }
        console.log(errorObj)
        res.json(errorObj)
    }
}

async function renderOneStar(req,res) {
    try{
        let results = await Stars.findOne({Name: req.params.name})
        res.render("oneStar", {oneStar: results})
    }catch(error){
        let errorObj = {
            message: "render one star failure",
            payload: error
        }
        console.log(errorObj)
        res.json(errorObj)
    }
}

// Render "Create Star" Form
function renderCreateStarForm(req,res) {
    res.render("createStar")
}

async function renderUpdateStarForm(req,res) {
    try{
        let results = await Stars.findOne({Name: req.params.name})
        res.render("updateStar", {star: results})
    }catch(error){
        let errorObj = {
            message: "render update star form failure",
            payload: error
        }
        console.log(errorObj)
        res.json(errorObj)
    }
}

//Goes to ../../routes/client/viewRouter.js
module.exports = {
    getIndexPage,
    renderAllStars,
    renderOneStar,
    renderCreateStarForm,
    renderUpdateStarForm
}