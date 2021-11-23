
const { request, response } = require('express');
const express = require('express');
const { Client } = require('pg');
const cors = require('cors')

const dbclient = new Client ({
    connectionString: 'postgresql://postgres:juanjose123@localhost:5432/postgres'
});



const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());

dbclient.connect((error) => {
    if (error) console.log("Hubo un error al intentar conectarse a PostgreSQL");
    else console.log("Conectado correctamente a PostgreSQL");
});

server.get('/',(request,response) => {
    response.json({
        message: 'Esta vez la ruta raiz del servidor API WEB'
    });
});

server.get('/Vuelos', (request,res) => {
    const query = 'SELECT * FROM "Vuelos"';
    let response = {};
    dbclient.query(query, (error, dbreponse) =>{
        if(error){
            console.log('Hubo un error al consultar los vuelos');
            response = { status: 500, data: null, message: 'Hubo un error al consultar los vuelos' };
        }
        else{
            console.log('Los vuelos son: ',dbreponse.rows);
            response = { status: 200, data:dbreponse.rows, message: 'Vuelos encontrados con exito' };
        }
        res.json(response);
    })
});

server.get('/Usuarios', (request,res) => {
    const query = 'SELECT * FROM "Usuarios"';
    let response = {};
    dbclient.query(query, (error, dbreponse) =>{
        if(error){
            console.log('Hubo un error al consultar los Usuarios');
            response = { status: 500, data: null, message: 'Hubo un error al consultar los usuarios' };
        }
        else{
            console.log('Los usuarios son: ',dbreponse.rows);
            response = { status: 200, data:dbreponse.rows, message: 'Usuarios encontrados con exito' };
        }
        res.json(response);
    })
});

server.post('/',(request,response)=>{
    const { body }= request;
    
    response.json({
        message: 'Estas haciendo una petición a un endpoint tipo POST',
        user: body
    });
});

server.listen(PORT,(error) =>{
    if(!error) console.log('Servidor iniciado en el puerto: ',{PORT});
});