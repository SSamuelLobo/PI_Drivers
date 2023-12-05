/* Obtener Handlers */
const { getAllDrivers , getAllDriversFromBD , getDriverById , getDriverByName , creatDriver , updateDriver , deleteDriver,
          getAllTeams , getUser , createUser } = require("../handlers/index.js")

/* */
const { Router } = require("express");
const router = Router();

/*------------------------------------------------------------------------------------------------------------------------------------- */
/*Routes Drivers */
router.get('/drivers', getAllDrivers);

router.get('/driversFromBD', getAllDriversFromBD);

router.get('/drivers/:idDriver', getDriverById);

router.get('/driver/name', getDriverByName);///drivers?name.forename={name}
/*Esta es la manera de buscarlo http://localhost:3001/driver/name?name=Fernando */

router.post('/drivers', creatDriver);

router.put('/drivers/:idDriver', updateDriver);

/*Este los eliminara pero solo los de la base de datos */
router.delete('/drivers/:idDriver' , deleteDriver)
/*------------------------------------------------------------------------------------------------------------------------------------- */
/*Routes Teams */
router.get('/teams', getAllTeams);
/*------------------------------------------------------------------------------------------------------------------------------------- */

/*Routes Users */
router.get('/user', getUser);

router.post('/user', createUser);

module.exports = router;
