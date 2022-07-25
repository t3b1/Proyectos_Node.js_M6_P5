const fs = require('fs').promises


async function escribir () {
    let lista = ['cafe','azucar','porotos','papel higenico','cloro'];

    lista = lista.join('\n');

    await fs.writeFile('shopping.txt', lista, 'utf8');

    const contenido = await fs.readFile('shopping.txt','utf8');
    console.log(contenido);

    await fs.rename('shopping.txt', 'listaCompras.txt');
    console.log('renombrado')
    await fs.unlink('listaCompras.txt');
    console.log('eliminado');
}

escribir()