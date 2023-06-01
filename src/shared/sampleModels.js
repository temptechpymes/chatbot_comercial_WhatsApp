const myConsole = require("../controllers/whatsappControllers");


function SampleText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product":"whatsapp",
        "to": number,
        "text": {
            "body": textResponse
        },
        "type":"text"
    })
    return data;
}
function SampleImage(number){
    const data = JSON.stringify({
        "messaging_product":"whatsapp",
        "to": number,
        "type":"image",
        "image": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png"
        },
    })
    return data;
}
function SampleAudio(number){
    const data = JSON.stringify({
        "messaging_product":"whatsapp",
        "to": number,
        "type":"audio",
        "audio": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
        },
    })
    return data;
}
function SampleVideo(number){

    const data = JSON.stringify({
        "messaging_product":"whatsapp",
        "to": number,
        "type":"video",
        "video": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
        },
    })
    return data;
}
function SampleDocument(number){
    const data = JSON.stringify({
        "messaging_product":"whatsapp",
        "to": number,
        "type":"document",
        "document": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf"
        },
    })
    return data;
}
function SampleButtons(number){
    const data = JSON.stringify({
        "messaging_product":"whatsapp",
        "to": number,
        "type":"interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Cómo te puedo ayudar?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Realizar compra"
                        }   
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "Ver mis compras"
                        }
                    }
                ]
            }
        }  
    })
    return data;
}



//SampleButtons.type



// function SampleList(number){
//     const data = JSON.stringify({
//         "messaging_product":"whatsapp",
//         "to": number,
//         "type":"interactive",
//         "interactive": {
//             "type": "list",
//             "body": {
//                 "text": "Aquí van algunas opciones: "
//             },
//             "footer": {
//                 "text": ""
//         },
//         "action":{
//             "button": "Ver opciones",
//             "sections":[
//                 {
//                     "title": "Compra y vende productos",
//                     "rows":[
//                         {
//                             "id" : "main-comprar",
//                             "title": "Comprar",
//                             "description": "Compra los mejores celulares a credito"
//                         }
//                     ]
//                 }
//             ]
//         }
//     }
// })
//     return data;
// }

// function SampleLocation(number){
//     const data = JSON.stringify({
//         "messaging_product":"whatsapp",
//         "to": number,
//         "type":"location",
//         "location": {
//             "latitude": "-12.067158831865067",
//             "longitude": "-77.03377940839486",
//             "name": "Estadio nacional de Perú",
//             "adress": "C. José Díaz s/n, Cercado de Lima 15046"
//     }
// })
//     return data;
// }

