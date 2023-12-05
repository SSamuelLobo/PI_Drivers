const { getAllDriversController } = require("../controllers/driversControllers/getAllDrivers.js")
<<<<<<< HEAD
const { getAllDriversFromBDController } = require("../controllers/driversControllers/getAllDriversFromBD.js")
=======
>>>>>>> c7d2fb7363d3a74735678d63654ad9fee2249b78
const { getDriverByIdController } = require("../controllers/driversControllers/getDriverById.js")
const { getDriverByNameController } = require("../controllers/driversControllers/getDriverByName.js")
const { creatDriverController } = require("../controllers/driversControllers/creatDriver.js")
const { updateDriverController } = require("../controllers/driversControllers/updateDriver.js")
const { deleteDriverController } = require("../controllers/driversControllers/deleteDriver.js")
const { getAllTeamsController } = require("../controllers/teamsControllers/getAllTeams.js")
const { getUserController } = require("../controllers/usersControllers/getUser.js")
const { createUserController } = require("../controllers/usersControllers/creatUser.js")



// 📍GET | /drivers
// Obtiene un arreglo de objetos, donde cada objeto es un driver con su información.
// IMPORTANTE: Si un driver no tiene imagen, deberás colocarle una por defecto 🖼️

const getAllDrivers = async ( req , res ) => {
    try {
        const allDrivers = await getAllDriversController() ;
        res.status(200).json(allDrivers)
    } catch (error) {
        console.error("Error en getAllDrivers:", error);
        res.status(500).json({ error: "Hubo un error al obtener todos los conductores." });
    }
}


<<<<<<< HEAD

const getAllDriversFromBD = async ( req , res ) => {
    try {
        const AllDriversFromBD = await getAllDriversFromBDController() ;
        res.status(200).json(AllDriversFromBD)
    } catch (error) {
        console.error("Error en getAllDrivers:", error);
        res.status(500).json({ error: "Hubo un error al obtener todos los conductores." });
    }
}

=======
>>>>>>> c7d2fb7363d3a74735678d63654ad9fee2249b78
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

const getDriverByName = async ( req , res )=>{
    try {
        const { name } = req.query ;
        const Driver = await getDriverByNameController( name );
        res.status(200).json(Driver)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
/*------------------------------------------------------------------------------------------------------------------------------------- */

// 📍 POST | /drivers
// Esta ruta recibirá todos los datos necesarios para crear un driver y relacionarlo con sus teams solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un driver en la base de datos, y este debe estar relacionado con sus teams indicados (al menos uno).

const creatDriver = async ( req , res )=>{

    try {
        const { name, lastname, nationality, birthdate, teamsname, description, image } = req.body ;
        console.log(name , lastname , nationality , birthdate , teamsname , description , image);
        const newDriver = await creatDriverController(name , lastname , nationality , birthdate , teamsname , description , image) ;
        return res.status(200).send(newDriver)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

/*------------------------------------------------------------------------------------------------------------------------------------- */
/*Extras modificar Driver en la base de Datos*/
const updateDriver = async ( req , res) =>{
    try {
        const { idDriver } = req.params;
        const newDriverData = req.body ;
        
        const updatedDriver = await updateDriverController( idDriver , newDriverData ) ;
        return res.status(200).send(updatedDriver)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteDriver = async (req , res) =>{
    try {
        const { idDriver } = req.params;

        const deleteResult = await deleteDriverController(idDriver);

        if (!deleteResult) {
            return res.status(404).json({ error: 'Conductor no encontrado' });
        }

        return res.status(200).json({ message: 'Conductor eliminado correctamente' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/*------------------------------------------------------------------------------------------------------------------------------------- */
// 📍 GET | /teams
// Obtiene un arreglo con todos los teams existentes de la API.
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los teams que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). 
// Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
const getAllTeams = async ( req , res ) => {
    try {
        const allTeams = await getAllTeamsController() ;
        console.log(allTeams)
        res.status(200).json(allTeams)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

/*------------------------------------------------------------------------------------------------------------------------------------- */
/*Users*/

const getUser = async ( req , res ) => {
    try {
        const { email , password } = req.query ;
        const User = await getUserController( email , password );

        if (!User) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(User)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


const createUser = async ( req , res ) => {
    try {
        const { email , password , name , lastname } = req.body ;
        const newUser = await createUserController(email , password , name ,lastname) ;
        return res.status(200).send(newUser)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



module.exports = {
    getAllDrivers,
<<<<<<< HEAD
    getAllDriversFromBD,
=======
>>>>>>> c7d2fb7363d3a74735678d63654ad9fee2249b78
    getDriverById,
    getDriverByName,
    creatDriver,
    updateDriver,
    deleteDriver,
    getAllTeams,
    getUser,
    createUser
}