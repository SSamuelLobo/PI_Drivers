/* Obtener Handlers */
const { getAllDrivers , getDriverById , getDriverByName , creatDriver , getAllTeams } = require("../handlers/index.js")

/* */
const { Router } = require("express");
const router = Router();

/*------------------------------------------------------------------------------------------------------------------------------------- */
/*Routes Drivers */
router.get('/drivers', getAllDrivers);

router.get('/drivers/:idDriver', getDriverById);

router.get('/driver/name', getDriverByName);///drivers?name.forename={name}
/*Esta es la manera de buscarlo http://localhost:3001/driver/name?name=Fernando */


router.post('/drivers', creatDriver);
/*------------------------------------------------------------------------------------------------------------------------------------- */
/*Routes Teams */
router.get('/teams', getAllTeams);
/*------------------------------------------------------------------------------------------------------------------------------------- */


module.exports = router;
