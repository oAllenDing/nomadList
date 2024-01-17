const City = require('../models/cityModel');
const mongoose = require('mongoose');

const getCities = async (req, res) => {
    const cities = await City.find({}).sort({createdAt: -1});

    res.status(200).json(cities);
}

const getCity = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "City not found"});
    };

    const city = await City.findById(id);

    if (!city) {
        return res.status(404).json({error: "City does not exist"});
    };

    res.status(200).json(city);
}

const createCity = async (req, res) => {
    const {cityName, country, cost} = req.body

    try {
        const city =  await City.create({cityName, country, cost});
        res.status(200).json(city);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
}

const deleteCity = async (req, res) => {
    const { id } = req.params;

     if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "City not found"});
     }
     
     const city = await City.findOneAndDelete({_id: id});

     if (!city) {
        return res.status(404).json({error: "City not found"})
     }
     res.status(200).json(city);
}

const updateCity = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "City not found"});
     };

     const city = await City.findOneAndUpdate({_id: id}, {
        ...req.body
     });

     if (!city) {
        return res.status(404).json({error: "City not found"})
     }

     res.status(200).json(city);
}

module.exports = {
    getCity,
    getCities,
    createCity,
    deleteCity,
    updateCity,
}