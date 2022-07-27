const http = require('http')
const axios = require('axios')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(async (req, res) => {

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  let respuesta;
  
  if (req.url == '/') {
    respuesta = `
      <html>
        <h2>Servicio caído</h2>
      </html>
    `
  }
  else if (req.url == '/api') {

    respuesta = {
      fecha: new Date(),
      dolar: {
        indicador: 'Dolar EEUU',
        valor: 950
      },
      uf: {
        indicador: 'Unidad de Fomento',
        valor: 33450
      }
    }
    respuesta = JSON.stringify(respuesta)
  }
  else if (req.url == '/api/dolar') {
    respuesta = {
      hoy: 950,
      ayer: 1000,
      anteayer: 'muy caro!'
    }
    respuesta = JSON.stringify(respuesta)
  }
  else if (req.url == '/api/clima') {
    const resp = await axios.get('https://api.gael.cloud/general/public/clima')
    const estaciones = resp.data

    respuesta = JSON.stringify(estaciones)

  }
  else {
    respuesta = 'Ruta no implementada'
  }
  
  res.end(respuesta)
} )

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`)
})