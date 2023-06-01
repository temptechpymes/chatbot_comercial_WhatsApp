const whatssappModel = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappServices");
const sql = require("mssql");

/*----------------------------------------Base de datos---------------------------------------------*/
const usuarios = {}


//Conexión a la DB
const config = {
    user: 'prueba',
    password: 'holasoyuntest123*',
    server: 'nuestroserverficticio.database.windows.net',
    database: 'ChatBotComercial',
    options: {
    trustedConnection: true
    }
};

function Insertar(nombre, apellido, cedula, celular, email){
    sql.connect(config, function (err) {
        if (err) {
            console.log(err);
        }
    
        var request = new sql.Request();
    request.query(`insert into persona(nombrePersona, apellidoPersona, cedula, celular, email) values(${nombre},${apellido},${cedula},${celular},${email})`, function (err, recordSet) {
        if (err) {
            
            console.log(err)
        } else {
            console.log("Insertó :D")
        }

    })
    console.log(nombre, apellido, cedula, celular, email)
}
    )};


function consulta(cedula, number) {
    sql.connect(config, function (err) {
    if (err) {
        console.log(err);
    }

    var request = new sql.Request();

    request.query(`select * from persona where cedula = ${cedula}`, function (err, recordSet) {
        if (err) {

            console.log(err)
        } else {
            if(recordSet.recordset.length != 0){
                usuarios[number] = recordSet.recordset[0]
            }
        }

        if(request.query != undefined){
            // console.log("Si dió")
        }else{
            console.log(err)
        }
        });
    });



    }
    
        
// 
//-------------------------------Acá empiezan las interacciones del chatbot------------------------------------------//

function Process(text, number){
    if(usuarios[number] == undefined || usuarios[number] == null){
        usuarios[number] = {}
    }

    text = text.toLowerCase();
    var models = [];

    if(text.includes("hola") || text.includes("holi") || text.includes("oe")||text.includes("ola")){
        //SALUDAR
        var model = whatssappModel.MessageText("Hola usuario :D", number);
        models.push(model);
        //Espera a botones
        setTimeout(() => {
            var modelList = whatssappModel.MessageButtons(number);
            whatsappService.SendMessageWhatsaApp(modelList);
        }, 1000);

    }else if(text.includes("realizar compra")){
        var rCompra = whatssappModel.MessageText("Por supuesto, permitenos tu número de cédula para saber si ya estás registrado con nosotros :D", number);
        models.push(rCompra);
        usuarios[number].flag = 1
    }else if(usuarios[number].flag == 1){

        

        consulta(text, number)
        setTimeout(() => {

            if(usuarios[number].cedula != undefined){

                if(usuarios[number].cedula == text){

                    var mensajeDatos = whatssappModel.MessageText("Mira nuestro catalogo: ", number)
                    whatsappService.SendMessageWhatsaApp(mensajeDatos)
                    
                    setTimeout(() => {
                        var confirmacion = whatssappModel.CatalogoPro(number);
                        whatsappService.SendMessageWhatsaApp(confirmacion);
                    }, 1000);

                    setTimeout(() => {
                        var confirmacion2 = whatssappModel.botonesdeconfirmacion(number);
                        whatsappService.SendMessageWhatsaApp(confirmacion2);
                    }, 1500);
                }
            }else{
                var mensajeDatos = whatssappModel.MessageText("No tenemos datos tuyos, porfavor ingresa tu nombre completo", number)
                whatsappService.SendMessageWhatsaApp(mensajeDatos)
                usuarios[number].cedula = text
                usuarios[number].flag = 2
            }
        }, 1000);
    }
    else if(usuarios[number].flag == 2){
        
        usuarios[number].nombre = text
        var mensaje = whatssappModel.MessageText("Genial ahora ingresa tu apellido", number)
        whatsappService.SendMessageWhatsaApp(mensaje)
        usuarios[number].apellidos = text

        usuarios[number].flag = 3

    }else if(usuarios[number].flag == 3){


        var mensaje = whatssappModel.MessageText("Genial ahora ingresa tu celular", number)
        whatsappService.SendMessageWhatsaApp(mensaje)
                    
        usuarios[number].flag = 4

    }else if(usuarios[number].flag == 4){

        usuarios[number].celular = text
        var mensaje = whatssappModel.MessageText("Genial ahora ingresa tu correo", number)
        whatsappService.SendMessageWhatsaApp(mensaje)

        usuarios[number].flag = 5
    }
    
    else if(usuarios[number].flag == 5){
//------------------------------------------Guardando datos en la DB-----------------------------//
        usuarios[number].email = text
        var nombre = usuarios[number].nombre
        var apellido = usuarios[number].apellido
        var cedula = usuarios[number].cedula
        var celular = usuarios[number].celular
        var email = usuarios[number].email

        Insertar(nombre, apellido,cedula,celular, email) 

        var mensaje = whatssappModel.MessageText('Excelente ya puedes mirar nuestro catalogo: ', number)
        whatsappService.SendMessageWhatsaApp(mensaje)
        console.log(usuarios)
        usuarios[number].flag = 0
        setTimeout(() => {
            var confirmacion = whatssappModel.CatalogoPro(number);
            whatsappService.SendMessageWhatsaApp(confirmacion)
        }, 1000);
    }
    
    
    else if(text.includes("gracias") || text.includes("muchas gracias")
    || text.includes("ty") || text.includes("no, gracias")){
        var model = whatssappModel.MessageText("Me alegra haber podido ayudarte :D!", number);
        models.push(model);
    }
    else if(text.includes("chao") || text.includes("adios")
    || text.includes("adiós") || text.includes("hasta luego") || text.includes("bye")){
        var model = whatssappModel.MessageText("Hasta pronto, espero tengas un buen día ^^", number);
        models.push(model);
    }else if(text.includes == "escoger producto"){
        var listaProductos = whatssappModel.SampleList(number);
        whatsappService.SendMessageWhatsaApp(listaProductos)
    }
    else{
        //No entendió        
        var model = whatssappModel.MessageText("I don't know what you say :C", number);
        models.push(model);
    }



    models.forEach(model => {
        whatsappService.SendMessageWhatsaApp(model);
    });


}

module.exports = {
    Process
}; 