//importar la funcionalidad de yargs a esta constante
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo } = require('./multiplica/multiplica')
const { listarArchivo } = require('./multiplica/multiplica')

let comando = argv._[0];
let base = argv.base
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarArchivo(base, limite)
            .then(response => console.log(response))
            .catch(err => console.log(err))
        break;

    case 'crear':

        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado:`, colors.red(` ${archivo}`)))
            .catch(err => console.log(err));

        break;
    default:
        console.log('Comando no reconocido');

}
//Recibir un argumento a traves de la consola 
// argv2 contendra los valores recibidoes en la consola, por default los primeros dos argumentos de yargs son 
// 0: Ruta de la aplicacion de node
// 1: ruta del programa actual, es por ello que comienza a buscar a partir de la posicion 2 
//let argv2 = process.argv;
//let parametroBase = argv2[3];
//let base = parametroBase.split('=')[1];