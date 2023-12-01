/*IMPORTANDO LA BASE DE DATOS */
const { User }= require('../../db.js');


const getUserController = async ( email , password ) => {
    const userFromDB = await User.findOne({
        where: { email: email, password: password }, // Asegúrate de comparar el email y la contraseña correctamente
    });

    if (!userFromDB) {
        return null;
    }

    // Obtener los conductores asociados con este usuario a través de la tabla intermedia
    const drivers = await userFromDB.getDrivers();

    
    return {
        user: userFromDB,
        drivers: drivers,
        access: true
    };

}

module.exports = {
    getUserController
}