//funciones recomendadas por la documentacion de META 
//Para validar los tokens en el bot


const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const processMessage = require("../shared/processMessage");

const VerifyToken = (req, res) =>{
    console.log('Prueba!')
    try{
        var accessToken = "JHG234234DSFSDF2453SDF";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if(challenge != null && token != null && token == accessToken){
            res.send(challenge);
        }else{
            console.log('Prueba2')
            res.status(400).send();
        }
    }catch(e){
        console.log('prueba3')
        res.status(400).send();
    }
}

const ReceivedMessage = (req, res) => {
    try{
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var messageObject = value["messages"];

        if(typeof messageObject != "undefined"){
            var messages = messageObject[0];
            var text = getTextUser(messages);
            var number = messages["from"];

            
            if(text != ""){
                processMessage.Process(text, number);
            } 

        }


        res.send("EVENT_RECEIVED");
    }catch(e){
        myConsole.log(e);
        res.send("EVENT_RECEIVED");
    }
}

//Metodo para extraer texto
function getTextUser(messages){

    var text = ""; //Variable para almacenar el texto
    var typeMessge = messages["type"]; //Variable para acceder al texto en el json
    
    //Condicion para saber que tipo de dato es (Texto o boton interactivo)
    if(typeMessge == "text"){

        text = (messages["text"])["body"]; //Almacenamos el mensaje en la variable text

    }else if(typeMessge == "interactive"){

        var interactiveObject = messages["interactive"];

        var typeInteractive = interactiveObject["type"];

        //Condicion para saber si es un boton o una lista de opciones
        if(typeInteractive == "button_reply"){
            text = (interactiveObject["button_reply"])["title"];

        }else if(typeInteractive == "list_reply"){
            text = (interactiveObject["list_reply"])["title"];
        }
        else{
            myConsole.log("Sin mensaje");
        }
    }else{
        myConsole.log("Sin mensaje");
    }

    return text;
}



//Traemos los modulos 
module.exports = {
    VerifyToken,
    ReceivedMessage,
    myConsole
}