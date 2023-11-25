const axios = require('axios');
/*Urls */
const API_URL = 'http://localhost:5000/drivers'; 

const { Op } = require('sequelize');

/*iMPORTANDO LA BASE DE DATOS */
const { Driver , Teams }= require('../../db.js');

// const getDriverByNameController = async (name) => {
//     let driversFromDB = await Driver.findAll({
//         where: {
//             [Op.or]: [
//                 {
//                     name: {
//                         [Op.iLike]: `%${name}%` 
//                     }
//                 },
//                 {
//                     lastname: {
//                         [Op.iLike]: `%${name}%` 
//                     }
//                 }
//             ]
//         },
//         limit: 15
//     });
    
//     // Realiza la búsqueda en la API por forename
//     const responseForename = await axios.get(`${API_URL}?name.forename=${name}`);
//     const driversFromAPIForename = responseForename.data;
    

//     // Realiza la búsqueda en la API por surname
//     const responseSurname = await axios.get(`${API_URL}?name.surname=${name}`);
//     const driversFromAPISurname = responseSurname.data;

//     // Combina los resultados de la base de datos y de la API
//     const combinedDrivers = driversFromDB.map(driver => ({
//         id: driver.id,
//         name: driver.name,
//         lastname: driver.lastname,
//         image: driver.image,
//         birthdate: driver.birthdate,
//         nationality: driver.nationality,
//         description: driver.description
//     })).concat(driversFromAPIForename, driversFromAPISurname);

//     // Verifica si no se encontraron conductores
//     if (combinedDrivers.length === 0) {
//         return { message: 'No se encontraron conductores con ese nombre o apellido.' };
//     }

//     return combinedDrivers.slice(0, 15);// Devuelve los primeros 15 conductores encontrados
// };


/*UNA POSIBLE UTILIZACION, LO QUE HACE ES BUSCAR EN LA API SIN IMPORTA SI EL NOMBRE VIENE EN MINUSCULA O MAYUSCULA */


const getDriverByNameController = async ( name ) => {
    let driversFromDB = await Driver.findAll({
        where: {
            [Op.or]: [
                {
                    name: {
                        [Op.iLike]: `%${name}%` 
                    }
                },
                {
                    lastname: {
                        [Op.iLike]: `%${name}%` 
                    }
                }
            ]
        },
        include: [{ model: Teams }],
        limit: 15
    });

    const { data } = await axios.get(API_URL)
    const allDrivers = data ;

    const driverNametoLowerCase = allDrivers.map( driver => ({
        ...driver,
        name: driver.name.forename.toLowerCase(), 
        lastname: driver.name.surname.toLowerCase()
    }));

    const nameToLowerCase = name.toLowerCase();

    const driverFilteredByNameOrLastname = driverNametoLowerCase.filter(driver => {
        return (
            driver.name.toLowerCase().includes(nameToLowerCase) ||
            driver.lastname.toLowerCase().includes(nameToLowerCase)
        );
    });

    // Filtrar duplicados basados en el ID del conductor
    /*TENDRAS QUE PROBARLOS */
    const uniqueDriversFromAPI = driverFilteredByNameOrLastname.filter(
        (driver, index, self) => index === self.findIndex(d => d.id === driver.id)
    );

    const combinedDrivers = uniqueDriversFromAPI.map(driver => ({
        id: driver.id,
        name: driver.name.charAt(0).toUpperCase() + driver.name.slice(1).toLowerCase(),
        lastname: driver.lastname.charAt(0).toUpperCase() + driver.lastname.slice(1).toLowerCase(),
        birthdate: driver.birthdate,
        nationality: driver.nationality,
        description: driver.description,
        teams:driver.teams,
        image: driver.image
    })).concat(driversFromDB);


    /* estás concatenando los resultados de la base de datos y
     los resultados de la API externa, lo cual puede generar duplicados si 
     algunos conductores coinciden tanto en la base de datos como en la API. */

    if (combinedDrivers.length === 0) {
        return { message: 'No se encontraron conductores con ese nombre o apellido.' };
    }

    return combinedDrivers.slice(0, 15);

};

module.exports = {
    getDriverByNameController
};
