// Imports
const express = require("express");
const app = express();
const logger = require("morgan");
const path = require('path');
const connectToMongoDB = require("./database/mongodb");
const methodOverride = require('method-override');

// Middleware
    // Set the view engine to EJS
    app.set("view engine", "ejs");
    // Set the view engine to look at the "views" folder
    app.set("views", path.join(__dirname, "views"));
    // Use the "public" folder to read static files such as CSS
    app.use(express.static(path.join(__dirname, "public")));
    // Shows request info in terminal
    app.use(logger("dev"));
    // Read incoming JSON
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    //Helps perform delete/update requests
    app.use(methodOverride('_method'));

// Routing
const viewRouter = require("./routes/client/viewRouter")
app.use("/", viewRouter)

const starRouter = require("./routes/api/starRouter")
app.use("/api/stars", starRouter)

// Power
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server is on port ${PORT}...`)
   
    connectToMongoDB();
});