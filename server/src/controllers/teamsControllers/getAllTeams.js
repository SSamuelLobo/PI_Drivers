const axios = require('axios');
/*Urls */
const API_URL = 'http://localhost:5000/drivers'; 

/*Mi base de Datos */
const { Teams } = require('../../db.js');


const getAllTeamsController = async () => {

    /*Aqui recibo un array de objtos de la api */
    const response = await axios.get(API_URL);
    const allDrivers = response.data;

    /*Sucede lo siguiente
    los equipos que recibo en la propiedad Teams los recibo como un string separados por una coma "," ejemplo
    "teams": "Williams, McLaren, Red Bull", y asi para todos los drivers
    El siguiente codigo separa los nombres de los equipos y los convierte en una array que contiene todos los nombres
    de los equipos*/

    /*El allTemas es el acumulador de Arrays, y el driver es el conductor donde se encuentra actualmente (es variable) */

    const allTeamsFromAPI = allDrivers.reduce((allTeams, driver) => {

        /* Busca desde en el array de objetos la propiedad "driver.teams" y devuelve un array separados por la coma los nombres de
        los equipos, ademas se asegura que no tenga espacios en blanco. Ejemplo
        "Williams, McLaren, Red Bull" => ["Williams", "McLaren", "Red Bull"]*/
        if (driver && driver.teams) {
            const teamsArray = driver.teams.split(',').map(team => team.trim());

        /*Se acumula los nombres de los equipos en allTeams y se utiliza el spreed Operator para añadirlo al array principal. Ejemplo
       No ["Williams", "McLaren", "Red Bull"], ["Ferrari"] 
       si  ["Williams", "McLaren", "Red Bull","Ferrari"]*/

            allTeams.push(...teamsArray);
        }
        return allTeams;
    }, []); //valor inicial del allTeams


    // Eliminar duplicados
        const uniqueTeams = [...new Set(allTeamsFromAPI)];

        // Almacenar los equipos en la base de datos
        uniqueTeams.forEach(async teamName => {
            await Teams.findOrCreate({
                where: { name: teamName }
            });
        });
 
        // return { message: 'Equipos almacenados en la base de datos correctamente.' };
        return uniqueTeams ;
}

module.exports={
    getAllTeamsController
}

//ferrari
// 1e8e9e75-5f43-41a1-a9a0-26326e771882