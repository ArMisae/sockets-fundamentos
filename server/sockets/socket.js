const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('EnviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la Aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('EnviarMensaje', (data, callback) => {
        
        console.log(data);

        client.broadcast.emit('EnviarMensaje', data);

        // if(mensaje.usuario){
            
        //     callback({
        //         resp: 'Todo Salio bien!!'
        //     });

        // }else {
        //     callback({
        //         resp: 'Todo Salio mal!!'
        //     });
        // }

    });

});