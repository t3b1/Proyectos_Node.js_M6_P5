const axios = require('axios'),
      registro = require('./registro');


async function getDatos() {
    const response = await axios.get('https://mindicador.cl/api'),
        date = new Date();

    const valor = response.data[registro.indicador_economico].valor,
          total = (registro.cantidad / valor).toFixed(2)
    const datos = `a la fecha: ${date} \n
    fue realizada cotizacion con los siguientes datos:
    cantidad de pesos a convertir: ${registro.cantidad} pesos \n
    convertido a ${registro.indicador_economico} da un total de: ${total}`

    fs.writeFile(`${registro.nombre_archivo}.${registro.extencion}`, datos, 'utf-8', function(){
        setTimeout(() => {registro.leerArchivo()}, 2000)
    })
}