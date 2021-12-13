const express = require("express");

const userController = require("./controllers/users.controller");
const moviesController = require("./controllers/movies.controller");
const seatController = require("./controllers/seats.controller");
const screenController = require("./controllers/screens.controller");
const showController = require("./controllers/show.controller");
const theatresController = require("./controllers/theatres.controller");

const app = express();

app.use(express.json());


app.use("/users",userController);
app.use("/movies",moviesController);
app.use("/seats", seatController);
app.use("/screen", screenController);
app.use("/shows",showController);
app.use("/theatres",theatresController);


module.exports = app;

