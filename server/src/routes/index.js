/* Obtener Handlers */
const { getAllDrivers , getDriverById , getDriverByName , creatDriver } = require("../handlers/driverHandlers")

/* */
const { Router } = require("express");
const router = Router();

/*------------------------------------------------------------------------------------------------------------------------------------- */
/*Routes Drivers */
router.get('/drivers', getAllDrivers);

router.get('/drivers/:idDriver', getDriverById);

router.get('/drivers/name', getDriverByName);

router.post('/drivers', creatDriver);
/*------------------------------------------------------------------------------------------------------------------------------------- */


module.exports = router;
