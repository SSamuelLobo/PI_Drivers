const axios = require('axios');
/*Urls */
const API_URL = 'http://localhost:5000/drivers'; 

/*iMPORTANDO LA BASE DE DATOS */
const { Driver , Teams  }= require('../../db.js');

const getDriverByIdController = async (idDriver) => {

    let driverDetails;

    if (isNaN(idDriver)) { 
        
        const dbDriver = await Driver.findByPk(idDriver, { include: [{ model: Teams }] });

        if (dbDriver) {
            driverDetails = {
                id: dbDriver.id,
                name: dbDriver.name,
                lastname: dbDriver.lastname,
                birthdate: dbDriver.birthdate,
                nationality: dbDriver.nationality,
                teams: dbDriver.Teams,
                description: dbDriver.description,
                image: dbDriver.image
            };
        } else {
            driverDetails = { error: 'Conductor no encontrado en la base de datos' };
        }
    } else {
        // Si el id no es un UUID, se asume que es un NUMERO
        const response = await axios.get(`${API_URL}/${idDriver}`);
        const driver = response.data;

        const teamsArray = driver && driver.teams ? driver.teams.split(',').map(team => team.trim()) : [];

        driverDetails = {
            id: driver.id,
            name: driver.name.forename,
            lastname: driver.name.surname,
            birthdate: driver.dob,
            nationality: driver.nationality,
            teams: teamsArray,
            description: driver.description,
            image:driver.image.url
        };
    }

    return driverDetails;
}


module.exports= {
    getDriverByIdController
}