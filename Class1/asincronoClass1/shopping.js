const fs = require('fs')

function escribir () {
  let lista = ['cafe','azucar','porotos','papel higenico','cloro']
  
  fs.writeFile('lista.txt', lista, 'utf8', function() {
    console.log('Archivo escrito correctamente');
  })
  
  console.log('Terminando ejecución');
}

function leer () {
  fs.readFile('./lista.txt', 'utf8', function(err, datos) {
    console.log(datos);
  })
  console.log('Terminando ejecución');
}

function renombrar () {
  fs.rename('lista.txt', 'lista_pedido.txt', function() {
    console.log('Archivo renombrado');
  })
}

function eliminar () {
  fs.unlink('lista_pedido.txt', function() {
    console.log('Archivo eliminado');
  })
}

escribir();
setTimeout(leer, 2000);
setTimeout(renombrar, 4000);
setTimeout(eliminar, 6000);

