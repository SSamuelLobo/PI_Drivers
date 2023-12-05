const axios = require('axios');

const { Driver }= require('../../db.js');


const getAllDriversFromBDController = async () => {
    const AllDriversFromBD = await Driver.findAll();
    return AllDriversFromBD;
}

module.exports= {
    getAllDriversFromBDController
}