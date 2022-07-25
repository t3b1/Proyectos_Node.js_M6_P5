const http = require('http')
const moment = require('moment')

const hostname = '127.0.0.1'
const port = 3000

const animal =['rata','buey','tigre','conejo','dragon','serpiente','caballo','siervo','mono','gallo','perrro','cerdo']

const server = http.createServer((req, res) => {
   
  const azar = Math.floor(Math.random() * animal.length),
        animalAzar = animal[azar],
        fecha = moment().locale('es').format('dddd h:mm:ss a');

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(`tu animal del horoscopo chino es: ${animalAzar} y dia ${fecha}`)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})