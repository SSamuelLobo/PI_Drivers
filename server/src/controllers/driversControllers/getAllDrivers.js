const axios = require('axios');
/*Urls */
const API_URL = 'http://localhost:5000/drivers'; 
const defaultImageUrl = 'https://tse4.mm.bing.net/th?id=OIP.12bK3iLKMR99XVF1mtuI_gHaE7&pid=Api&P=0&h=220';

/*iMPORTANDO LA BASE DE DATOS */
// const { Driver , Teams  }= require('../../db.js');
/* */

/*GET ALL DRIVERS */
/*Aqui deberia traer tambien los que esten en la base de datos */

const getAllDriversController = async () => {
    const response = await axios.get(API_URL);
    const allDrivers = response.data;

    /*allDrivers es un array de objetos */

    const filteredDrivers = allDrivers.map(driver => {

        const teamsArray = driver && driver.teams ? driver.teams.split(',').map(team => team.trim()) : [];
        return {
            id: driver.id,
            name: driver.name.forename,
            lastname: driver.name.surname,
            birthdate: driver.dob,
            nationality: driver.nationality,
            teams: teamsArray,
            description: driver.description,
            image: driver.image.url
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

module.exports= {
    getAllDriversController
}