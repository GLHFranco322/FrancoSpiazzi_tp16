import { importarBicicletas } from './datosBici.js';

const dhBici = {
    bicicletas: importarBicicletas(),
};
console.log("Los ID de las bicicletas que tenemos son:\n",dhBici.bicicletas);
