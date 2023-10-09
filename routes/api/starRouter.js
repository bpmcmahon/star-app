const express = require("express")
const router = express.Router()

const {
   getAllStars,
   getOneStar,
   createOneStar,
   deleteOneStar,
   updateOneStar
} = require("../../controllers/api/starController")

// localhost:8080/api/stars/allStars
router.get("/allStars", getAllStars)

// localhost:8080/api/stars/oneStar/:name
router.get("/oneStar/:name", getOneStar)

// localhost:8080/api/stars/createOneStar
router.post("/createOneStar", createOneStar)

// localhost:8080/api/stars/deleteOneStar/:name
router.delete("/deleteOneStar/:name", deleteOneStar)

// localhost:8080/api/stars/updateOneStar/:name
router.put("/updateOneStar/:name", updateOneStar)

// Goes to ../../index.js
module.exports = router