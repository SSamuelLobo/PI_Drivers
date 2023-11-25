/*Importando la Base de Datos*/
const { Driver, Teams } = require('../../db.js');

const creatDriverController = async (name , lastname , nationality , birthdate , teamsname , description , image) => {
    const [ newDriver , created ] = await Driver.findOrCreate({
        where:{
                name,
                lastname,
                nationality,
                birthdate,
                description,
                image
        }
    });

    // const addTeamstoBD = teamsname.map(async teamName => {
    //     console.log('Team Name:', teamName); // Agregar este console.log
    //     let [team] = await Teams.findOrCreate({
    //         where: { name: { [Op.iLike]: `%${teamName}%` } }
    //     });
    //     return team;
    // });
    const addTeamstoBD = teamsname.map(async teamName => {
        console.log('Team Name:', teamName);
        let [team] = await Teams.findOrCreate({ where: { name: teamName } });
        return team;
    });

    //teams es un array de objetos
    const teams = await Promise.all(addTeamstoBD);
    console.log('Teams:', teams); // Agregar este console.log

    // Asociar los equipos al conductor (si hay equipos)
    if (teams.length > 0) {
        console.log('Teams obtained:', teams);
        await newDriver.addTeams(teams);
    }

    return { newDriver, teams };
}

module.exports = {
    creatDriverController
}