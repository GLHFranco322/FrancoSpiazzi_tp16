import fs from 'fs';

function importarBicicletas() {
    const data = fs.readFileSync('./bicicletas.json', 'utf-8');
    return JSON.parse(data).bicicletas;
}

// Exporta la función utilizando ES Modules
export { importarBicicletas };