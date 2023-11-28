/*iMPORTANDO LA BASE DE DATOS */
const { Driver , Teams  }= require('../../db.js');



const updateDriverController = async ( idDriver , newDriverData ) => {

    const driverToUpdate = await Driver.findByPk(idDriver, { include: [{ model: Teams }], });

    if (driverToUpdate) {
        // Actualiza los campos necesarios con los nuevos datos
        driverToUpdate.name = newDriverData.name ? newDriverData.name : driverToUpdate.name;
        driverToUpdate.lastname = newDriverData.lastname ? newDriverData.lastname : driverToUpdate.lastname;
        driverToUpdate.birthdate = newDriverData.birthdate ? newDriverData.birthdate : driverToUpdate.birthdate;
        driverToUpdate.nationality = newDriverData.nationality ? newDriverData.nationality : driverToUpdate.nationality;
        driverToUpdate.description = newDriverData.description ? newDriverData.description : driverToUpdate.description;
        driverToUpdate.image = newDriverData.image ? newDriverData.image : driverToUpdate.image;
        // Puedes hacer lo mismo con otros campos que desees actualizar
  
        // Verifica si hay nuevos equipos en newDriverData y actualiza la asociación
        if (newDriverData.teamsname && Array.isArray(newDriverData.teamsname)) {

            /*El promise es espera que todo el array de promesas se resuelva */
            const teams = await Promise.all(newDriverData.teamsname.map(async teamName => {

                /* el [team] lo que hace es destructuracion*/
            let [team] = await Teams.findOrCreate({ where: { name: teamName } });
            return team;
            }));
        console.log(teams);
            // Elimina todos los equipos asociados existentes
            await driverToUpdate.setTeams([]);

            // Asigna los nuevos equipos al conductor
            await driverToUpdate.addTeams(teams);
        }

        // Guarda los cambios en la base de datos
        await driverToUpdate.save();
    } 

    return driverToUpdate ;
}


module.exports = {
    updateDriverController
}