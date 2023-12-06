

const { Driver , Teams }= require('../../db.js');


const getAllDriversFromBDController = async () => {
    const AllDriversFromBD = await Driver.findAll( { include: [{ model: Teams }] });
    return AllDriversFromBD;
}

module.exports= {
    getAllDriversFromBDController
}