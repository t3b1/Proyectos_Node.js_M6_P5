const express = require('express')
const fs = require('fs')
const app = express()


app.use(express.json());
app.use(express.static('public'))

app.get('/crear', (req, res) => {
    const archivo = req.query.archivo.trim(),
          contenido = req.query.contenido.trim();
    fs.writeFile(`public/${archivo}.txt`, contenido, 'utf-8', function () {
            res.send("creacion exitosa")
        })
    })

  
app.get('/leer', (req, res) => {
    const leerFile = req.query.leerarchivo.trim()
    fs.readFile(`public/${leerFile}.txt` , function (err,data) {
        res.send(data);
})
    
})

app.get('/rename', (req, res) => {
    const nombreFile = req.query.nombrearchivo.trim(),
          newFile = req.query.newnombre.trim();
    fs.rename(`public/${nombreFile}.txt`, `public/${newFile}.txt`, function(){
        res.send("Archivo renombrado");
    })
})


app.get('/eliminar', (req, res) => {
    const eliminarFile = req.query.borrararchivo.trim();
    fs.unlink(`public/${eliminarFile}.txt`, function(){
        res.send("Archivo eliminado");
    });
})

app.get('*', (req, res) => {
res.send('Página aún no implementada')
});

app.listen(3000, () => {
console.log('servidor ejecutando correctamente');
})