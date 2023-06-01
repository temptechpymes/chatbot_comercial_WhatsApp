const express = require("express");
const apiRoute = require("./routes/routes");

const app = express();

//Configuramos el puerto 3000 por defecto
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/whatsapp", apiRoute);


//Leemos el puerto
app.listen(PORT, () => {
    console.log("Te encuentras en el puerto: "+ PORT)
    }
)