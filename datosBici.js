import fs from 'fs';

function importarBicicletas() {
    const data = fs.readFileSync('./bicicletas.json', 'utf-8');
    return JSON.parse(data).bicicletas;
}

// Exporta la función utilizando ES Modules
export { importarBicicletas };

// Si necesitas probar la función directamente aquí
const bicicletas = importarBicicletas();
console.log(bicicletas);
