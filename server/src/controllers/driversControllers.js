const axios = require('axios');
/*Urls */
const API_URL = 'http://localhost:5000/drivers'; 
const defaultImageUrl = 'https://tse4.mm.bing.net/th?id=OIP.12bK3iLKMR99XVF1mtuI_gHaE7&pid=Api&P=0&h=220';

/*iMPORTANDO LA BASE DE DATOS */
const { Driver , Teams  }= require('../db.js');

/*-------------------------------------------------------------------------------------------------------------------------------------- */
/*GET ALL DRIVERS */

const getAllDriversController = async () => {
    const response = await axios.get(API_URL);
    const allDrivers = response.data;

    /*allDrivers es un array de objetos */

    const filteredDrivers = allDrivers.map(driver => {
        return {
            id: driver.id,
            name: driver.name.forename,
            lastname: driver.name.surname,
            image: driver.image.url,
            birthdate: driver.dob,
            nationality: driver.nationality,
            teams: driver.teams,
            description: driver.description
        };
    });

    /*Aqui verifico que todos los drivers tengan su imagen, si no es asi le agrego un por defecto */
    const driversWithImages = filteredDrivers.map(driver => {
        if (!driver.image) {
            return {
                ...driver,
                image: defaultImageUrl 
            };
        }
        return driver;
    });

    return driversWithImages;
}

/*-------------------------------------------------------------------------------------------------------------------------------------- */
const getDriverByIdController = async (idDriver) => {

    let driverDetails;

    if (isNaN(idDriver)) { 
        
        const dbDriver = await Driver.findByPk(idDriver, { include: [{ model: Teams }] });

        if (dbDriver) {
            driverDetails = {
                id: dbDriver.id,
                name: dbDriver.name,
                lastname: dbDriver.lastname,
                image: dbDriver.image,
                birthdate: dbDriver.birthdate,
                nationality: dbDriver.nationality,
                description: dbDriver.description,
                teams: dbDriver.Teams 
            };
        } else {
            driverDetails = { error: 'Conductor no encontrado en la base de datos' };
        }
    } else {
        // Si el id no es un UUID, se asume que es un NUMERO
        const response = await axios.get(`${API_URL}/${idDriver}`);
        const driver = response.data;

        driverDetails = {
            id: driver.id,
            name: driver.name.forename,
            lastname: driver.name.surname,
            birthdate: driver.dob,
            nationality: driver.nationality,
            teams: driver.teams,
            description: driver.description
        };
    }

    return driverDetails;
}


module.exports= {
    getAllDriversController,
    getDriverByIdController,
}


// const getAllDriversController = async () => {
//     const allDrivers = await Driver.findAll();
//     return allDrivers;
// }