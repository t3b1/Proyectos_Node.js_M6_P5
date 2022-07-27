const express = require('express')
const fs = require('fs')
const app = express()


app.use(express.json());
app.use(express.static('public'))

app.get('/crear', (req, res) => {
    fs.writeFile('public/' + req.query.archivo.trim(), req.query.contenido.trim(), 'utf-8', function () {
            res.send("creacion exitosa")
        })
    })

  
app.get('/leer', (req, res) => {
fs.readFile(`public/` + req.query.leerarchivo.trim(), function (err,data) {
    res.send(data);
})
    
})

app.get('/rename', (req, res) => {
    fs.rename('public/'+req.query.nombrearchivo.trim(), 'public/'+req.query.newnombre.trim(), function(){
        res.send("Archivo renombrado");
    })
})


app.get('/eliminar', (req, res) => {
    fs.unlink('public/' + req.query.borrararchivo.trim(), function(){
        res.send("Archivo eliminado");
    });
})

app.get('*', (req, res) => {
res.send('Página aún no implementada')
});

app.listen(3000, () => {
console.log('servidor ejecutando correctamente');
})