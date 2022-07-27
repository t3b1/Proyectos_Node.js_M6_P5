module.exports = registro.js
const fs = require('fs')

const nombre_archivo = process.argv[2],
      extencion = process.argv[3],
      indicador_economico = process.argv[4],
      cantidad = process = process.argv[5];

function leerArchivo(){
    fs.readFileSync(`${nombre_archivo}.${extencion}`, 'utf-8', function(err, res){
        console.log(res);
    })
}