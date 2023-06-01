function MessageText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product":"whatsapp",
        "to": number,
        "text": {
            "preview_url": true,
            "body": textResponse
        },
        "type":"text"
    })
    return data;
}
function CatalogoPro(number){
    const data = JSON.stringify({
        "messaging_product":"whatsapp",
        "to": number,
        "type":"document",
        "document": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf",
            "caption": "Nuestro catalogo"
        }
    })
    return data;
}

function  MessageButtons(number){
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
function  botonesdeconfirmacion(number){
    const data = JSON.stringify({
        "messaging_product":"whatsapp",
        "to": number,
        "type":"interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Qué deseas realizar?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Escoger producto"
                        }   
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "Ver catalogo de nuevo"
                        }
                    }
                ]
            }
        }  
    })
    return data;
}
function ElQueSiResponde(number){
    const data = JSON.stringify({
        "messaging_product":"whatsapp",
        "to": number,
        "type":"interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Tus datos son correctos?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Sí, deseo continuar"
                        }   
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "Vio mero sapo"
                        }
                    }
                ]
            }
        }  
    })
    return data;
}

// function BuyConfirm(number){
//     const data = JSON.stringify({
//         "messaging_product":"whatsapp",
//         "to": number,
//         "type":"interactive",
//         "interactive": {
//             "type": "button",
//             "body": {
//                 "text": "¿Qué quieres hacer?"
//             },
//             "action": {
//                 "buttons": [
//                     {
//                         "type": "reply",
//                         "reply": {
//                             "id": "001",
//                             "title": "Escoger producto"
//                         }   
//                     },
//                     {
//                         "type": "reply",
//                         "reply": {
//                             "id": "002",
//                             "title": "Ver el catálogo de nuevo"
//                         }
//                     }
//                 ]
//             }
//         }  
//     })
//     return data;
// }

// Lista de productos:

function SampleList(number){
    const data = JSON.stringify({
        "messaging_product":"whatsapp",
        "to": number,
        "type":"interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✨Productos✨"
            },
            "footer": {
                "text": "¡Selecciona el producto que gustes comprar!"
        },
        "action":{
            "button": "Camisetas hombre :D",
            "sections":[
                {
                    "title": "Compra camisetas",
                    "rows":[
                        {
                            "id" : "Camiseta negra",
                            "title": "Camiseta blanca",
                            "description": "Camisetas bonitas :3"
                        }
                    ]
                }
            ]
        }
    }
})
    return data;
}
module.exports = {
    MessageText,
    MessageButtons,
    ElQueSiResponde,
    CatalogoPro,
    // BuyConfirm,
    SampleList,
    botonesdeconfirmacion
};