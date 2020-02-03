module.exports.io = (io) => {
    io.on("connection", (Client) => { //cuando un usuario se conecta
        console.log("Usuario Conectado");

        Client.emit("ServidorMSG", {
            Usuario: "Administrador",
            Mensage: "Bienvenido"
        })

        Client.on("Usuario", (msg, callback) => {
            // if(msg.Usuario){
            //     callback({
            //         msg: "Todo Bien"
            //     })
            // } else {
            //     callback({
            //         msg: "Todo Mal"
            //     })
            // }
            console.log(msg);
            
            Client.broadcast.emit("Usuario", msg)
        })

        Client.on("disconnect", () => {
            console.log("Usuario Desconectado");
            
        })
    })
}