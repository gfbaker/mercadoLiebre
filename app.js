const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/ayuda', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/ayuda.html'));
});

app.get('/ofertas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/ofertas.html'));
});

app.get('/vender', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/vender.html'));
});

/*Formulario de Registro*/

app.get('/crearCuenta', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/crearCuenta.html'));
});

app.post('/crearCuenta', (req, res) => {
    res.redirect('/');
});

/**/

/*Formulario de usuario registrado*/
app.get('/ingresa', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/ingresa.html'));
});

app.post('/ingresa', (req, res) => {
    res.redirect('/');
});

/**/

app.get('/tiendasOficiales', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/tiendasOficiales.html'));
});


app.get('/miscompras', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/miscompras.html'));
});