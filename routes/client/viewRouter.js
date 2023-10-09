// Import Express
const express = require("express");
const router = express.Router();

const {
    getIndexPage,
    renderAllStars,
    renderOneStar,
    renderCreateStarForm,
    renderUpdateStarForm
} = require("../../controllers/client/viewController")

// localhost:8080/
router.get("/", getIndexPage)

// localhost:8080/allStars
router.get("/allStars", renderAllStars)

// localhost:8080/oneStar/:name
router.get("/oneStar/:name", renderOneStar)

// localhost:8080/createOneStar
router.get("/createOneStar", renderCreateStarForm)

// localhost:8080/updateStar/:name
router.get("/updateStar/:name", renderUpdateStarForm)

module.exports = router;