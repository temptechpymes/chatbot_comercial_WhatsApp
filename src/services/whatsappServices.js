const https = require("https");



function SendMessageWhatsaApp(data){
    
const options = {
    host: "graph.facebook.com",
    path: "/v15.0/108414445477474/messages",
    method: "POST",
    body: data,
    headers: {
        "content-Type": "application/json",
        Authorization: "Bearer EAAf8L6MBd4ABADxUXWoMWyZAqv5pNAvroUik2ob9o1mxLRU1JMCQQnxvtL4t4qXfJNkgguJlZBjDBIcUwtBlgYTciiktlEFZAeQSqyzwZCCx4f0oxCAUK2oIsitouuOKZBymiS5llHp450VOaFSTzxqDWcQ8FeZBbU2wHw2P69z3k2dZA81WlH5"
        }
    };
    const req = https.request(options, res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error =>{
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsaApp
}