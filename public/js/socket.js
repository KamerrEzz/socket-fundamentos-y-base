/*
los on son para escuchar 
los emit son para emitir
*/

var socket = io()

socket.on("connect", () => { //cuando nos conectamos al servidor
    console.log("Contectado Al servidor");
    
})

socket.on("disconnect", function(){
    console.log("Perdimos conexion con el servidor");
    
})


socket.on("ServidorMSG", (msg) => {
    console.log("Administrador:",msg);
    
})

socket.on("Usuario", function(msg){
    console.log(msg);
    
})
socket.emit("Usuario", {
    Usuario: "Kamerr Ezz",
    Msg: "Hola mundo"
}, function(resp) { // Verificar si esta bien
    console.log("Resp Server",resp);
    
})
