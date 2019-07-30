/*  yargs es una libreria que se encuentra en los modulos de node*/
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10'
    }
}
const argv = require('yargs')
    /*concatenacion del nombre del comando, ayuda y un objeto que contiene el conjunto de parametros que el comando puede recibir */
    .command('crear', 'Crea un archivo la tabla de multiplicar', opts)
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}