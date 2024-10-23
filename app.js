//SON mis sobrenombres
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const fs = require('fs');
const app = express();

const port = 3000; //Puerto

// Configuración de las solicitudes del Json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));


// Configuración de conexión a MySQL en RDS
let conexion = mysql.createConnection({
    host: "databasegenesis.cykpjcqdi7ng.us-east-1.rds.amazonaws.com",  // Punto de enlace
    database: "rds",   //nombre de mi base de datos                                      
    user: "admin",    //es mi usuario                                            
    password: "admin123"  //contraseña                                         
});

// Conexión a la base de datos
conexion.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos.');
});



// Envia los datos de mi formulario
app.post('/submit-form', (req, res) => {
    const {
       nombreapellido, edad, correo, numero, descripcion
    } = req.body;

    // Insertamos los datos 
    const query = 'INSERT INTO contactanos (nombreapellido, edad, correo, numero, descripcion ) VALUES (?, ?, ?, ?, ?)';
    
    conexion.query(query, [
        nombreapellido, edad, correo, numero, descripcion
    ], (err, result) => {
        if (err) {
            console.error('Error al insertar datos: ' + err.stack);
            res.status(500).send('Ocurrió un error al procesar tu consulta.');
            return;
        }

        // Si esta bien nos envia  la pagina de contactanos.html
        const htmlPath = path.join(__dirname, 'Html','contactanos.html');
        fs.readFile(htmlPath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo HTML: ' + err);
                res.status(500).send('Ocurrió un error al procesar tu consulta.');
                return;
            }
            res.send(data);
        });
    });
});




// Servir el archivo HTML principal para el formulario
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Html','contactanos.html'));
});


// Escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
