const { Router } = require("express");

const countriesHandler = require("../handlers/countriesHandler");
const countryHandler = require("../handlers/countryHandler");
const countriesAllHandler = require("../handlers/countriesAllHandler");



const countriesRouter = Router();

countriesRouter.get("/", countriesHandler);
countriesRouter.get("/all", countriesAllHandler);
countriesRouter.get("/:idCountry", countryHandler);

module.exports = countriesRouter;
