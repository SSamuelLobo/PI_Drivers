const { Driver }= require('../../db.js');



const deleteDriverController = async( idDriver ) => {
  
    const driverToDelete = await Driver.findByPk(idDriver);

    if (!driverToDelete) {
        return null; // Retornar null en lugar de un objeto con error
    }

    // Eliminar el conductor de la base de datos
    await driverToDelete.destroy();

    return { success: true };
}

module.exports= {
    deleteDriverController
}