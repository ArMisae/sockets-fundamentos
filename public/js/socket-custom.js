
var socket = io();

socket.on('connect', function (){

    console.log('Conectado al servidor');
    

});

socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});


// Enviar información
socket.emit('EnviarMensaje', {
    usuario: 'Arnold',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log('Respuesta del Server', resp);
});

socket.on('EnviarMensaje', function(mensaje){

    console.log('Servidor: ', mensaje);

});