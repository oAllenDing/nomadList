const express = require('express');
const { createCity, getCities, getCity, deleteCity, updateCity } = require("../controllers/cityController")

const router = express.Router();

router.get('/', getCities);

router.get('/:id', getCity);

router.post('/', createCity);

router.delete('/:id', deleteCity);

router.patch('/:id', updateCity);

module.exports = router;