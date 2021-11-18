
const { request, response } = require('express');
const express = require('express');

const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());

server.get('/',(request,response) => {
    response.json({
        message: 'Esta vez la ruta raiz del servidor API WEB'
    });
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