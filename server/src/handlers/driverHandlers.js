const { getAllDriversController , getDriverByIdController } = require("../controllers/driversControllers.js")

// 📍GET | /drivers
// Obtiene un arreglo de objetos, donde cada objeto es un driver con su información.
// IMPORTANTE: Si un driver no tiene imagen, deberás colocarle una por defecto 🖼️

const getAllDrivers = async ( req , res ) => {
    try {
        const allDrivers = await getAllDriversController() ;
        res.status(200).json(allDrivers)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


/*------------------------------------------------------------------------------------------------------------------------------------- */

// 📍 GET | /drivers/:idDriver
// Esta ruta obtiene el detalle de un driver específico. Es decir que devuelve un objeto con la información pedida en el 
// detalle de un driver.
// El driver es recibido por parámetro (ID).
// Tiene que incluir los datos del/los team/s del driver al que está asociado.
// Debe funcionar tanto para los drivers de la API como para los de la base de datos.

const getDriverById = async ( req , res ) => {
    try {
        const { idDriver } = req.params;
        const Driver = await getDriverByIdController(idDriver) ;
        res.status(200).json(Driver)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

/*------------------------------------------------------------------------------------------------------------------------------------- */
//INVESTIGAR ESTO
// 📍 GET | /drivers/name?="..." 
// Esta ruta debe obtener los primeros 15 drivers que se encuentren con la palabra recibida por query.
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el driver, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos.

const getDriverByName = ()=>{
    
}
/*------------------------------------------------------------------------------------------------------------------------------------- */

// 📍 POST | /drivers
// Esta ruta recibirá todos los datos necesarios para crear un driver y relacionarlo con sus teams solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un driver en la base de datos, y este debe estar relacionado con sus teams indicados (al menos uno).

const creatDriver = ()=>{
    
}

module.exports = {
    getAllDrivers,
    getDriverById,
    getDriverByName,
    creatDriver
}