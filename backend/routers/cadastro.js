const express = require('express')
const routes = express.Router();
const addRoutine = require('../controllers/AddRoutineController');
const success = require('../controllers/success');


routes.post("/app", addRoutine)
routes.get("/succ", success)
module.exports = routes