const Stars = require("../../models/starModel")

async function getAllStars(req, res) {
    try{
        let results = await Stars.find({})
        res.json({
            message: "success",
            payload: results
        })
    } catch(error) {
        let errorObj = {
            message: "get all stars failure",
            payload: error
        }
        // server-side
        console.log(errorObj)
        //client-side
        res.json(errorObj)
    }
}

async function getOneStar(req,res){
    try{
        let results = await Stars.findOne({Name: req.params.name})
        res.json({
            message: "success",
            payload: results
        })
    }catch(error){
        let errorObj = {
            message: "get one star failure",
            payload: error
        }
        // server-side
        console.log(errorObj)
        //client-side
        res.json(errorObj)
    }
}

async function createOneStar(req, res){
    try{
        //capture the req.body / form data
        let newStar = {
            Name: req.body.Name,
            SolarSystem: req.body.SolarSystem,
            Type: req.body.Type,
            EarthDistanceLightYears: req.body.EarthDistanceLightYears
        }
        await Stars.create(newStar)
        // Respond to client
        res.redirect(`/oneStar/${newStar.Name}`)
    }catch(error){
        let errorObj = {
            message: "create one star failure",
            payload: error
        }
        // server-side
        console.log(errorObj)
        //client-side
        res.json(errorObj)
    }
}

async function deleteOneStar(req,res) {
    try{
        let deletedStar = await Stars.deleteOne({Name: req.params.name})

        // back-end response
        // res.json({
        //     messsage: "success",
        //     payload: deletedStar
        // })

        //front-end response
        res.redirect("/allStars")
    }catch(error){
        let errorObj = {
            message: "delete one star failure",
            payload: error
        }
        // server-side
        console.log(errorObj)
        //client-side
        res.json(errorObj)
    }
}

async function updateOneStar(req,res){
    try{
        let updatedStar = {
            Name: req.body.Name,
            SolarSystem: req.body.SolarSystem,
            Type: req.body.Type,
            EarthDistanceLightYears: req.body.EarthDistanceLightYears
        }
        await Stars.updateOne(
            {Name: req.params.name},
            {$set: updatedStar},
            {upsert: true}
        )

        // back-end response
        // res.json({
        //     message: "success",
        //     payload: updatedStar
        // })

        // front-end reponse
        res.redirect(`/oneStar/${updatedStar.Name}`)
        
    }catch(error){
        let errorObj = {
            message: "update one pokemon failure",
            payload: error
        }
        // server-side
        console.log(errorObj)
        //client-side
        res.json(errorObj)
    }
}


// Goes to ../../routes/api/pokemonRouter.js
module.exports = {
    getAllStars,
    getOneStar,
    createOneStar,
    deleteOneStar,
    updateOneStar
}