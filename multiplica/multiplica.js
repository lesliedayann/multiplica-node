//Requireds 
//3 tipos de requireds
//1. Aquel que es propio del proyecto de node (Es decir, esa libreria ya existe y solo se define para usarlo)
//2. Express no es una libreria propia de node, es un paquete que se instala para ser usado 
//3. Requireds propios que se han creado en el proyecto, se identifica con ./


const fs = require('fs');
const colors = require('colors');

let data = '';
let listarArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El parametro ${base} no es un numero `)
            return;
        } else if (!Number(limite)) {
            reject(`El parametro  ${limite} no es un numero`)
            return;
        }
        console.log('===================='.green);
        console.log(`tabla de ${base}`.green);
        console.log('===================='.green);
        for (let x = 1; x <= limite; x++) {
            let res = base * x;

            data += `${base} * ${x} = ${res}\n`
        }
        resolve(`${data}`)

    })

}
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El parametro ${base} no es un número`)
            return;
        }
        for (let x = 1; x <= limite; x++) {
            let res = base * x;
            data += `${base} * ${x} = ${res}\n`
        }

        //Nombre del archivo a grabar, Mensaje, callback 
        //El resultado es la creacion de un archivo 
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);
            else resolve(`tabla-${base}.txt`)
                // console.log(`El archivo tabla-${base}.txt se ha creado`);
        });

    })
}
module.exports = {
    crearArchivo,
    listarArchivo
}